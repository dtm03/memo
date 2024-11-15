import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import Menu from "./screens/Menu";
import MemoDetail from "./screens/MemoDetail";
import {
    useFonts,
    LibreBaskerville_400Regular,
    LibreBaskerville_700Bold,
    LibreBaskerville_400Regular_Italic
} from '@expo-google-fonts/libre-baskerville';
import Collection from "./screens/Collection";
import Inspiration from "./screens/Inspiration";
import NewMemo from "./screens/NewMemo";
import {UserProvider} from "./components/UserContext";
import Toast, {BaseToast} from "react-native-toast-message";
import colors from "./styles/colors";

// Category other verursacht Fehler, Creators werden nicht gut gemappt, MediaId wird auf null gesetzt
// Refactoring
// Maybe neue Bücher API für bessere Links
// Memo Input besser anleiten

const toastConfig = {
    success: (props) => (
        <BaseToast
            {...props}
            style={{borderLeftColor: colors.tertiaryColor}}
            contentContainerStyle={{paddingHorizontal: 15}}
            text1Style={{
                fontSize: 15,
                fontWeight: '700',
                color: colors.primaryColor,
            }}
        />
    ),
};

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
        <UserProvider>
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
                <Toast config={toastConfig}/>
            </NavigationContainer>
        </UserProvider>
    );
};

export default App;