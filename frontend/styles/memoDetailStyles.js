import { StyleSheet } from "react-native";
import colors from "./colors";

export const memoDetailStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: "center",
        backgroundColor: colors.primaryColor,
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
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 20,
    },
    quote: {
        textAlign: "center",
        color: colors.primaryTextColor,
        fontFamily: "LibreBaskerville_700Bold",
        lineHeight: 30,
    },
    authors: {
        fontSize: 16,
        textAlign: "center",
        color: colors.primaryTextColor,
    },
});