import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import CupertinoButtonInfo from "../components/CupertinoButtonInfo";

function ClientJoin(props) {
  const [name, changeName] = React.useState("Name");
  return (
    <View style={styles.container}>
      <Text style={styles.client}>Client </Text>
      <Text style={styles.currentGameLobby}>Current Game: {props.currentGame}</Text>
      <View style={styles.rectStack}>
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
    fontFamily: "System",
    lineHeight: 30,
    textAlign: "center",
    marginTop: 60
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
    top: 0,
    left: 105,
    width: 230,
    height: 50,
    backgroundColor: "rgba(230, 230, 230,1)",
    position: "absolute",
    fontSize: 20,
    fontWeight: "bold",
    color: "black"
  },
  name: {
    top: 0,
    left: 0,
    color: "rgba(255,255,255,1)",
    position: "absolute",
    right: 0,
    fontSize: 24,
    fontFamily: "System",
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
