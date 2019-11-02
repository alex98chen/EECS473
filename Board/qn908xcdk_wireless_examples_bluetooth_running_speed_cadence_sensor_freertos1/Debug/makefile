################################################################################
# Automatically-generated file. Do not edit!
################################################################################

-include ../makefile.init

RM := rm -rf

# All of the sources participating in the build are defined here
-include sources.mk
-include utilities/subdir.mk
-include startup/subdir.mk
-include source/common/gatt_db/subdir.mk
-include source/common/subdir.mk
-include source/subdir.mk
-include freertos/subdir.mk
-include framework/common/subdir.mk
-include framework/TimersManager/Source/subdir.mk
-include framework/SerialManager/Source/UART_Adapter/subdir.mk
-include framework/SerialManager/Source/SPI_Adapter/subdir.mk
-include framework/SerialManager/Source/I2C_Adapter/subdir.mk
-include framework/SerialManager/Source/subdir.mk
-include framework/SecLib/subdir.mk
-include framework/Reset/subdir.mk
-include framework/RNG/Source/subdir.mk
-include framework/Panic/Source/subdir.mk
-include framework/OSAbstraction/Source/subdir.mk
-include framework/NVM/Source/subdir.mk
-include framework/ModuleInfo/subdir.mk
-include framework/Messaging/Source/subdir.mk
-include framework/MemManager/Source/subdir.mk
-include framework/MWSCoexistence/Source/subdir.mk
-include framework/Lists/subdir.mk
-include framework/LED/Source/subdir.mk
-include framework/Keyboard/Source/subdir.mk
-include framework/GPIO/subdir.mk
-include framework/FunctionLib/subdir.mk
-include framework/Flash/Internal/subdir.mk
-include drivers/subdir.mk
-include board/subdir.mk
-include bluetooth/profiles/touchID/subdir.mk
-include bluetooth/profiles/running_speed_cadence/subdir.mk
-include bluetooth/profiles/led/subdir.mk
-include bluetooth/profiles/device_info/subdir.mk
-include bluetooth/profiles/battery/subdir.mk
-include bluetooth/host/config/subdir.mk
-include bluetooth/hci_transport/source/subdir.mk
-include bluetooth/controller/interface/subdir.mk
-include CMSIS/subdir.mk
-include subdir.mk
-include objects.mk

ifneq ($(MAKECMDGOALS),clean)
ifneq ($(strip $(C_DEPS)),)
-include $(C_DEPS)
endif
endif

-include ../makefile.defs

# Add inputs and outputs from these tool invocations to the build variables 

# All Target
all: qn908xcdk_wireless_examples_bluetooth_running_speed_cadence_sensor_freertos1.axf

# Tool invocations
qn908xcdk_wireless_examples_bluetooth_running_speed_cadence_sensor_freertos1.axf: $(OBJS) $(USER_OBJS)
	@echo 'Building target: $@'
	@echo 'Invoking: MCU Linker'
	arm-none-eabi-gcc -L"C:\Users\alex9\Documents\MCUXpressoIDE_11.0.1_2563\workspace\qn908xcdk_wireless_examples_bluetooth_running_speed_cadence_sensor_freertos1\libs" -Xlinker -Map="qn908xcdk_wireless_examples_bluetooth_running_speed_cadence_sensor_freertos1.map" -Xlinker --gc-sections -Xlinker -print-memory-usage -Xlinker --just-symbols="../board/fw_symbols_gcc.h" -Xlinker --no-wchar-size-warning -Xlinker --defsym=gUseNVMLink_d=1 -Xlinker --defsym=gEraseNVMLink_d=1 -Xlinker --defsym=__ram_vector_table__=1 -Xlinker --sort-section=alignment -Xlinker --cref -mcpu=cortex-m4 -mfpu=fpv4-sp-d16 -mfloat-abi=hard -mthumb -T QN908XC_connectivity.ld -L ../source -o "qn908xcdk_wireless_examples_bluetooth_running_speed_cadence_sensor_freertos1.axf" $(OBJS) $(USER_OBJS) $(LIBS)
	@echo 'Finished building target: $@'
	@echo ' '
	$(MAKE) --no-print-directory post-build

# Other Targets
clean:
	-$(RM) $(EXECUTABLES)$(OBJS)$(C_DEPS) qn908xcdk_wireless_examples_bluetooth_running_speed_cadence_sensor_freertos1.axf
	-@echo ' '

post-build:
	-@echo 'Performing post-build steps'
	-arm-none-eabi-size "qn908xcdk_wireless_examples_bluetooth_running_speed_cadence_sensor_freertos1.axf"; # arm-none-eabi-objcopy -v -O binary "qn908xcdk_wireless_examples_bluetooth_running_speed_cadence_sensor_freertos1.axf" "qn908xcdk_wireless_examples_bluetooth_running_speed_cadence_sensor_freertos1.bin" ; # checksum -p QN908XC -d "qn908xcdk_wireless_examples_bluetooth_running_speed_cadence_sensor_freertos1.bin";
	-@echo ' '

.PHONY: all clean dependents post-build

-include ../makefile.targets
