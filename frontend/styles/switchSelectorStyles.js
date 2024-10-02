import {StyleSheet} from "react-native";
import { SCREEN_WIDTH } from "../utils/constants";

export const switchSelectorStyles = StyleSheet.create({
    switchContainer: {
        flexDirection: 'row',
        width: SCREEN_WIDTH - 30,
        backgroundColor: 'white',
        borderRadius: 23,
        height: 46,
        marginBottom: 20,
        padding: 2,
    },
    option: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 23,
        height: 42,
    },
});
