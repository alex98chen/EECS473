import React, { Component } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import CupertinoButtonInfo from "../components/CupertinoButtonInfo";

function TestBle() {
  return (
    <View style={styles.container}>
      <CupertinoButtonInfo caption="Scan" style={styles.cupertinoButtonInfo} />
      <Text style={styles.bleTesting}>Ble Testing</Text>
      <View style={styles.scrollArea}>
        <ScrollView
          horizontal={false}
          contentContainerStyle={styles.scrollArea_contentContainerStyle}
        />
      </View>
      <View style={styles.cupertinoButtonInfo2Stack}>
        <CupertinoButtonInfo
          caption="Read GATT"
          style={styles.cupertinoButtonInfo2}
        />
        <Text style={styles.deviceConnected}>Device Connected</Text>
      </View>
      <View style={styles.scrollArea2}>
        <ScrollView
          horizontal={false}
          contentContainerStyle={styles.scrollArea2_contentContainerStyle}
        />
      </View>
      <View style={styles.rectRow}>
        <View style={styles.rect} />
        <CupertinoButtonInfo
          caption="Send"
          style={styles.cupertinoButtonInfo3}
        />
      </View>
      <View style={styles.rect2} />
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
    fontFamily: "roboto-regular",
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
    fontFamily: "roboto-regular"
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
    backgroundColor: "rgba(230, 230, 230,1)"
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
    backgroundColor: "rgba(230, 230, 230,1)"
  }
});

export default TestBle;
