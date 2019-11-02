/*! *********************************************************************************
 * \addtogroup BLE
 * @{
 ********************************************************************************** */
/*! *********************************************************************************
* Copyright (c) 2015, Freescale Semiconductor, Inc.
* Copyright 2016-2017 NXP
* All rights reserved.
*
* \file
*
* SPDX-License-Identifier: BSD-3-Clause
********************************************************************************** */

#ifndef _BLE_HOST_TASKS_H_
#define _BLE_HOST_TASKS_H_

/************************************************************************************
*************************************************************************************
* Include
*************************************************************************************
************************************************************************************/
#include "EmbeddedTypes.h"
#include "Messaging.h"
#include "fsl_os_abstraction.h"
#include "ble_general.h"

/************************************************************************************
*************************************************************************************
* Public memory declarations
*************************************************************************************
************************************************************************************/
/*! App to Host message queue for the Host Task */
extern msgQueue_t   gApp2Host_TaskQueue;
/*! HCI to Host message queue for the Host Task */
extern msgQueue_t   gHci2Host_TaskQueue;

/*! Event for the Host Task Queue */
extern osaEventId_t gHost_TaskEvent;

/************************************************************************************
*************************************************************************************
* Public prototypes
*************************************************************************************
************************************************************************************/

#ifdef __cplusplus
extern "C" {
#endif

/*! *********************************************************************************
* \brief  Contains the Host Task logic.
*
* \remarks This function must be called exclusively by the Host Task code
* from the application.
*
********************************************************************************** */
void Host_TaskHandler(void * args);

#ifdef __cplusplus
}
#endif

#endif /* _BLE_HOST_TASKS_H_ */

/*! *********************************************************************************
* @}
********************************************************************************** */
