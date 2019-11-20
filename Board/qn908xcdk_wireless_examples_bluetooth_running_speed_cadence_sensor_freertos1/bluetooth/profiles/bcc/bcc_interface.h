#ifndef _BCC_INTERFACE_H_
#define _BCC_INTERFACE_H_



typedef struct bccConfig_tag
{
	uint16_t serviceHandle;

	uint8_t send[121]; // size is variable for now

	uint8_t recieve[137]; // size is variable for now
} bccConfig_t;


// Initialization for the service
bleResult_t bcc_Start(bccConfig_t *pServiceConfig);

// Destructor for the service
bleResult_t bcc_Stop(bccConfig_t *pServiceConfig);

// Subscribe to a client
bleResult_t bcc_Subscribe(deviceId_t clientdeviceId, bccConfig_t *pServiceConfig);

// Unsubscribe from a client
bleResult_t bcc_Unsubscribe(bccConfig_t *pServiceConfig);


// data to send
bleResult_t bcc_Send(bccConfig_t *pServiceConfig, gattServerAttributeWrittenEvent_t *pEvent);

// data recieved
bleResult_t bcc_Recvd(bccConfig_t *pServiceConfig);


#endif
