import React, { Component, UseState } from "react";
import { StyleSheet, View, Text, TextInput, ScrollView } from "react-native";
import CupertinoButtonInfo from "../components/CupertinoButtonInfo";

function TestBle(props) {
  const [handle, changeHandle] = React.useState("Handle");
  const [value, changeValue] = React.useState("Data");
  return (
    <View style={styles.container}>
      <CupertinoButtonInfo caption="Scan" style={styles.cupertinoButtonInfo}
        onPress={props.testBleScan} />
      <Text style={styles.bleTesting}>Ble Testing</Text>
      <View style={styles.scrollArea}>
        <ScrollView
          horizontal={false}
          contentContainerStyle={styles.scrollArea_contentContainerStyle}
        >
         <Text style={{fontWeight: 'bold'}}> Device List </Text>
          {props.devices.map((item) => {
            return(
                <TouchableOpacity onPress={()=>{
                  props.bleCon(item.name);
                  }}>
                  <Text> {item.name} </Text>
                </TouchableOpacity>
            );
          })}
         </ScrollView>
      </View>
      <View style={styles.cupertinoButtonInfo2Stack}>
        <CupertinoButtonInfo
          caption="Read GATT"
          style={styles.cupertinoButtonInfo2}
          onPress={props.readGatt}
        />
        <Text style={styles.deviceConnected}> Device Connected: {(props.isConnected) ? props.currentDevice : "None"} </Text>
      </View>
      <View style={styles.scrollArea2}>
        <ScrollView
          horizontal={false}
          contentContainerStyle={styles.scrollArea2_contentContainerStyle}
        >
        <Text style={{fontWeight: 'bold'}}> Characteristic List </Text>
          {Object.keys(props.characteristics).forEach((key) =>
          {
            return(
                <TouchableOpacity onPress={()=>{
                  changeHandle(key);
                  changeValue(props.characteristics[key].value);
                  }}>
                  <Text> {key}: {props.characteristics[key].value} </Text>
                </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
      <View style={styles.rectRow}>
        <TextInput style={styles.rect} 
          onChangeText = {value => changeValue(value)}
          value={value}
        />
        <CupertinoButtonInfo
          caption="Send"
          style={styles.cupertinoButtonInfo3}
          onPress={props.sendData(handle,value)}
        />
      </View>
      <TextInput 
        style={styles.rect2}
        onChangeText = {handle => changeHandle(handle)} 
        value={handle}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,39,77,1)"
  },
  cupertinoButtonInfo: {
    marginTop: 135,
    alignSelf: "center"
  },
  bleTesting: {
    width: 327,
    height: 34,
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    fontFamily: "System",
    textAlign: "center",
    marginTop: -75,
    marginLeft: 17
  },
  scrollArea: {
    height: 120,
    backgroundColor: "rgba(230, 230, 230,1)",
    marginTop: 152
  },
  scrollArea_contentContainerStyle: {
    height: 160
  },
  cupertinoButtonInfo2: {
    top: 46,
    left: 71,
    width: 185,
    height: 48,
    position: "absolute"
  },
  deviceConnected: {
    top: 0,
    left: 0,
    width: 313,
    height: 46,
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 18,
    fontFamily: "System"
  },
  cupertinoButtonInfo2Stack: {
    width: 313,
    height: 94,
    marginTop: 28,
    marginLeft: 24
  },
  scrollArea2: {
    height: 124,
    backgroundColor: "rgba(230, 230, 230,1)",
    marginTop: 21
  },
  scrollArea2_contentContainerStyle: {
    height: 160
  },
  rect: {
    width: 170,
    height: 27,
    backgroundColor: "rgba(230, 230, 230,1)",
    fontSize: 20,
    fontWeight: "bold",
    color: "black"
  },
  cupertinoButtonInfo3: {
    width: 174,
    height: 48,
    marginLeft: 18,
    marginTop: 14
  },
  rectRow: {
    height: 62,
    flexDirection: "row",
    marginTop: 20,
    marginRight: 13
  },
  rect2: {
    width: 170,
    height: 27,
    backgroundColor: "rgba(230, 230, 230,1)",
    fontSize: 20,
    fontWeight: "bold",
    color: "black"
  }
});

export default TestBle;
