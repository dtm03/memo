import { StyleSheet } from "react-native";
import colors from "./colors";
import { SCREEN_WIDTH } from "../utils/constants";


export const memoDetailStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: "center",
        backgroundColor: colors.primaryColor,
    },
    mediaContainer: {
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: colors.secondaryColor,
        padding: 15,
        borderRadius: 10,
    },
    mediaCover: {
        width: SCREEN_WIDTH / 2.5,
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
        marginBottom: 5,
    },
    mediaSubtitle: {
        fontSize: 16,
        color: colors.primaryTextColor,
        marginBottom: 5,
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
    quoteContainer: {
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