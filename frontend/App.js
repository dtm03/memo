import React, {useEffect} from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import Menu from "./screens/Menu";
import MemoDetail from "./screens/MemoDetail";
import { useFonts, LibreBaskerville_400Regular, LibreBaskerville_700Bold, LibreBaskerville_400Regular_Italic } from '@expo-google-fonts/libre-baskerville';
import Collection from "./screens/Collection";
import Inspiration from "./screens/Inspiration";
import newMemo from "./screens/NewMemo";
import NewMemo from "./screens/NewMemo";

const Stack = createStackNavigator();

const App = () => {
    let [userId, setUserId] = React.useState(null);

    let [fontsLoaded] = useFonts({
        LibreBaskerville_400Regular,
        LibreBaskerville_700Bold,
        LibreBaskerville_400Regular_Italic,
    });

    useEffect(() => {
        // Retrieve the user ID from the backend
        setUserId(300);
    }, []);

    if (!fontsLoaded || userId === null) {
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
                <Stack.Screen name="Collection" component={Collection}/>
                <Stack.Screen name="Inspiration" component={Inspiration}/>
                <Stack.Screen name="NewMemo">
                    {props => <NewMemo {...props} userId={userId}/>}
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;