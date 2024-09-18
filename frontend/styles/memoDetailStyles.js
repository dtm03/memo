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
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 5,
        color: colors.primaryTextColor,
    },
    mediaSubtitle: {
        fontSize: 18,
        marginBottom: 5,
        color: colors.primaryTextColor,
    },
    mediaGenre: {
        fontSize: 16,
        color: colors.primaryTextColor,
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
        fontWeight: "bold",
        textAlign: "center",
        color: colors.primaryTextColor,
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