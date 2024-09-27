import {StyleSheet, Dimensions} from "react-native";
import colors from "./colors";

const {width, height} = Dimensions.get("screen");

export const commonStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        marginTop: 85,
        paddingBottom: 85,
        height,
        width,
        backgroundColor: colors.primaryColor,
    }
});




