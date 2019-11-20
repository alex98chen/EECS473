import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput
} from "react-native";
import CupertinoButtonInfo from "../components/CupertinoButtonInfo";
import CupertinoRadio from "../components/CupertinoRadio";

function HostJoin() {
  return (
    <View style={styles.container}>
      <Text style={styles.host}>Host</Text>
      <Text style={styles.currentGameLobby}>Current Game: Lobby</Text>
      <View style={styles.rectStack}>
        <View style={styles.rect} />
        <Text style={styles.name}>Name</Text>
      </View>
      <CupertinoButtonInfo
        caption="Join Game"
        style={styles.cupertinoButtonInfo}
      />
      <View style={styles.button2Stack}>
        <TouchableOpacity style={styles.button2}>
          <CupertinoRadio style={styles.cupertinoRadio} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button6}>
          <TouchableOpacity style={styles.button3}>
            <CupertinoRadio style={styles.cupertinoRadio2} />
          </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button8}>
          <TouchableOpacity style={styles.button4}>
            <CupertinoRadio style={styles.cupertinoRadio3} />
          </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.lobby}>Lobby</Text>
        </TouchableOpacity>
        <Text style={styles.tag}>Tag</Text>
        <TouchableOpacity style={styles.button7}>
          <Text style={styles.freezeTag}>Freeze Tag</Text>
        </TouchableOpacity>
        <Text style={styles.hostPrivileges}>Host Privileges</Text>
        <TouchableOpacity style={styles.button5}>
          <TextInput placeholder="Tag" style={styles.textInput} />
        </TouchableOpacity>
      </View>
      <CupertinoButtonInfo
        caption="Start Game"
        style={styles.cupertinoButtonInfo2}
      />
      <CupertinoButtonInfo
        caption="End Game"
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
  host: {
    width: 375,
    height: 66,
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    fontFamily: "roboto-regular",
    lineHeight: 30,
    textAlign: "center",
    marginTop: 60,
    marginLeft: 4
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
    top: 1,
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
    marginTop: 38,
    alignSelf: "center"
  },
  button2: {
    top: 68,
    left: 10,
    width: 40,
    height: 40,
    position: "absolute"
  },
  cupertinoRadio: {
    width: 40,
    height: 40
  },
  button6: {
    top: 108,
    left: 10,
    width: 40,
    height: 40,
    position: "absolute"
  },
  button3: {
    width: 40,
    height: 40
  },
  cupertinoRadio2: {
    width: 40,
    height: 40
  },
  button8: {
    top: 148,
    left: 10,
    width: 40,
    height: 40,
    position: "absolute"
  },
  button4: {
    width: 40,
    height: 40
  },
  cupertinoRadio3: {
    width: 40,
    height: 40
  },
  button: {
    top: 68,
    left: 50,
    width: 191,
    height: 40,
    position: "absolute"
  },
  lobby: {
    width: 191,
    height: 40,
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    fontFamily: "roboto-regular",
    lineHeight: 36,
    letterSpacing: 0
  },
  tag: {
    top: 108,
    left: 50,
    width: 158,
    height: 40,
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 24,
    fontFamily: "roboto-regular",
    lineHeight: 36,
    letterSpacing: 0
  },
  button7: {
    top: 148,
    left: 50,
    width: 185,
    height: 33,
    position: "absolute"
  },
  freezeTag: {
    width: 185,
    height: 33,
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    fontFamily: "roboto-regular",
    lineHeight: 36,
    letterSpacing: 0
  },
  hostPrivileges: {
    top: 0,
    left: 0,
    width: 375,
    height: 68,
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 24,
    fontFamily: "roboto-regular",
    lineHeight: 36,
    letterSpacing: 0,
    textAlign: "center"
  },
  button5: {
    top: 108,
    left: 50,
    width: 158,
    height: 40,
    position: "absolute"
  },
  textInput: {
    width: 158,
    height: 40,
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    fontFamily: "roboto-regular",
    lineHeight: 36,
    letterSpacing: 0
  },
  button2Stack: {
    width: 375,
    height: 188,
    marginTop: 82,
    marginLeft: 4
  },
  cupertinoButtonInfo2: {
    width: 174,
    height: 48,
    marginTop: 21,
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
