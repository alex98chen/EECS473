
#ifndef _TOUCHID_INTERFACE_H_
#define _TOUCHID_INTERFACE_H_


/*! Touch Service - Touch Flags */
typedef uint8_t touchFlags_t;

/*! Touch Service - ID Touch Present */
typedef enum
{
    gTouch_TouchNotPresent_c  = 0x00,
    gTouch_TouchPresent_c     = BIT0
} touchFlagsTouch_tag;

/*! Touch Service -  ID that Touched Present */
typedef enum
{
    gTouch_TouchIDNotPresent_c  = 0x00,
    gTouch_TouchIDPresent_c     = BIT1
} touchFlagsTouchID_tag;





//Function defined
#ifdef __cplusplus
extern "C" {
#endif



#ifdef __cplusplus
}
#endif

#endif /* _TOUCHID_INTERFACE_H_ */
