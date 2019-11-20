import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import CupertinoButtonInfo from "../components/CupertinoButtonInfo";

function ClientJoin() {
  return (
    <View style={styles.container}>
      <Text style={styles.client}>Client</Text>
      <Text style={styles.currentGameLobby}>Current Game: Lobby</Text>
      <View style={styles.rectStack}>
        <View style={styles.rect} />
        <Text style={styles.name}>Name</Text>
      </View>
      <CupertinoButtonInfo
        caption="Join Game"
        style={styles.cupertinoButtonInfo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,39,77,1)"
  },
  client: {
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    fontFamily: "roboto-regular",
    lineHeight: 30,
    textAlign: "center",
    marginTop: 60
  },
  currentGameLobby: {
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    fontFamily: "roboto-regular",
    lineHeight: 30,
    textAlign: "center",
    marginTop: 1
  },
  rect: {
    top: 0,
    left: 105,
    width: 227,
    height: 35,
    backgroundColor: "rgba(230, 230, 230,1)",
    position: "absolute"
  },
  name: {
    top: 0,
    left: 0,
    color: "rgba(255,255,255,1)",
    position: "absolute",
    right: 0,
    fontSize: 24,
    fontFamily: "arial-regular",
    lineHeight: 30,
    letterSpacing: 0,
    textAlign: "left"
  },
  rectStack: {
    height: 35,
    marginTop: 25,
    marginLeft: 14,
    marginRight: -14
  },
  cupertinoButtonInfo: {
    width: 174,
    height: 48,
    marginTop: 34,
    alignSelf: "center"
  }
});

export default ClientJoin;
