import {Dimensions, StyleSheet} from "react-native";
import colors from "./colors";

const {width, height} = Dimensions.get("screen");

export const memoCardStyles = StyleSheet.create({
    card: {
        backgroundColor: "white",
        paddingBottom: 10,
        paddingTop: 15,
        margin: 10,
        borderRadius: 15,
        width: width - 30,
    },
    textContainer: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
    text: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        marginHorizontal: 15,
    },
    divider: {
        height: 1,
        backgroundColor: colors.tertiaryColor,
        marginVertical: 10,
    },
    authorContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 15,
    },
    author: {
        fontSize: 14,
        flex: 1,
    },
});
