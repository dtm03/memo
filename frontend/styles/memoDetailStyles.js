import { StyleSheet, Dimensions } from "react-native";
import colors from "./colors";

const { width } = Dimensions.get("screen");

export const memoDetailStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: "center",
        backgroundColor: colors.backgroundColor,
    },
    mediaContainer: {
        flexDirection: "row",
        backgroundColor: colors.secondaryColor,
        padding: 15,
        borderRadius: 10,
    },
    mediaCover: {
        width: width / 2.5,
        height: 200,
    },
    mediaTextContainer: {
        flex: 1,
        paddingLeft: 10,
        justifyContent: "center",
    },
    mediaTitle: {
        fontSize: 26,
        fontWeight: "bold",
        color: colors.primaryTextColor,
    },
    mediaSubtitle: {
        fontSize: 16,
        color: colors.primaryTextColor,
        marginBottom: 10,
    },
    mediaDate: {
        fontSize: 14,
        color: colors.primaryTextColor,
        marginBottom: 10,
    },
    mediaCategory: {
        fontSize: 14,
        color: colors.tertiaryColor,
    },
    textContainer: {
        backgroundColor: colors.secondaryColor,
        padding: 30,
        borderRadius: 15,
    },
    authorContainer: {
        backgroundColor: colors.secondaryColor,
        padding: 10,
        borderRadius: 15,
        marginVertical: 20,
    },
    quote: {
        fontSize: 24,
        textAlign: "center",
        color: colors.primaryTextColor,
        fontFamily: "LibreBaskerville_700Bold",
        lineHeight: 30,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 20,
    },
    authors: {
        fontSize: 16,
        textAlign: "center",
    },
});