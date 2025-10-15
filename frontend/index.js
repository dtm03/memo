import { AppRegistry } from 'react-native';
import App from './App';
import Constants from 'expo-constants';

const appName = Constants.manifest.name;

AppRegistry.registerComponent(appName, () => App);
