import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import CupertinoButtonInfo from "../components/CupertinoButtonInfo";

function ClientGame(props) {
  return (
    <View style={styles.container}>
      <View style={styles.clientIsaacStack}>
        <Text style={styles.clientIsaac}>Client {props.name} </Text>
        <Text style={styles.currentGameLobby}>Current Game: {props.currentGame}</Text>
      </View>
      <Text style={styles.text2}> {props.msg1} </Text>
      <Text style={styles.text}> {props.msg2} </Text>
      <Text style={styles.statsBox}> {props.stats} </Text>
      <CupertinoButtonInfo
        caption="Leave Game"
        style={styles.cupertinoButtonInfo}
        onPress={props.onLeaveGame}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,39,77,1)"
  },
  clientIsaac: {
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
  clientIsaacStack: {
    height: 141,
    marginTop: 36
  },
  text2: {
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
  }
});

export default ClientGame;
