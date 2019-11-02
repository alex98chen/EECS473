#ifndef _LED_BT_INTERFACE_H_
#define _LED_BT_INTERFACE_H_



typedef struct ledConfig_tag
{
	uint16_t serviceHandle;
	int8_t current_val;
} ledConfig_t;


bleResult_t led_Start(ledConfig_t *pServiceConfig);

bleResult_t led_Stop(ledConfig_t *pServiceConfig);

bleResult_t led_Subscribe(deviceId_t clientdeviceId, ledConfig_t *pServiceConfig);

bleResult_t led_Unsubscribe(ledConfig_t *pServiceConfig);

bleResult_t led_write(ledConfig_t *pserviceConfig, gattServerAttributeWrittenEvent_t *pEvent);

bleResult_t led_write_from_server(uint16_t serviceHandle, uint8_t newLedVal);

#endif
