import { AppRegistry } from "react-native";
import App from "./App";
import Constants from "expo-constants";

const appName = Constants.expoConfig?.name ?? "memo";

AppRegistry.registerComponent(appName, () => App);
