import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import Menu from "./screens/Menu";
import MemoDetail from "./screens/MemoDetail";
import BookDetail from "./archive/BookDetail";
import EditMemo from "./screens/EditMemo";

const Stack = createStackNavigator();

const App = () => {
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