import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import CupertinoButtonInfo from "../components/CupertinoButtonInfo";
import { tsPropertySignature } from "@babel/types";

function HostGame(props) {
  return (
    <View style={styles.container}>
      <View style={styles.hostIsaacStack}>
        <Text style={styles.hostIsaac}>Host {props.name} </Text>
        <Text style={styles.currentGameLobby}>Current Game: {props.currentGame}</Text>
      </View>
      <Text style={styles.loremIpsum}> {props.msg1} </Text>
      <Text style={styles.text}> {props.msg2} </Text>
      <Text style={styles.statsBox}>{props.stats}</Text>
      <CupertinoButtonInfo
        caption="Leave Game"
        style={styles.cupertinoButtonInfo}
        onPress={props.onLeaveGame}
      />
      <CupertinoButtonInfo
        caption="Host Options"
        style={styles.cupertinoButtonInfo2}
        onPress={props.hostOptions}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,39,77,1)"
  },
  hostIsaac: {
    top: 0,
    left: 0,
    width: 375,
    height: 79,
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 24,
    fontFamily: "System",
    lineHeight: 72,
    letterSpacing: 0,
    textAlign: "center"
  },
  currentGameLobby: {
    top: 79,
    left: 0,
    color: "rgba(255,255,255,1)",
    position: "absolute",
    right: 0,
    fontSize: 24,
    fontFamily: "System",
    lineHeight: 30,
    textAlign: "center"
  },
  hostIsaacStack: {
    height: 141,
    marginTop: 36
  },
  loremIpsum: {
    width: 305,
    height: 106,
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    fontFamily: "System",
    textAlign: "center",
    marginTop: 12,
    marginLeft: 48
  },
  text: {
    width: 305,
    height: 106,
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    fontFamily: "System",
    textAlign: "center",
    marginTop: 21,
    marginLeft: 48
  },
  statsBox: {
    width: 305,
    height: 106,
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    fontFamily: "System",
    textAlign: "center",
    marginTop: 28,
    marginLeft: 48
  },
  cupertinoButtonInfo: {
    width: 174,
    height: 48,
    marginTop: 30,
    alignSelf: "center"
  },
  cupertinoButtonInfo2: {
    width: 174,
    height: 48,
    marginTop: 56,
    alignSelf: "center"
  }
});

export default HostGame;
