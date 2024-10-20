import {StyleSheet} from "react-native";
import colors from "./colors";
import {SCREEN_WIDTH} from "../utils/constants";

export const resultListStyles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: colors.tertiaryColor,
    },
    thumbnail: {
        width: 50,
        height: 75,
        marginRight: 10,
    },
    title: {
        fontSize: 16,
    },
    list: {
        width: SCREEN_WIDTH - 30,
        marginHorizontal: 15,
        backgroundColor: colors.secondaryColor,
        borderRadius: 15,
        height: 414,
        marginBottom: 20,
    },
});
