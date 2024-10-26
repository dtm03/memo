import {StyleSheet} from "react-native";
import colors from "./colors";
import {SCREEN_WIDTH} from "../constants";


export const selectedMediaStyles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        backgroundColor: colors.secondaryColor,
        borderRadius: 15,
        width: SCREEN_WIDTH - 30,
        marginBottom: 20,
    },
    thumbnail: {
        width: 50,
        height: 50,
        marginRight: 15,
    },
    title: {
        fontSize: 22,
        color: colors.primaryColor,
    },
    artist: {
        fontSize: 14,
        color: colors.primaryColor,
    }
});
