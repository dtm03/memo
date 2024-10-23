import { StyleSheet } from "react-native";
import colors from "./colors";
import { SCREEN_WIDTH } from "./constants";


export const mediaInfoBoxStyles = StyleSheet.create({
    container: {
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: colors.secondaryColor,
        padding: 15,
        borderRadius: 10,
    },
    cover: {
        width: SCREEN_WIDTH / 2.5,
        height: 200,
    },
    textContainer: {
        flex: 1,
        paddingLeft: 10,
        justifyContent: "center",
    },
    title: {
        fontSize: 26,
        fontWeight: "bold",
        color: colors.primaryTextColor,
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 16,
        color: colors.primaryTextColor,
        marginBottom: 5,
    },
    date: {
        fontSize: 14,
        color: colors.primaryTextColor,
        marginBottom: 10,
    },
});
