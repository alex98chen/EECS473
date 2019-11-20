import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import CupertinoButtonInfo from "../components/CupertinoButtonInfo";

function Connect(props) {
  const [ipAddr, changeIPAddr] = React.useState("35.3.103.191");
  return (

    <View style={styles.container}>
      <CupertinoButtonInfo
        caption="Connect"
        style={styles.cupertinoButtonInfo}
        onPress={()=>{props.ServerConnect(ipAddr, 6969)}}
      />
      <Text style={styles.serverConnect}>Server Connect</Text>
      <View style={styles.ipAddressStack}>
        <Text style={styles.ipAddress}>IP Address</Text>
        <TextInput style={styles.rect} 
          onChangeText = {ipAddr => changeIPAddr(ipAddr)}
          value={ipAddr}
        />
      </View>
      <Text style={styles.message}>{props.serverMsg}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,39,77,1)"
  },
  cupertinoButtonInfo: {
    width: 174,
    height: 48,
    marginTop: 327,
    alignSelf: "center"
  },
  serverConnect: {
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    fontFamily: "System",
    textAlign: "center",
    marginTop: -261
  },
  ipAddress: {
    top: 0,
    left: 0,
    color: "rgba(255,255,255,1)",
    position: "absolute",
    right: 0,
    fontSize: 24,
    fontFamily: "System",
    textAlign: "center"
  },
  rect: {
    top: 34,
    left: 35,
    width: 304,
    height: 38,
    backgroundColor: "rgba(230, 230, 230,1)",
    position: "absolute",
    fontSize: 20,
    fontWeight: "bold",
    color: "black"
  },
  ipAddressStack: {
    height: 72,
    marginTop: 101
  },
  message: {
    width: 304,
    height: 220,
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    fontFamily: "System",
    textAlign: "center",
    marginTop: 181,
    marginLeft: 35
  }
});

export default Connect;
