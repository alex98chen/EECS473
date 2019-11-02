/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Text, Button, StyleSheet, TextInput, View, ScrollView, FlatList, SafeAreaView} from 'react-native';

import { BleManager } from "react-native-ble-plx"
// ...
//const manager = new BleManager()

export default class ButtonTranslator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'other default text',
            deviceList: [{
                    key: 'Device List',
                },
                ],
            deviceToConnect: 'NXP_BLE_RSCS',
            currentDeviceName: 'Not found yet',    
            deviceUUID: '',
            service: '',
            characteristic: '',
            value: '',
            error: '',
            speed: '',
            currentDevice: null
        };
        this.onPressButtonScan = this._onPressButtonScan.bind(this);
        this.onPressButtonConnect = this._onPressButtonConnect.bind(this);
        this.onPressButtonWrite = this._onPressButtonWrite.bind(this);
        this.onPressButtonRead = this._onPressButtonRead.bind(this);
        this.manager = new BleManager();
        this.services;
        this.characteristics;
    }
    getServicesAndCharacteristics(device) {
        return new Promise((resolve, reject) => {
            device.services().then(services => {
                const characteristics = []

                services.forEach((service, i) => {
                    service.characteristics().then(c => {
                        characteristics.push(c)

                        if (i === services.length - 1) {
                            const temp = characteristics.reduce(
                                (acc, current) => {
                                    return [...acc, ...current]
                                },
                                []
                            )
                            const dialog = temp.find(
                                characteristic =>
                                    characteristic.isWritableWithoutResponse
                            )
                            if (!dialog) {
                                reject('No writable characteristic')
                            }
                            resolve(dialog)
                        }
                    })
                })
            })
        })
    }


    async setupNotifications(device) {
        for (const id in this.sensors) {
            const service = this.serviceUUID(id)
            const characteristicW = this.writeUUID(id)
            const characteristicN = this.notifyUUID(id)

            const characteristic = await device.writeCharacteristicWithResponseForService(
                service, characteristicW, "AQ=="  /*0x01 in hex */
            )

            device.monitorCharacteristicForService(service, characteristicN, (error, characteristic) => {
                if (error) {
                    this.error(error.message)
                    return
                }
                this.updateValue(characteristic.uuid, characteristic.value)
            })
        }
    }

    _onPressButtonScan(scanString) {

        var resetList = [{
            key: 'Device List',
        },
        ];
        this.setState({deviceList: resetList})
        var count = 0

        this.manager.startDeviceScan(null,
            null, (error, device) => {
                console.log(device)

                if (error) {
                    alert(error.message)
                    return
                }
                //if (device.name === null || device.name === '') {
                //    alert('no device')
                //}
                if (this.state.deviceList.includes({ key: device.name })) {
                   alert('device already found')
                }
                if (!(device.name === null || device.name === '') && !this.state.deviceList.indexOf({ key: device.name }) > -1) {
                    //alert(device.name)
                    var joined = this.state.deviceList.concat({ key: device.name })
                    this.setState({ deviceList: joined })
                }
                count = count + 1
                if (count === 50) {
                    alert('Done scanning!')
                    this.manager.stopDeviceScan()
                }
            });
    }

    _onPressButtonConnect(deviceName) {
        //alert('You tapped the button: ' + deviceName)

        if (deviceName === null || deviceName === '') {/* || !this.state.deviceList.includes({ key: deviceName })) {*/
            alert('Device cannot be connected to')
            return
        }
        this.manager.startDeviceScan(null,
            null, (error, device) => {
                //alert("Scanning...")
                console.log(device)

                if (error) {
                    alert(error.message)
                    return
                }

                if (device.name === deviceName) {
                    alert('Connecting to: ' + deviceName)
                    this.manager.stopDeviceScan()
                    this.setState({ currentDeviceName: deviceName })
                    
                    device.connect()
                        .then((device) => {
                            //this.info("Discovering services and characteristics")
                            //this.services =
                            //this.characteristics = this.getServicesAndCharacteristics(services)

                            return device.discoverAllServicesAndCharacteristics();
                        })
                        .then((device) => {

                            console.log("NotDevice")
                            console.log(device)
                            
                            /*
                            this.manager.servicesForDevice(device.id).then( (array) =>
                            {
                              console.log(array.length + " Services Found!");
                              array.forEach( (value) =>
                              {
                                //console.log("Value: " + value)
                                console.log("ID: " + value.id)
                                console.log("UUID", value.uuid)
                                if(value.uuid == "e4a4bfdb-b04f-e5a3-9b44-796890d366d6")
                                {
                                  this.manager.characteristicsForDevice(device.id, value.uuid).then((array) =>
                                  {
                                    console.log(array.length + " Characteristics Found!")
                                    array.forEach( (value) =>
                                    {
                                      console.log("     ID: " + value.id)
                                      console.log("     UUID: " + value.uuid)
                                    })
                                    
                                  })
                                }

                              });
                            })
                            */

                            device.readCharacteristicForService("e4a4bfdb-b04f-e5a3-9b44-796890d366d6", "e4a4bfdc-b04f-e5a3-9b44-796890d366d6").then(
                              (value) => 
                              {
                                console.log("value: " + value.value)
                                console.log("uuid: " + value.uuid)
                                console.log("serviceID: " + value.serviceID)
                                console.log("serviceUUID: " + value.serviceUUID)
                              }
                            )

                            device.writeCharacteristicWithResponseForService("e4a4bfdb-b04f-e5a3-9b44-796890d366d6", "e4a4bfdc-b04f-e5a3-9b44-796890d366d6",
                            "Ag==").then(
                              (value) =>
                              {
                                console.log("value written"); 
                                device.readCharacteristicForService("e4a4bfdb-b04f-e5a3-9b44-796890d366d6", "e4a4bfdc-b04f-e5a3-9b44-796890d366d6").then(
                                  (value) => 
                                  {
                                    console.log("value: " + value.value)
                                    console.log("uuid: " + value.uuid)
                                    console.log("serviceID: " + value.serviceID)
                                    console.log("serviceUUID: " + value.serviceUUID)
                                  }
                                )
                              }
                            )

                            //this.manager.characteristicsForDevice(device.id)


                            //console.log('full uuid' + this.manager.fullUUID('e4a4bfdb-b04f-e5a3-9b44-796890d366d6'))
                            //device.readCharacteristicForService(this.manager.fullUUID('e4a4bfdb-b04f-e5a3-9b44-796890d366d6'), this.manager.fullUUID('e4a4bfdc-b04f-e5a3-9b44-796890d366d6')).then((characteristic) => { alert(characteristic.value) })
                            //device.readCharacteristicForService('d666d3906879449ba3e54fb0dbbfa4e4', 'd666d3906879449ba3e54fb0dcbfa4e4').then((characteristic) => { alert(characteristic.value) })
                            this.setState({ deviceUUID: device.id })
                            this.setState({currentDevice: device})
                            return device
                        })
                        .then((device) => {
                            //this.info("Setting notifications")
                            //return this.setupNotifications(device)
                        })
                        .then(() => {
                            
                            //this.info("Listening...")
                        }, (error) => {
                            alert('Error: ' + error.message)
                            //this.error(error.message)
                        })
                }
                    
            }
        );
    }
    _onPressButtonWrite(text, device, serviceUUID, characteristicUUID, value) {
        alert('You tapped the button: ' + text)
        if (this.state.currentDeviceName === null || this.state.currentDeviceName === '' || this.state.currentDeviceName ==='Not found yet') {
            alert('Device not connected')
            return
        }
        /*
        this.manager.writeCharacteristicWithResponseForDevice(
            this.state.deviceUUID,
            serviceUUID,
            characteristicUUID,
            value,
            null
        );
        */
        this.manager.writeCharacteristicWithResponseForDevice(
            this.state.deviceUUID,
            '1814',
            '2A55',
            'BSBSBS',
            null
        ).then(() => {
            this.state.currentDevice.readCharacteristicForService('1814', '2a55').then((characteristic) => { alert(characteristic.value) })
                            this.setState({ deviceUUID: device.id })
                            return device
                        })
    }
    _onPressButtonRead(text, device, serviceUUID, characteristicUUID) {
        if (this.state.currentDeviceName === null || this.state.currentDeviceName === '' || this.state.currentDeviceName === 'Not found yet') {
            alert('Device not connected')
            return
        }
        console.log('---------------------------------')
        console.log(this.state.currentDevice)
        this.state.currentDevice.readCharacteristicForService('1814', '2a54').then((characteristic) => { alert(characteristic.value) })

    }

    render() {
        return (
            <ScrollView style={{ padding: 10 }}>
                    <View style={styles.buttonContainer}>
                        <Button
                            onPress={this._onPressButtonScan.bind(this, this.state.text)}
                            title="Scan"
                            text={this.state.text}
                        />
                    </View>
                    <SafeAreaView>
                        <FlatList
                            data={this.state.deviceList}
                            renderItem={({ item }) => <Text style={styles.text}> {item.key} </Text>}
                            keyExtractor={(item, index) => index.toString()}
                        />
                    </SafeAreaView>
                
                
                    <TextInput
                        style={{ height: 40 }}
                        placeholder="Type here device"
                        onChangeText={(deviceToConnect) => this.setState({ deviceToConnect })}
                        value={this.state.deviceToConnect}
                    />
                    <View style={styles.buttonContainer}>
                        <Button
                            onPress={this._onPressButtonConnect.bind(this, this.state.deviceToConnect)}
                            title="Connect"
                            text={this.state.text}
                        />
                    </View>

                    <Text numberOfLines={1}>
                        {this.state.currentDeviceName}
                    </Text>
                <TextInput
                    style={{ height: 40 }}
                    placeholder="Type here service"
                    onChangeText={(service) => this.setState({ service })}
                    value={this.state.service}
                />
                    <TextInput
                        style={{ height: 40 }}
                        placeholder="Type here characteristic"
                        onChangeText={(characteristic) => this.setState({ characteristic })}
                        value={this.state.characteristic}
                    />
                    <TextInput
                        style={{ height: 40 }}
                        placeholder="Type here value"
                        onChangeText={(value) => this.setState({ value })}
                        value={this.state.value}
                    />
                    <View style={styles.buttonContainer}>
                        <Button
                            onPress={this._onPressButtonWrite.bind(this, this.state.text, this.manager, this.state.service, this.state.characteristic, this.state.value)}
                            title="Write"
                            text={this.state.text}
                        />
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button
                            onPress={this._onPressButtonRead.bind(this, this.state.text, this.manager, this.state.service, this.state.characteristic)}
                            title="Read"
                            text={this.state.text}
                        />
                </View>


                   

            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    buttonContainer: {
        margin: 10
    },
    alternativeLayoutButtonContainer: {
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    item: {
        
    }
});
