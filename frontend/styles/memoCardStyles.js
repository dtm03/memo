import {Dimensions, StyleSheet} from "react-native";
import colors from "./colors";

const {width, height} = Dimensions.get("screen");

export const memoCardStyles = StyleSheet.create({
    card: {
        backgroundColor: "white",
        paddingBottom: 10,
        marginBottom: 20,
        borderRadius: 15,
        width: width - 30,
    },
    textContainer: {
        justifyContent: "center",
        alignItems: "center",
        padding: 30,
        flex: 1,
    },
    quote: {
        fontSize: 22,
        textAlign: "center",
        lineHeight: 30,
        fontFamily: 'LibreBaskerville_700Bold',
    },
    divider: {
        height: 1,
        backgroundColor: colors.tertiaryColor,
        marginBottom: 10,
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
