import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import MaterialButtonPrimary from "../components/MaterialButtonPrimary";
import CupertinoButtonWhiteTextColor from "../components/CupertinoButtonWhiteTextColor";

function Welcome() {
  return (
    <View style={styles.container}>
      <View style={styles.materialButtonPrimaryRow}>
        <MaterialButtonPrimary
          caption=""
          style={styles.materialButtonPrimary}
        />
        <View style={styles.cupertinoButtonWhiteTextColorStack}>
          <CupertinoButtonWhiteTextColor
            caption="Tap!"
            container="Go Back"
            style={styles.cupertinoButtonWhiteTextColor}
          />
          <Text style={styles.text}>Welcome!{"\n"}tap to continue</Text>
          <Image
            source={require("../assets/images/ece-photo-placeholder.png")}
            resizeMode="contain"
            style={styles.image}
          />
          <Text style={styles.eecs473BccTeam}>
            EECS 473 Fall 2019 {"\n"}BCC TEAM{"\n"}
            {"\n"}Alex Chen, Isaac Dubuque, Matthew Kramer, {"\n"}Vincent
            LaRocca, {"\n"}Nicholas Mariam
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row"
  },
  materialButtonPrimary: {
    width: 100,
    height: 36,
    marginTop: 77
  },
  cupertinoButtonWhiteTextColor: {
    width: 375,
    height: 812,
    backgroundColor: "rgba(0,39,77,1)",
    position: "absolute",
    left: 0,
    top: 0
  },
  text: {
    top: 82,
    left: 31,
    width: 313,
    height: 105,
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 24,
    fontFamily: "comic-sans-ms-regular",
    textAlign: "center"
  },
  image: {
    top: 516,
    left: 50,
    width: 275,
    height: 393,
    backgroundColor: "#00274d",
    position: "absolute"
  },
  eecs473BccTeam: {
    top: 462,
    left: 31,
    width: 313,
    height: 108,
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 24,
    fontFamily: "roboto-regular",
    textAlign: "center"
  },
  cupertinoButtonWhiteTextColorStack: {
    width: 375,
    height: 909,
    marginLeft: 204
  },
  materialButtonPrimaryRow: {
    height: 909,
    flexDirection: "row",
    flex: 1,
    marginLeft: -304
  }
});

export default Welcome;
