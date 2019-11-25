import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from "react-native";
import CupertinoButtonInfo from "../components/CupertinoButtonInfo";
import MaterialRadio1 from "../components/MaterialRadio1";
import { removeProperties } from "@babel/types";

function HostOptions(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.host}>Host Options Page </Text>
      <Text style={styles.currentGameLobby}> Current Status: {props.gameState} {(props.gameState != "spectator") 
      ? (" " +  props.name) : ""}</Text>
      
      <CupertinoButtonInfo
        caption="Return"
        style={styles.cupertinoButtonInfo}
        onPress={props.onPressReturn}
      />
      <View style={styles.hostPrivilegesStack}>
        <Text style={styles.hostPrivileges}>Host Privileges</Text>
        <MaterialRadio1 selected={props.currentGame == "Lobby"} style={styles.materialRadio1} onPress={props.onPressLobby}/>
        <MaterialRadio1 selected={props.currentGame == "tag"} style={styles.materialRadio12} onPress={props.onPressTag}/>
        <MaterialRadio1 selected={props.currentGame == "freeze"} style={styles.materialRadio13} onPress={props.onPressFreezeTag}/>
        <TouchableOpacity onPress={props.onPressLobby}>
        <Text style={styles.lobby}>Lobby</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={props.onPressTag}>
        <Text style={styles.tag}>Tag</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={props.onPressFreezeTag}>
        <Text style={styles.freezeTag}>Freeze Tag</Text>
        </TouchableOpacity>
      </View>
      <CupertinoButtonInfo
        caption="Start Game"
        style={styles.cupertinoButtonInfo2}
        onPress={props.onPressStartGame}
      />
      <CupertinoButtonInfo
        caption="End Game"
        style={styles.cupertinoButtonInfo3}
        onPress={props.onPressEndGame}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,39,77,1)"
  },
  host: {
    width: 375,
    height: 66,
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    fontFamily: "System",
    lineHeight: 30,
    textAlign: "center",
    marginTop: 60,
    marginLeft: 4
  },
  currentGameLobby: {
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    fontFamily: "System",
    lineHeight: 30,
    textAlign: "center",
    marginTop: 1
  },
  rect: {
    width: 230,
    height: 50,
    backgroundColor: "rgba(230, 230, 230,1)",
    marginLeft: 105,
    fontSize: 20,
    fontWeight: "bold",
    color: "black"
  },
  name: {
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    fontFamily: "System",
    lineHeight: 30,
    letterSpacing: 0,
    textAlign: "left",
    flex: 1,
    marginRight: 265,
    marginLeft: -332,
    marginTop: 1
  },
  rectRow: {
    height: 50,
    flexDirection: "row",
    marginTop: 25,
    marginLeft: 14,
    marginRight: 29
  },
  cupertinoButtonInfo: {
    width: 174,
    height: 48,
    marginTop: 38,
    alignSelf: "center"
  },
  hostPrivileges: {
    top: 0,
    left: 0,
    width: 375,
    height: 68,
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 24,
    fontFamily: "System",
    lineHeight: 36,
    letterSpacing: 0,
    textAlign: "center"
  },
  materialRadio1: {
    top: 58,
    left: 20,
    width: 40,
    height: 40,
    position: "absolute"
  },
  materialRadio12: {
    top: 98,
    left: 20,
    width: 40,
    height: 40,
    position: "absolute"
  },
  materialRadio13: {
    top: 138,
    left: 20,
    width: 40,
    height: 40,
    position: "absolute"
  },
  lobby: {
    top: 68,
    left: 60,
    width: 169,
    height: 31,
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "System",
    textAlign: "left"
  },
  tag: {
    top: 108,
    left: 60,
    width: 169,
    height: 31,
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "System",
    textAlign: "left"
  },
  freezeTag: {
    top: 148,
    left: 60,
    width: 169,
    height: 31,
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "System",
    textAlign: "left"
  },
  hostPrivilegesStack: {
    width: 375,
    height: 179,
    marginTop: 82,
    marginLeft: 4
  },
  cupertinoButtonInfo2: {
    width: 174,
    height: 48,
    marginTop: 30,
    alignSelf: "center"
  },
  cupertinoButtonInfo3: {
    width: 174,
    height: 48,
    marginTop: 36,
    alignSelf: "center"
  }
});

export default HostOptions;
