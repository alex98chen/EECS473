import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.deviceConnected}>Device Connected:</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 314,
    height: 49
  },
  deviceConnected: {
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    fontFamily: "roboto-regular",
    textAlign: "left",
    flex: 1
  }
});

export default Index;
