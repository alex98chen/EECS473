/* 
* Declare all custom 128-bit UUIDs here using the format:
*
*  UUID128(name, bytes)
*
* where: 
*	-name : an unique tag for the newly defined UUID;
		will be used to reference this UUID when defining
		services and characteristics in <<gattDb.h>>
*	-bytes: 16 bytes representing the 128-bit value
*
* One definition per line. No semicolon required after each definition.
*
* example:
*  UUID128(uuid_service_robot_characteristics, 0x12, 0x34, 0x56, 0x78, 0x90, 0xAB, 0xCD, 0xEF, 0x12, 0x34, 0x56, 0x78, 0x90, 0xAB, 0xCD, 0xEF)
*  UUID128(uuid_char_robot_direction, 0x12, 0x34, 0x50, 0x00, 0x90, 0xAB, 0xCD, 0xEF, 0x12, 0x34, 0x56, 0x78, 0x90, 0xAB, 0xCD, 0xEF)
*	
*/

/* Following convention to choose base UUID for custom service and increment the 3rd/4th MSB for the characteristics UUID */
/*								       lsb	 b1    b2    b3    b4    b5    b6    b7    b8	  b9   b10   b11   b12   b13   b14   msb */
#define led_service_generated_uuid    0xd6, 0x66, 0xd3, 0x90, 0x68, 0x79, 0x44, 0x9b, 0xa3, 0xe5, 0x4f, 0xb0, 0xdb, 0xbf, 0xa4, 0xe4
#define led_characteristic_value_uuid 0xd6, 0x66, 0xd3, 0x90, 0x68, 0x79, 0x44, 0x9b, 0xa3, 0xe5, 0x4f, 0xb0, 0xdc, 0xbf, 0xa4, 0xe4
/* LED Service */
UUID128(uuid_service_led, led_service_generated_uuid)

/* LED Characteristic */
UUID128(uuid_characteristic_led_value, led_characteristic_value_uuid)

#undef led_service_generated_uuid
#undef led_characteristic_value_uuid
/* Led Characteristic */
