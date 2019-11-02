/*! *********************************************************************************
* \addtogroup Battery Service
* @{
********************************************************************************** */
/*! *********************************************************************************
* Copyright (c) 2014, Freescale Semiconductor, Inc.
* Copyright 2016-2017 NXP
* All rights reserved.
*
* \file
*
* SPDX-License-Identifier: BSD-3-Clause
********************************************************************************** */

/************************************************************************************
*************************************************************************************
* Include
*************************************************************************************
************************************************************************************/
#include "ble_general.h"
#include "gatt_db_app_interface.h"
#include "gatt_server_interface.h"
#include "gap_interface.h"
#include "battery_interface.h"

/************************************************************************************
*************************************************************************************
* Private constants & macros
*************************************************************************************
************************************************************************************/

/************************************************************************************
*************************************************************************************
* Private type definitions
*************************************************************************************
************************************************************************************/

/************************************************************************************
*************************************************************************************
* Private memory declarations
*************************************************************************************
************************************************************************************/

/************************************************************************************
*************************************************************************************
* Private functions prototypes
*************************************************************************************
************************************************************************************/

static void Bas_SendNotifications(basConfig_t* pServiceConfig, uint16_t handle);

/************************************************************************************
*************************************************************************************
* Public functions
*************************************************************************************
************************************************************************************/

bleResult_t Bas_Start (basConfig_t *pServiceConfig)
{
    uint8_t mClientId = 0;

    /* reset all slots for valid subscribers */
    for(mClientId = 0; mClientId < pServiceConfig->validSubscriberListSize; mClientId++)
    {
        pServiceConfig->aValidSubscriberList[mClientId] = FALSE;
    }

    /* Record initial battery level measurement */
    Bas_RecordBatteryMeasurement(pServiceConfig);

    return gBleSuccess_c;
}

bleResult_t Bas_Stop (basConfig_t *pServiceConfig)
{
    uint8_t mClientId = 0;

    /* reset all slots for valid subscribers */
    for(mClientId = 0; mClientId < pServiceConfig->validSubscriberListSize; mClientId++)
    {
        pServiceConfig->aValidSubscriberList[mClientId] = FALSE;
    }
    return gBleSuccess_c;
}

bleResult_t Bas_Subscribe(basConfig_t* pServiceConfig, deviceId_t clientDeviceId)
{
    if(clientDeviceId >= pServiceConfig->validSubscriberListSize)
    {
        return gBleInvalidParameter_c;
    }

    pServiceConfig->aValidSubscriberList[clientDeviceId] = TRUE;

    return gBleSuccess_c;
}

bleResult_t Bas_Unsubscribe(basConfig_t* pServiceConfig, deviceId_t clientDeviceId)
{
    if(clientDeviceId >= pServiceConfig->validSubscriberListSize)
    {
        return gBleInvalidParameter_c;
    }

    pServiceConfig->aValidSubscriberList[clientDeviceId] = FALSE;

    return gBleSuccess_c;
}

bleResult_t Bas_RecordBatteryMeasurement (basConfig_t* pServiceConfig)
{
    uint16_t  handle;
    bleResult_t result;
    bleUuid_t uuid = Uuid16(gBleSig_BatteryLevel_d);

    /* Get handle of  characteristic */
    result = GattDb_FindCharValueHandleInService(pServiceConfig->serviceHandle,
        gBleUuidType16_c, &uuid, &handle);

    if (result != gBleSuccess_c)
        return result;

    /* Update characteristic value and send notification */
    result = GattDb_WriteAttribute(handle, sizeof(uint8_t), &pServiceConfig->batteryLevel);

    if (result != gBleSuccess_c)
        return result;

    Bas_SendNotifications(pServiceConfig, handle);

    return gBleSuccess_c;
}

/************************************************************************************
*************************************************************************************
* Private functions
*************************************************************************************
************************************************************************************/
static void Bas_SendNotifications
(
  basConfig_t* pServiceConfig,
  uint16_t     handle
)
{
    uint16_t  handleCccd;
    bool_t    isNotifActive;
    uint8_t   mClientId = 0;

    /* Get handle of CCCD */
    if (GattDb_FindCccdHandleForCharValueHandle(handle, &handleCccd) != gBleSuccess_c)
    {
        return;
    }

    for(mClientId = 0; mClientId < pServiceConfig->validSubscriberListSize; mClientId++)
    {
        if(pServiceConfig->aValidSubscriberList[mClientId])
        {
            if (gBleSuccess_c == Gap_CheckNotificationStatus
                (mClientId, handleCccd, &isNotifActive) &&
                    TRUE == isNotifActive)
            {
                GattServer_SendNotification(mClientId, handle);
            }
        }
    }
}
/*! *********************************************************************************
* @}
********************************************************************************** */
