import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import Menu from "./screens/Menu";
import MemoDetail from "./screens/MemoDetail";
import EditMemo from "./screens/EditMemo";
// import {useFonts, Mulish_400Regular, Mulish_600SemiBold, Mulish_700Bold, Mulish_800ExtraBold} from "@expo-google-fonts/mulish";

const Stack = createStackNavigator();

const App = () => {

    // let [fontsLoaded] = useFonts({
    //     Mulish: Mulish_400Regular,
    //     MulishSemiBold: Mulish_600SemiBold,
    //     MulishBold: Mulish_700Bold,
    //     MulishExtraBold: Mulish_800ExtraBold
    // });
    //
    // if (!fontsLoaded) {
    //     return null;
    // }

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Menu"
                screenOptions={{headerShown: false}}
            >
                <Stack.Screen name="Main" component={Menu}/>
                <Stack.Screen name="Memo" component={MemoDetail}/>
                <Stack.Screen name="EditMemo" component={EditMemo}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;