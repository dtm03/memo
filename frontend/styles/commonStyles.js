import {StyleSheet, Dimensions} from "react-native";
import colors from "./colors";

const {width, height} = Dimensions.get("screen");

export const commonStyles = StyleSheet.create({
    listContainer: {
        flex: 1,
        alignItems: "center",
        marginTop: 70,
        paddingBottom: 100,
        height,
        width,
        backgroundColor: colors.backgroundColor,
    }
});




