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

#ifndef _BLE_HOST_TASK_CONFIG_H_
#define _BLE_HOST_TASK_CONFIG_H_

/************************************************************************************
*************************************************************************************
* Public macros
*************************************************************************************
************************************************************************************/

/*
 * These values should be modified by the application as necessary.
 * They are used by the task initialization code from ble_host_tasks.c.
 */

#ifndef gHost_TaskStackSize_c
#define gHost_TaskStackSize_c 1500
#endif

#ifndef gHost_TaskPriority_c
#define gHost_TaskPriority_c 4
#endif

/************************************************************************************
*************************************************************************************
* Public prototypes
*************************************************************************************
************************************************************************************/

#ifdef __cplusplus
extern "C" {
#endif

/*! *********************************************************************************
* \brief  Initializes the two tasks of the BLE Host Stack.
*
* \return  osaStatus_t.
*
********************************************************************************** */
osaStatus_t Ble_HostTaskInit(void);

#ifdef __cplusplus
}
#endif

#endif /* _BLE_HOST_TASK_CONFIG_H_ */

/*! *********************************************************************************
* @}
********************************************************************************** */
