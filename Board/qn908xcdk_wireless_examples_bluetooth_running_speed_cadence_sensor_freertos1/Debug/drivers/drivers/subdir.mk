################################################################################
# Automatically-generated file. Do not edit!
################################################################################

# Add inputs and outputs from these tool invocations to the build variables 
C_SRCS += \
../drivers/drivers/fsl_adc.c \
../drivers/drivers/fsl_aes.c \
../drivers/drivers/fsl_calibration.c \
../drivers/drivers/fsl_clock.c \
../drivers/drivers/fsl_common.c \
../drivers/drivers/fsl_ctimer.c \
../drivers/drivers/fsl_flash.c \
../drivers/drivers/fsl_flexcomm.c \
../drivers/drivers/fsl_gpio.c \
../drivers/drivers/fsl_i2c.c \
../drivers/drivers/fsl_i2c_freertos.c \
../drivers/drivers/fsl_inputmux.c \
../drivers/drivers/fsl_power.c \
../drivers/drivers/fsl_reset.c \
../drivers/drivers/fsl_rf.c \
../drivers/drivers/fsl_rng.c \
../drivers/drivers/fsl_rtc.c \
../drivers/drivers/fsl_spi.c \
../drivers/drivers/fsl_spi_freertos.c \
../drivers/drivers/fsl_usart.c \
../drivers/drivers/fsl_usart_freertos.c \
../drivers/drivers/fsl_wdt.c 

OBJS += \
./drivers/drivers/fsl_adc.o \
./drivers/drivers/fsl_aes.o \
./drivers/drivers/fsl_calibration.o \
./drivers/drivers/fsl_clock.o \
./drivers/drivers/fsl_common.o \
./drivers/drivers/fsl_ctimer.o \
./drivers/drivers/fsl_flash.o \
./drivers/drivers/fsl_flexcomm.o \
./drivers/drivers/fsl_gpio.o \
./drivers/drivers/fsl_i2c.o \
./drivers/drivers/fsl_i2c_freertos.o \
./drivers/drivers/fsl_inputmux.o \
./drivers/drivers/fsl_power.o \
./drivers/drivers/fsl_reset.o \
./drivers/drivers/fsl_rf.o \
./drivers/drivers/fsl_rng.o \
./drivers/drivers/fsl_rtc.o \
./drivers/drivers/fsl_spi.o \
./drivers/drivers/fsl_spi_freertos.o \
./drivers/drivers/fsl_usart.o \
./drivers/drivers/fsl_usart_freertos.o \
./drivers/drivers/fsl_wdt.o 

C_DEPS += \
./drivers/drivers/fsl_adc.d \
./drivers/drivers/fsl_aes.d \
./drivers/drivers/fsl_calibration.d \
./drivers/drivers/fsl_clock.d \
./drivers/drivers/fsl_common.d \
./drivers/drivers/fsl_ctimer.d \
./drivers/drivers/fsl_flash.d \
./drivers/drivers/fsl_flexcomm.d \
./drivers/drivers/fsl_gpio.d \
./drivers/drivers/fsl_i2c.d \
./drivers/drivers/fsl_i2c_freertos.d \
./drivers/drivers/fsl_inputmux.d \
./drivers/drivers/fsl_power.d \
./drivers/drivers/fsl_reset.d \
./drivers/drivers/fsl_rf.d \
./drivers/drivers/fsl_rng.d \
./drivers/drivers/fsl_rtc.d \
./drivers/drivers/fsl_spi.d \
./drivers/drivers/fsl_spi_freertos.d \
./drivers/drivers/fsl_usart.d \
./drivers/drivers/fsl_usart_freertos.d \
./drivers/drivers/fsl_wdt.d 


# Each subdirectory must supply rules for building sources it contributes
drivers/drivers/%.o: ../drivers/drivers/%.c
	@echo 'Building file: $<'
	@echo 'Invoking: MCU C Compiler'
	arm-none-eabi-gcc -std=gnu99 -D__REDLIB__ -DCPU_QN9080C_cm4 -DCPU_QN9080C -DDEBUG -DCPU_QN908X=1 -DFSL_RTOS_FREE_RTOS -DCFG_BLE_PRJ=1 -DSDK_DEBUGCONSOLE=1 -DCR_INTEGER_PRINTF -DPRINTF_FLOAT_ENABLE=0 -D__MCUXPRESSO -D__USE_CMSIS -I../board -I../source -I../ -I../framework/OSAbstraction/Interface -I../framework/common -I../freertos -I../framework/Flash/Internal -I../framework/GPIO -I../framework/Keyboard/Interface -I../framework/TimersManager/Interface -I../framework/TimersManager/Source -I../framework/LED/Interface -I../framework/SerialManager/Interface -I../framework/SerialManager/Source/I2C_Adapter -I../framework/SerialManager/Source/SPI_Adapter -I../framework/SerialManager/Source/UART_Adapter -I../framework/MemManager/Interface -I../framework/Lists -I../framework/Messaging/Interface -I../framework/Panic/Interface -I../framework/RNG/Interface -I../framework/NVM/Interface -I../framework/NVM/Source -I../framework/ModuleInfo -I../framework/FunctionLib -I../framework/SecLib -I../bluetooth/host/interface -I../source/common -I../bluetooth/host/config -I../bluetooth/controller/interface -I../bluetooth/hci_transport/interface -I../source/common/gatt_db/macros -I../source/common/gatt_db -I../bluetooth/profiles/battery -I../bluetooth/profiles/device_info -I../bluetooth/profiles/running_speed_cadence -I../framework/MWSCoexistence/Interface -I../drivers -I../CMSIS -I../utilities -O0 -fno-common -g -Wall -c  -ffunction-sections  -fdata-sections  -ffreestanding  -fno-builtin -imacros "/Users/isaacdubuque/EECS473/Board/qn908xcdk_wireless_examples_bluetooth_running_speed_cadence_sensor_freertos1/source/app_preinclude.h" -mcpu=cortex-m4 -mfpu=fpv4-sp-d16 -mfloat-abi=hard -mthumb -D__REDLIB__ -fstack-usage -specs=redlib.specs -MMD -MP -MF"$(@:%.o=%.d)" -MT"$(@:%.o=%.o)" -MT"$(@:%.o=%.d)" -o "$@" "$<"
	@echo 'Finished building: $<'
	@echo ' '


