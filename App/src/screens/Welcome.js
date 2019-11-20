import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import MaterialButtonPrimary from "../components/MaterialButtonPrimary";
import CupertinoButtonWhiteTextColor from "../components/CupertinoButtonWhiteTextColor";

function Welcome(props) {
  return (
    <View style={styles.container}>
      <View style={styles.cupertinoButtonWhiteTextColorStack}>
        <CupertinoButtonWhiteTextColor
          caption="Tap Here!"
          container="Go Back"
          onPress={props.onPress}
          style={styles.cupertinoButtonWhiteTextColor}
        />
        <Text style={styles.text}>Welcome!{"\n"}tap to continue</Text>
        <View textAlgin="Center">
          <Image
            source={require("../assets/images/ece-photo-placeholder.png")}
            resizeMode="contain"
            style={styles.image}
          />
        </View>
        <Text style={styles.eecs473BccTeam}>
          EECS 473 Fall 2019 {"\n"}BCC TEAM{"\n"}
          {"\n"}Alex Chen, Isaac Dubuque, Matthew Kramer, {"\n"}Vincent LaRocca,{" "}
          {"\n"}Nicholas Mariam
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row"
  },
  cupertinoButtonWhiteTextColor: {
    left: 0,
    height: "100%",
    backgroundColor: "rgba(0,39,77,1)",
    position: "absolute",
    alignSelf:"stretch",
    right: 0,
    top: 0
  },
  text: {
    top: "10%",
    width: "100%",
    height: "20%",
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 24,
    fontFamily: "System",
    textAlign: "center"
  },
  image: {
    top: "38%",
    width: "100%",
    height: "48%",
    backgroundColor: "#00274d",
    position: "relative"
  },
  eecs473BccTeam: {
    top: "55%",
    left: "0%",
    width: "100%",
    height: "50%",
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 24,
    fontFamily: "System",
    textAlign: "center"
  },
  cupertinoButtonWhiteTextColorStack: {
    height: "100%",
    flex: 1,
    marginLeft: 0
  }
});

export default Welcome;
