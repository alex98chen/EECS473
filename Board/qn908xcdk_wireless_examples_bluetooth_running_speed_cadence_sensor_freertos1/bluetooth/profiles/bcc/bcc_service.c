#include "EmbeddedTypes.h"g
#include "ble_general.h"
#include "gatt_db_app_interface.h"
#include "gatt_server_interface.h"
#include "gap_interface.h"
#include "gatt_db_handles.h"
#include "bcc_interface.h"

static deviceId_t bcc_SubscribedClientId = gInvalidDeviceId_c;

bleResult_t bcc_Start(bccConfig_t *pServiceConfig)
{
	bcc_SubscribedClientId = gInvalidDeviceId_c;
    return gBleSuccess_c;
}

bleResult_t bcc_Stop(bccConfig_t *pServiceConfig)
{
	return bcc_Unsubscribed(pServiceConfig);
}

bleResult_t bcc_Subscribe(deviceId_t clientdeviceId, bccConfig_t *pServiceConfig)
{
	bcc_SubscribedClientId = clientDeviceId;
	return gBleSuccess_c;
}

bleResult_t bcc_Unsubscribe(bccConfig_t *pServiceConfig)
{
	bcc_SubscribedClientId = gInvalidDeviceId_c;
	return gBleSuccess_c;
}

bleResult_t bcc_Send(bccConfig_t *pServiceConfig, gattServerAttributeWrittenEvent_t *pEvent)
{
	uint8_t retStatus = gAttErrCodeNoError_c;
    bleResult_t result;
	uint16_t handle;
	result = GattDb_FindCharValueHandleInService(pServiceConfig->serviceHandle, gBleUuidType128_c, (bleUuid_t*) &uuid_characteristic_send_value, &handle);
	if(result != gBleSuccess_c)
		return result;

	result = GattDb_WriteAttribute(handle, pEvent->cValueLength, pEvent->aValue);

	if(result != gBleSuccess_c) return result;
	result = GattServer_SendAttributeWrittenStatus(bcc_SubscribedClientId, pEvent->handle, retStatus);
	return result;
}
