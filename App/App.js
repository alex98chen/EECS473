/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import base64 from "react-native-base64";
import { AppState, Text, Button, StyleSheet, TextInput, View, ScrollView, FlatList, SafeAreaView} from 'react-native';
import { BleManager } from "react-native-ble-plx";
import { minSatisfying } from 'semver';
import KeepAwake from 'react-native-keep-awake';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import BleCon from "./src/screens/BleCon";
import ClientGame from "./src/screens/ClientGame";
import ClientJoin from "./src/screens/ClientJoin";
import Connect from "./src/screens/Connect";
import HostGame from "./src/screens/HostGame";
import HostJoin from "./src/screens/HostJoin";
import TestBle from "./src/screens/TestBle";
import Welcome from "./src/screens/Welcome";

var ledService = "e4a4bfdb-b04f-e5a3-9b44-796890d366d6";
var ledCharacteristic = "e4a4bfdc-b04f-e5a3-9b44-796890d366d6";
var bccService = "2db55e35-c09a-4559-aa38-c238217c21ff";
var deviceIDCharacteristic = "2db55e36-c09a-4559-aa38-c238217c21ff";
var bccSendCharacteristic = "2db55e37-c09a-4559-aa38-c238217c21ff";
var bccRecvCharacteristic = "2db55e38-c09a-4559-aa38-c238217c21ff";
var ipAddress = "167.172.236.115";


const ResponseHeader = "Client";
const ResponseType = "type";
const ResponseTypes = Object.freeze({"INIT": "init", "TOUCH":"touch", "GAMEMODE":"gameMode", "STATECHANGE": "stateChange",
    "COUNTDOWN": "countDown", "NOTIFY": "notify", "CHANGESTATE":"changeState"});
const ResponseFields = Object.freeze({"CLIENTSTATE": "clientState", "ID": "id", "GAME": "game", "GAMESTATE": "gameState",
    "GAMEOPTIONS": "gameOptions", "PLAYERSTATE": "playerState", "TOUCHID": "touchID",
    "COUNT":"count", "IT": "it", "FROZE": "froze"});
const GameTypes = Object.freeze({"LOBBY": "lobby", "TAG": "tag", "FREEZE": "freeze"}); // Different Game Modes

class Message
{
    constructor(header)
    {
        this.header = header;
    }
}
Message.Headers = Object.freeze({"SERVER": "SERVER", "GAMEPLAY": "GAMEPLAY"});

class ServerMessage extends Message
{
    constructor(type)
    {
        super(Message.Headers.SERVER);
        this.type = type;
    }
}
ServerMessage.types = Object.freeze({"ACTION": "action", "INFO": "info", "HOST": "host"});

class ActionReq extends ServerMessage
{
    constructor(request)
    {
        super(ServerMessage.types.ACTION);
        this.request = request;
    }
}
ActionReq.requests = Object.freeze({"JOIN": "join", "LEAVE": "leave", "NAME": "name"});

class ReqJoin extends ActionReq
{
    constructor(name)
    {
        super(ActionReq.requests.JOIN);
        if(name != null)
        {
            this.name = name;
        }
    }
}

class ReqLeave extends ActionReq
{
    constructor()
    {
        super(ActionReq.requests.LEAVE);

    }
}

class ReqName extends ActionReq
{
    constructor(name)
    {
        super(ActionReq.requests.NAME);
        if(name != null)
        {
            this.name = name;
        }
    }
}

class InfoReq extends ServerMessage
{
    constructor(request)
    {
        super(ServerMessage.types.INFO);
        this.request = request;
    }
}
InfoReq.requests = Object.freeze({"CLIENTS": "clients", "HELP": "help", "PLAYERS": "players"});

class ReqClients extends InfoReq
{
    constructor()
    {
        super(InfoReq.requests.CLIENTS);
    }
}

class ReqHelp extends InfoReq
{
    constructor()
    {
        super(InfoReq.requests.HELP);
    }
}

class ReqPlayers extends InfoReq
{
    constructor()
    {
        super(InfoReq.requests.PLAYERS);
    }
}


class HostReq extends ServerMessage
{
    constructor(request)
    {
        super(ServerMessage.types.HOST);
        this.request = request;
    }
}
HostReq.requests = Object.freeze({"GAMEMODE": "gamemode", "START": "start", "END": "end"});

class ReqGameMode extends HostReq
{
    constructor(GameMode)
    {
        super(HostReq.requests.GAMEMODE);
        this.gamemode = GameMode;
    }
}
ReqGameMode.GameModes = Object.freeze({"LOBBY": "lobby", "TAG": "tag", "FREEZE": "freeze"}); // Different Game Modes

class ReqStart extends HostReq
{
    constructor()
    {
        super(HostReq.requests.START);
    }
}
class ReqEnd extends HostReq
{
    constructor()
    {
        super(HostReq.requests.END);
    }
}
class GameplayMessage extends Message
{
    constructor(type)
    {
        super(Message.Headers.GAMEPLAY);
        this.type = type;
    }
}
GameplayMessage.types = Object.freeze({"TOUCH": "touch"});

class TouchEvent extends GameplayMessage
{
    constructor(touchID, id)
    {
        super(GameplayMessage.types.TOUCH);
        this.touchID = touchID;
        this.id = id;
    }
}

export default class App extends Component
{
  constructor(props) {
    super(props);
    this.state = {
      
      currentState: "Welcome",
      allStates: {Welcome:"Welcome", BleCon: "BleCon", TestBle: "TestBle", Connect: "Connect", 
                  HostJoin: "HostJoin", ClientJoin: "ClientJoin", HostLobby: "HostLobby", 
                  ClientLobby: "ClientLobby", HostTag: "HostTag", ClientTag: "ClientTag"},
      
      deviceNames: [],
      devices: {},
      currentDevice: null,
      isBleCon: false,
      isDeveloper: true,
      bleServiceList: [], // id
      bleServices: {}, // id -> uuid
      bleCharacteristicList: [], // id
      bleCharacteristics: {}, // id -> value, uuid

      serverSocket: null,
      isServerCon: false,

      name: "Default",
      serverID: 0,
      serverStatus: "None",
      game: "None",
      gameState: "None",
      countdown: 0,
      msg1: "",
      msg2: "",
      stats: "",

      /*
      deviceList: [{
        key: 'Device List',
      },],
      deviceToConnect: 'NXP_BLE_RSCS',
      currentDeviceName: 'Not found yet',    
      deviceUUID: '',
      service: '',
      characteristic: '',
      value: '',
      error: '',
      speed: '',
      currentDevice: null,
      */
    };

    this.manager = new BleManager();
  
    /* Tap Welcome Page to enter */
    this.welcomeTap = this._onPressButtonWelcome.bind(this);
    
    /* Ble Page Stuff */
    this.scanBle = this._onPressButtonScan.bind(this);
    this.connBle = this._onPressBleItemConnect.bind(this);
    this.contBle = this._onPressBleContinue.bind(this);
    this.testBle = this._onPressButtonBluetoothTest.bind(this);

    /* Ble Test Page Stuff */
    this.bleReadGatt =  this._readGatt.bind(this);
    this.bleReadCharacteristicFromHandle = this._readCharacteristicFromHandle.bind(this);
    this.bleWriteValuetoHandle = this._writeCharacteristicValueToHandle.bind(this);

    /* Connect page Stuff */
    this.serverConnect = this._webSocketServerConnect.bind(this);
    this.serverMessage = "Hello, please connect to the server";

    /* on socket stuff */
    this.serverOnClose = this._webSocketOnClose.bind(this);
    this.serverOnConnect = this._webSocketOnConnect.bind(this);
    this.serverOnMessage = this._webSocketOnMessage.bind(this);
    this.serverOnError = this._webSocketOnError.bind(this);
    this.serverSendMessage = this._webSocketSendMsg.bind(this);

    /* Host Lobby */
    this.onHostPressLobby = this._onHostPressLobby.bind(this);
    this.onHostPressTag = this._onHostPressTag.bind(this);
    this.onHostPressFreezeTag = this._onHostPressFreezeTag.bind(this);
    this.onHostPressStartGame = this._onHostPressStartGame.bind(this);
    this.onHostPressEndGame = this._onHostPressEndGame.bind(this);

    this.onTouchEvent = this._onTouchEvent.bind(this);

    /* Join the game */
    this.onJoinGame = this._onPressJoinGame.bind(this);
    this.onLeaveGame = this._onPressLeaveGame.bind(this);
  }


  _onPressButtonWelcome()
  {
    console.log("Welcome!");
    this.setState({currentState: this.state.allStates.BleCon});
  }  

  _getCurrentDevice()
  {
    return this.state.devices[this.state.currentDevice];
  }

  _onPressButtonScan() {
    this.setState({deviceNames: []})
    this.setState({devices: {}}); // reset the list
    var count = 0;

    this.manager.startDeviceScan(null,
        null, (error, device) => {
            if (error) {
               console.log("error", error);
                alert(error.message)
                return
            }
            if (!(device.name === null || device.name === '') && !(device.name in this.state.devices)) {
                this.setState({ deviceNames: this.state.deviceNames.concat({name: device.name}) }) // add key to list
                this.setState({ devices: { [device.name]: device, ...this.state.devices}}) // add device
            }
            count = count + 1
            if (count === 50) {
              this.manager.stopDeviceScan()
            }
        });
  }

  _onPressBleItemConnect(item)
  {
    if(!this.state.isBleCon)
    {
      this.state.devices[item].connect().then((device) =>
      {
        this.setState({currentDevice: item});
        this.setState({isBleCon: true});
        device.onDisconnected((error, device)=>
        {
          this.setState({isBleCon: false});
          // TODO device disconnected!
        })

        device.discoverAllServicesAndCharacteristics().then((device)=>
        {
          device.monitorCharacteristicForService(bccService, bccRecvCharacteristic, this.onTouchEvent);
        })

      })
    }
  }

  _onPressBleContinue()
  {
    console.log("Continuing Ble");
    if(this.state.isBleCon || this.state.isDeveloper) this.setState({currentState: this.state.allStates.Connect});
  }

  _onPressButtonBluetoothTest()
  {
    console.log("Testing Ble");
    if(this.state.isBleCon || this.state.isDeveloper) this.setState({currentState: this.state.allStates.TestBle});
  }

  _readGatt()
  {
    // TODO
    this.setState({bleServices: {}});
    this.setState({bleServiceList:[]});
    this.setState({bleCharacteristics: {}});
    this.setState({bleCharacteristicList: []});

    if(!this.state.isConnected) return;
    if(this.state.devices.hasOwnProperty(this.state.currentDevice))
    {
      this.state.devices[this.state.currentDevice].isConnected().then( (tf) =>
      {
        this.setState({ devices: { [device.name]: device, ...this.state.devices}}) // add device
        if(tf)
        {
          this.state.devices[this.state.currentDevice].discoverAllServicesAndCharacteristics().then((device)=>{
            device.services( (services)=>
            {
              services.forEach( (service) => 
              {
                this.setState({bleServiceList: this.state.bleServiceList.concat(service.id)}); // TODO inefficient
                this.setState({bleServices: {[service.id]: service, ...this.state.bleServices}}); 
                //this.setState({ bleServices: this.state.bleServices.concat({id: service.id, uuid: service.uuid})});
                device.characteristicsForService(service.uuid).then( (characteristics) =>
                {
                    characteristics.forEach( (characteristic) =>
                    {
                      this.setState({bleCharacteristicList: this.state.bleCharacteristicList.concat(characteristic.id)}); // TODO inefficient
                      this.setState({
                        bleCharacteristics: {[characteristic.id]: characteristic, ...this.state.bleCharacteristics}
                      }); 
                      //this.setState({ bleCharacteristics: this.state.bleCharacteristics.concat({id: characteristic.id, uuid: characteristic.uuid, value: characteristic.value}) });
                    } )
                })
              })
            })
          })
        }
      })
    }
    console.log("Found " + this.state.bleServiceList.length + " services");
    console.log(this.state.bleServiceList);
    console.log("Found " + this.state.bleCharacteristicList.length + " services");
    console.log(this.state.bleCharacteristicList)
  }

  _readCharacteristicFromHandle(handle)
  {
    if(!this.state.isConnected) return;
    if(!this.bleCharacteristics.hasOwnProperty(handle)) return;
    if(!this.bleCharacteristic[handle].isReadable()) return;

    this.bleCharacteristics[handle].read().then((characteristic) =>
    {

      let charObj = JSON.parse(JSON.stringify(this.state.characteristics));
      charObj[handle] = characteristic;

      this.setState({bleCharacteristics: charObj});
    })
  }

  _writeCharacteristicValueToHandle(handle, value)
  {
    // TODO 
    if(!this.state.isConnected) return;
    if(!this.bleCharacteristics.hasOwnProperty(handle)) return;
    
    if(this.bleCharacteristic[handle].isWritableWithoutResponse()) 
    {
       this.bleCharacteristic[handle].writeWithoutResponse( base64.encode(value) ).then(
         (characteristic) => {
          let charObj = JSON.parse(JSON.stringify(this.state.characteristics));
          charObj[handle] = characteristic;
          this.setState({bleCharacteristics: charObj});
       });
    }
    else if(this.bleCharacteristic[handle].isWritableWithResponse())
    {
        this.bleCharacteristic[handle].writeWithResponse( base64.encode(value) ).then(
          (characteristic) => {
          let charObj = JSON.parse(JSON.stringify(this.state.characteristics));
          charObj[handle] = characteristic;
          this.setState({bleCharacteristics: charObj});
        }); 
    }

  }

  _webSocketOnConnect()
  {
    console.log("Server Connection");
    this.setState({isServerCon: true});
  }

  _webSocketOnMessage(e)
  {
    // TODO
    console.log("Message From Server");
    if(!this.state.isServerCon) {
      console.log("No server connection")
      return;
    }

    var msgObj = JSON.parse(e.data);

    if(!msgObj.hasOwnProperty(ResponseType))
    {
        console.log("Invalid Message Format: no type,  " + e.data);
        return;
    }

    let msgResponseType = msgObj[ResponseType];

    if(msgResponseType == ResponseTypes.COUNTDOWN)
    {
      console.log("Game Starting in " + msgObj[ResponseFields.COUNT] + " seconds");
      this.setState({countdown: msgObj[ResponseFields.COUNT]});
      this.setState({msg2: "Game Starting in " + this.state.countdown});
    }
    else if(msgResponseType == ResponseTypes.GAMEMODE)
    {
      console.log("Game mode changed!");
      this.setState({game: msgObj[ResponseFields.GAME]});
      this.setState({gameState: msgObj[ResponseFields.PLAYERSTATE]});
    }
    else if(msgResponseType == ResponseTypes.INIT)
    {
        console.log("init!");
        if(msgObj.hasOwnProperty(ResponseFields.NAME))
        {
          this.setState({name: msgObj[ResponseFields.NAME]});
        }
        this.setState({serverID: msgObj[ResponseFields.ID]});
        this.setState({serverStatus: msgObj[ResponseFields.CLIENTSTATE]});
        this.setState({game: msgObj[ResponseFields.GAME]});
        this.setState({gameState: msgObj[ResponseFields.GAMESTATE]});
        console.log(msgObj);
        console.log("Server ID -" + this.state.serverID  + "-");
        console.log("Server ID -" + base64.encode(String.fromCharCode(this.state.serverID))  + "-");
        console.log("Current Device", this.state.currentDevice)
        this.state.devices[this.state.currentDevice].writeCharacteristicWithResponseForService(bccService, deviceIDCharacteristic, base64.encode(String.fromCharCode(this.state.serverID)))

        if(this.state.serverStatus == "host") {
          if(this.state.gameState == "spectator")
          {
            this.setState({currentState: this.state.allStates.HostJoin})
          }
          else
          {
            this.setState({currentState: this.state.allStates.HostLobby})
          }         
        }
        else {
          if(this.state.gameState == "spectator")
          {
            this.setState({currentState: this.state.allStates.ClientJoin});
          }
          else{
            this.setState({currentState: this.state.allStates.ClientLobby}); 
          }
          
        }
    }
    else if(msgResponseType == ResponseTypes.CHANGESTATE)
    {
      console.log("Change of State");
      if(msgObj.hasOwnProperty(ResponseFields.CLIENTSTATE))
      {
        console.log("Change of server state")
        this.setState({serverStatus: msgObj[ResponseFields.CLIENTSTATE]});
        if(this.state.serverStatus == "host") {
          if(this.state.gameState == "spectator")
          {
            this.setState({currentState: this.state.allStates.HostJoin});
          }
          else{
            this.setState({currentState: this.state.allStates.HostLobby}); 
          }
        }
        else 
        {
          if(this.state.gameState == "spectator")
          {
            this.setState({currentState: this.state.allStates.ClientJoin});
          }
          else{
            this.setState({currentState: this.state.allStates.ClientLobby}); 
          }
        }
      }
      else
      {
        console.log("Change of game state");
        this.setState({gameState: msgObj[ResponseFields.PLAYERSTATE]});
        if(this.state.gameState == "spectator")
        {
          console.log("Spectator");
          if(this.state.serverStatus == "host") this.setState({currentState: this.state.allStates.HostJoin})
          else this.setState({currentState: this.state.allStates.ClientJoin});
        }
        else 
        {
          if(this.state.serverStatus == "host") {
            console.log("host");
            this.setState({currentState: this.state.allStates.HostLobby})
          }
          else {
            this.setState({currentState: this.state.allStates.ClientLobby});
            if(this.state.gameState == "it")
            {
              console.log("i am it");
              this.state.devices[this.state.currentDevice].writeCharacteristicWithResponseForService(bccService, bccSendCharacteristic, base64.encode(String.fromCharCode(this.state.serverID)));
            }
          }
        }
        this.setState({msg1: "You are " + this.state.gameState});
      }
    }
    else if(msgResponseType == ResponseTypes.NOTIFY) {
      console.log("NOTIFIED");
      this.setState({msg1: msgObj[ResponseFields.NAME] + "-" + msgObj[ResponseFields.IT] + " is IT!"});
      this.state.devices[this.state.currentDevice].writeCharacteristicWithResponseForService(bccService, bccSendCharacteristic, base64.encode(String.fromCharCode(msgObj[ResponseFields.IT])));
    }
    else
    {
      console.log("Invalid Response Type: " + msgObj);
    }
  }

  _onTouchEvent(characteristic, error)
  {
    if(!this.state.isServerCon || !this.state.isBleCon) return;
    if(this.state.gameState == "spectator") return;
    characteristic.read().then((characteristic) =>
    {
      this.serverSendMessage(JSON.stringify(new TouchEvent(base64.decode(characteristic.value))));
    })
  }

  _webSocketOnError(e)
  {
    console.log("Server Error");
    if(!this.state.isServerCon) return;
    this.setState({serverMessage: e.reason});
    console.log("Error: ", e);
  }

  _webSocketOnClose(closeEvent)
  {
    console.log("Socket Closed: " + closeEvent.code);
    this.setState({serverMessage: "Failed: " + closeEvent.code});
    if(!this.state.isServerCon) return;
    this.setState({isServerCon: false});
    this.setState({serverSocket: null});
    this.setState({currentState: this.state.allStates.Connect});
  }

  _webSocketSendMsg(message)
  {
    console.log("Sending Message to Server");
    if(!this.state.isServerCon) return;
    this.state.serverSocket.send(message);
  }

  _webSocketServerConnect(ipaddr, port)
  {
    console.log("Connecting to Server");
    let tempSocket = new WebSocket("ws://" + ipaddr + ":" + port);
    this.setState({serverSocket: tempSocket});
    tempSocket.onopen = this.serverOnConnect;
    tempSocket.onclose = this.serverOnClose;
    tempSocket.onerror = this.serverOnError;
    tempSocket.onmessage = this.serverOnMessage;
  }

  _onHostPressLobby()
  {
    console.log("Changing to lobby");
    if(!this.state.isServerCon && this.state.game != "lobby") return;
    this.serverSendMessage(JSON.stringify(new ReqGameMode(GameTypes.LOBBY)));
  }

  _onHostPressTag()
  {
      console.log("Changing to tag");
      if(!this.state.isServerCon && this.state.game != "tag") return;
      this.serverSendMessage(JSON.stringify(new ReqGameMode(GameTypes.TAG)));
  }

  _onHostPressFreezeTag()
  {
    // TODO leave this for now

    console.log("changing to freezeTag");
    if(!this.state.isServerCon && this.state.game != "freeze") return;
    //if(!this.state.isServerCon) return;
  }

  _onHostPressStartGame()
  {
    console.log("Starting the game");
    if(!this.state.isServerCon) return;
    this.serverSendMessage(JSON.stringify(new ReqStart()));
  }

  _onHostPressEndGame()
  {
    console.log("Ending the game");
    if(!this.state.isServerCon) return;
    this.serverSendMessage(JSON.stringify(new ReqEnd()));
  }

  _onPressJoinGame(name){
    console.log("Joining game as " + name);
    if(!this.state.isServerCon) return;
    this.serverSendMessage(JSON.stringify(new ReqJoin(name)));
  }

  _onPressLeaveGame()
  {
    console.log("Leaving the game");
    if(!this.state.isServerCon) return;
    this.serverSendMessage(JSON.stringify(new ReqLeave()));
    if(this.state.serverStatus == "host") this.setState({currentState: this.state.allStates.HostJoin})
    else this.setState({currentState: this.state.allStates.ClientJoin});
    this.setState({gameState: "spectator"});
  }

  render()
  {
    if(this.state.currentState == this.state.allStates.Welcome)
    {
      return(<Welcome onPress={this.welcomeTap}/>);
    }
    else if(this.state.currentState == this.state.allStates.BleCon)
    {
      return(<BleCon currentDevice={this.state.currentDevice} 
          devices={this.state.deviceNames} bleScan={this.scanBle} 
          bleCon={this.connBle} isConnected={this.state.isBleCon}
         bleCont={this.contBle} bleTest={this.testBle}
      />)
    }
    else if(this.state.currentState == this.state.allStates.TestBle)
    {
      return(<TestBle testBleScan={this.scanBle} bleCon={this.connBle} readGatt={this.bleReadGatt}
      characteristics={this.state.bleCharacteristics} readCharacteristic={this.bleReadCharacteristicFromHandle}  
      sendData={this.bleWriteValuetoHandle}
      />)
    }
    else if(this.state.currentState == this.state.allStates.Connect)
    {
      return(<Connect serverMsg={this.state.serverMessage} ServerConnect={this.serverConnect}/>);
    }
    else if(this.state.currentState == this.state.allStates.HostJoin)
    {
      return(<HostJoin onPressLobby={this.onHostPressLobby} onPressTag={this.onHostPressTag} 
      onPressFreezeTag={this.onHostPressFreezeTag} joinGame={this.onJoinGame}
      onPressStartGame={this.onHostPressStartGame} onPressEndGame={this.onHostPressEndGame}
      currentGame={this.state.game}
      />);
    }
    else if(this.state.currentState == this.state.allStates.ClientJoin)
    {
      return(<ClientJoin currentGame={this.state.game} joinGame={this.onJoinGame}/>);
    }
    else if(this.state.currentState == this.state.allStates.HostLobby 
         || this.state.currentState == this.state.allStates.HostTag)
    {
      // TODO 
      return(<HostGame currentGame={this.state.game} 
      msg1={this.state.msg1} msg2={this.state.ms2} stats={this.state.stats} onLeaveGame={this.onLeaveGame} 
      onEndGame={this.onHostPressEndGame} name={this.state.name}
       />);
    }
    else if(this.state.currentState == this.state.allStates.ClientLobby
      || this.state.currentState == this.state.allStates.ClientTag)
    {
      // TODO
      return(<ClientGame currentGame={this.state.game}
        msg1={this.state.msg1} msg2={this.state.msg2} stats={this.state.stats} onLeaveGame={this.onLeaveGame}
        name={this.state.name}
      />);
    }
    else {
      return(<View><Text> Fuck! Undefined State </Text></View>)
    }
  }
}