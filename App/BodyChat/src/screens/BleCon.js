import React, { Component } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import CupertinoButtonInfo from "../components/CupertinoButtonInfo";

function BleCon() {
  return (
    <View style={styles.container}>
      <Text style={styles.loremIpsum}>
        Connect to BCC Device Bluetooth Low Energy
      </Text>
      <CupertinoButtonInfo caption="Scan" style={styles.cupertinoButtonInfo} />
      <View style={styles.scrollArea}>
        <ScrollView
          horizontal={false}
          contentContainerStyle={styles.scrollArea_contentContainerStyle}
        />
      </View>
      <Text style={styles.deviceConnected}>Device Connected:</Text>
      <CupertinoButtonInfo
        caption="Continue"
        style={styles.cupertinoButtonInfo2}
      />
      <CupertinoButtonInfo
        caption="Test Ble"
        style={styles.cupertinoButtonInfo3}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,39,77,1)"
  },
  loremIpsum: {
    width: 329,
    height: 65,
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    fontFamily: "roboto-regular",
    textAlign: "center",
    marginTop: 58,
    marginLeft: 23
  },
  cupertinoButtonInfo: {
    width: 174,
    height: 48,
    marginTop: 17,
    marginLeft: 101
  },
  scrollArea: {
    height: 162,
    backgroundColor: "rgba(249,249,249,1)",
    marginTop: 56
  },
  scrollArea_contentContainerStyle: {
    height: 162
  },
  deviceConnected: {
    width: 314,
    height: 49,
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    fontFamily: "roboto-regular",
    textAlign: "left",
    marginTop: 19,
    marginLeft: 31
  },
  cupertinoButtonInfo2: {
    width: 174,
    height: 48,
    marginTop: 35,
    marginLeft: 101
  },
  cupertinoButtonInfo3: {
    width: 174,
    height: 48,
    marginTop: 122,
    marginLeft: 101
  }
});

export default BleCon;
