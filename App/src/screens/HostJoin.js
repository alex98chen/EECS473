import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from "react-native";
import CupertinoButtonInfo from "../components/CupertinoButtonInfo";
import MaterialRadio1 from "../components/MaterialRadio1";
import { removeProperties } from "@babel/types";



function HostJoin(props) {
  const [name, changeName] = React.useState("Name");

  return (
    <View style={styles.container}>
      <Text style={styles.host}> Host </Text>
      <Text style={styles.currentGameLobby}>Current Game: {props.currentGame} </Text>
      <View style={styles.rectRow}> 
        <TextInput style={styles.rect} 
          onChangeText = {name => changeName(name)}
          value={name}
        />
        <Text style={styles.name}>Name</Text>
      </View>
      <CupertinoButtonInfo
        caption="Join Game"
        style={styles.cupertinoButtonInfo}
        onPress={()=>{props.joinGame(name)}}
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

export default HostJoin;
