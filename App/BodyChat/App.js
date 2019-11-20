import React, { useState } from "react";
import { StackNavigator, DrawerNavigator } from "react-navigation";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import BleCon from "./src/screens/BleCon";
import ClientGame from "./src/screens/ClientGame";
import ClientJoin from "./src/screens/ClientJoin";
import Connect from "./src/screens/Connect";
import HostGame from "./src/screens/HostGame";
import HostJoin from "./src/screens/HostJoin";
import TestBle from "./src/screens/TestBle";
import Welcome from "./src/screens/Welcome";

const DrawerNavigation = DrawerNavigator({
  BleCon: {
    screen: BleCon
  },
  ClientGame: {
    screen: ClientGame
  },
  ClientJoin: {
    screen: ClientJoin
  },
  Connect: {
    screen: Connect
  },
  HostGame: {
    screen: HostGame
  },
  HostJoin: {
    screen: HostJoin
  },
  TestBle: {
    screen: TestBle
  },
  Welcome: {
    screen: Welcome
  }
});

const StackNavigation = StackNavigator(
  {
    DrawerNavigation: {
      screen: DrawerNavigation
    },
    BleCon: {
      screen: BleCon
    },
    ClientGame: {
      screen: ClientGame
    },
    ClientJoin: {
      screen: ClientJoin
    },
    Connect: {
      screen: Connect
    },
    HostGame: {
      screen: HostGame
    },
    HostJoin: {
      screen: HostJoin
    },
    TestBle: {
      screen: TestBle
    },
    Welcome: {
      screen: Welcome
    }
  },
  {
    headerMode: "none"
  }
);

function App() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  if (!isLoadingComplete) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return isLoadingComplete ? <StackNavigation /> : <AppLoading />;
  }
}
async function loadResourcesAsync() {
  await Promise.all([
    Font.loadAsync({
      "roboto-regular": require("./assets/fonts/roboto-regular.ttf"),
      "roboto-regular": require("./src/assets/fonts/roboto-regular.ttf"),
      "roboto-500": require("./src/assets/fonts/roboto-500.ttf"),
      "comic-sans-ms-regular": require("./src/assets/fonts/comic-sans-ms-regular.ttf"),
      "arial-regular": require("./src/assets/fonts/arial-regular.ttf")
    })
  ]);
}
function handleLoadingError(error) {
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

export default App;
