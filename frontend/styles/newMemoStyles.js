import {Dimensions, StyleSheet} from "react-native";
import colors from "./colors";

const {width, height} = Dimensions.get("screen");

export const newMemoStyles = StyleSheet.create({
    input: {
        paddingHorizontal: 23,
        borderRadius: 23,
        marginBottom: 20,
        backgroundColor: colors.secondaryColor,
        width: width - 30,
        height: 46,
        fontSize: 16,
    },
    button: {
        flex: 1,
        backgroundColor: colors.secondaryColor,
        borderRadius: 23,
        height: 46,
        justifyContent: "center",
        alignItems: "center",
    },
    switchSelector: {
        width: width - 30,
        marginBottom: 20,
        height: 46,
        backgroundColor: "green",
    },
    buttonText: {
        color: colors.primaryColor,
        fontSize: 16,
        lineHeight: 46,
        fontWeight: "bold",
    },
    buttonContainer: {
        flexDirection: "row",
        width: width - 30,
        alignItems: "center",
    },
});
