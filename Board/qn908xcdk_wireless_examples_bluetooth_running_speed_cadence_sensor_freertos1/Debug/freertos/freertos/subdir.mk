################################################################################
# Automatically-generated file. Do not edit!
################################################################################

# Add inputs and outputs from these tool invocations to the build variables 
C_SRCS += \
../freertos/freertos/croutine.c \
../freertos/freertos/event_groups.c \
../freertos/freertos/fsl_tickless_systick.c \
../freertos/freertos/heap_4.c \
../freertos/freertos/list.c \
../freertos/freertos/port.c \
../freertos/freertos/queue.c \
../freertos/freertos/tasks.c \
../freertos/freertos/timers.c 

OBJS += \
./freertos/freertos/croutine.o \
./freertos/freertos/event_groups.o \
./freertos/freertos/fsl_tickless_systick.o \
./freertos/freertos/heap_4.o \
./freertos/freertos/list.o \
./freertos/freertos/port.o \
./freertos/freertos/queue.o \
./freertos/freertos/tasks.o \
./freertos/freertos/timers.o 

C_DEPS += \
./freertos/freertos/croutine.d \
./freertos/freertos/event_groups.d \
./freertos/freertos/fsl_tickless_systick.d \
./freertos/freertos/heap_4.d \
./freertos/freertos/list.d \
./freertos/freertos/port.d \
./freertos/freertos/queue.d \
./freertos/freertos/tasks.d \
./freertos/freertos/timers.d 


# Each subdirectory must supply rules for building sources it contributes
freertos/freertos/%.o: ../freertos/freertos/%.c
	@echo 'Building file: $<'
	@echo 'Invoking: MCU C Compiler'
	arm-none-eabi-gcc -std=gnu99 -D__REDLIB__ -DCPU_QN9080C_cm4 -DCPU_QN9080C -DDEBUG -DCPU_QN908X=1 -DFSL_RTOS_FREE_RTOS -DCFG_BLE_PRJ=1 -DSDK_DEBUGCONSOLE=1 -DCR_INTEGER_PRINTF -DPRINTF_FLOAT_ENABLE=0 -D__MCUXPRESSO -D__USE_CMSIS -I../board -I../source -I../ -I../framework/OSAbstraction/Interface -I../framework/common -I../freertos -I../framework/Flash/Internal -I../framework/GPIO -I../framework/Keyboard/Interface -I../framework/TimersManager/Interface -I../framework/TimersManager/Source -I../framework/LED/Interface -I../framework/SerialManager/Interface -I../framework/SerialManager/Source/I2C_Adapter -I../framework/SerialManager/Source/SPI_Adapter -I../framework/SerialManager/Source/UART_Adapter -I../framework/MemManager/Interface -I../framework/Lists -I../framework/Messaging/Interface -I../framework/Panic/Interface -I../framework/RNG/Interface -I../framework/NVM/Interface -I../framework/NVM/Source -I../framework/ModuleInfo -I../framework/FunctionLib -I../framework/SecLib -I../bluetooth/host/interface -I../source/common -I../bluetooth/host/config -I../bluetooth/controller/interface -I../bluetooth/hci_transport/interface -I../source/common/gatt_db/macros -I../source/common/gatt_db -I../bluetooth/profiles/battery -I../bluetooth/profiles/device_info -I../bluetooth/profiles/running_speed_cadence -I../framework/MWSCoexistence/Interface -I../drivers -I../CMSIS -I../utilities -O0 -fno-common -g -Wall -c  -ffunction-sections  -fdata-sections  -ffreestanding  -fno-builtin -imacros "/Users/isaacdubuque/EECS473/Board/qn908xcdk_wireless_examples_bluetooth_running_speed_cadence_sensor_freertos1/source/app_preinclude.h" -mcpu=cortex-m4 -mfpu=fpv4-sp-d16 -mfloat-abi=hard -mthumb -D__REDLIB__ -fstack-usage -specs=redlib.specs -MMD -MP -MF"$(@:%.o=%.d)" -MT"$(@:%.o=%.o)" -MT"$(@:%.o=%.d)" -o "$@" "$<"
	@echo 'Finished building: $<'
	@echo ' '


