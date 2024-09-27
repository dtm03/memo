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
    },
    buttonStyle: {
        backgroundColor: colors.secondaryColor,
        width: width - 30,
        borderRadius: 150,
    },
});
