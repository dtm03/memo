import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import Menu from "./screens/Menu";
import MemoDetail from "./screens/MemoDetail";
import { useFonts, LibreBaskerville_400Regular, LibreBaskerville_700Bold, LibreBaskerville_400Regular_Italic } from '@expo-google-fonts/libre-baskerville';

const Stack = createStackNavigator();

const App = () => {

    let [fontsLoaded] = useFonts({
        LibreBaskerville_400Regular,
        LibreBaskerville_700Bold,
        LibreBaskerville_400Regular_Italic,
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Menu"
                screenOptions={{headerShown: false}}
            >
                <Stack.Screen name="Main" component={Menu}/>
                <Stack.Screen name="Memo" component={MemoDetail}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;