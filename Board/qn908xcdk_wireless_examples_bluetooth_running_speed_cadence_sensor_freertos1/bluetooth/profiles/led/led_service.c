#include "EmbeddedTypes.h"
#include "ble_general.h"
#include "gatt_db_app_interface.h"
#include "gatt_server_interface.h"
#include "gap_interface.h"
#include "gatt_db_handles.h"
#include "led_interface.h"
#include "LED.h"

static deviceId_t mled_SubscribedClientId = gInvalidDeviceId_c;

bleResult_t led_Start(ledConfig_t *pServiceConfig)
{
	mled_SubscribedClientId = gInvalidDeviceId_c;
	return led_write_from_server(pServiceConfig->serviceHandle, 2);
}

bleResult_t led_Stop(ledConfig_t *pServiceConfig)
{
	return led_Unsubscribe(pServiceConfig);
}

bleResult_t led_Subscribe(deviceId_t clientdeviceId, ledConfig_t *pServiceConfig)
{
	mled_SubscribedClientId = clientdeviceId;
	return led_write_from_server(pServiceConfig->serviceHandle, 0);
}

bleResult_t led_Unsubscribe(ledConfig_t *pServiceConfig)
{
	mled_SubscribedClientId = gInvalidDeviceId_c;
	return led_write_from_server(pServiceConfig->serviceHandle, 2);

}

bleResult_t led_write(ledConfig_t *pserviceConfig, gattServerAttributeWrittenEvent_t *pEvent)
{
	uint8_t retStatus = gAttErrCodeNoError_c;
	uint8_t val = 0;
	val = pEvent->aValue[0];
	bleResult_t result;
	result = led_write_from_server(pserviceConfig->serviceHandle, val);
	if(result != gBleSuccess_c) return result;
	result = GattServer_SendAttributeWrittenStatus(mled_SubscribedClientId, pEvent->handle, retStatus);
	return result;
}


bleResult_t led_write_from_server(uint16_t serviceHandle, uint8_t newLedVal)
{
	uint16_t handle;
	bleResult_t result;

	result = GattDb_FindCharValueHandleInService(serviceHandle, gBleUuidType128_c, (bleUuid_t*) &uuid_characteristic_led_value, &handle);

	if(result != gBleSuccess_c)
		return result;

	result = GattDb_WriteAttribute(handle, sizeof(uint8_t), (uint8_t*)&newLedVal);

	if(result == gBleSuccess_c)
	{
		if(newLedVal == 0)
			{
				Led1Off();
				Led2Off();
				Led3Off();
				Led4Off();
			}
			else if(newLedVal == 1)
			{
				Led1On();
				Led2On();
				Led3On();
				Led4On();
			}
			else if(newLedVal == 2)
			{
				Led1Flashing();
				Led2Flashing();
				Led3Flashing();
				Led4Flashing();
			}
	}

	return result;
}
