import {StyleSheet, Dimensions} from "react-native";
import colors from "./colors";

const {width, height} = Dimensions.get("screen");

export const editMemoStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        height,
        width,
        backgroundColor: colors.primaryColor,
    },
    button: {
        backgroundColor: colors.secondaryColor,
        paddingHorizontal: 20,
        borderRadius: 23,
        height: 46,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        color: colors.primaryColor,
        fontSize: 16,
        lineHeight: 46,
        fontWeight: "bold",
    },
});
