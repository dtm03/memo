import {StyleSheet} from "react-native";
import colors from "./colors";
import {SCREEN_WIDTH} from "./constants";

export const resultListStyles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomColor: colors.tertiaryColor,
        borderBottomWidth: 60,
        borderBottomEndRadius: 15,
        borderBottomStartRadius: 15,
    },
    thumbnail: {
        width: 50,
        height: 75,
        marginRight: 10,
    },
    title: {
        fontSize: 22,
        color: colors.primaryColor,
        width: SCREEN_WIDTH - 130,
    },
    artist: {
        fontSize: 14,
        color: colors.primaryColor,
        width: SCREEN_WIDTH - 130,
    }
});
