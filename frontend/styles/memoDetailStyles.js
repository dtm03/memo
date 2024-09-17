import { StyleSheet, Dimensions } from "react-native";
import colors from "./colors";

const { width, height } = Dimensions.get("screen");

export const memoDetailStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    quoteAuthorContainer: {
        marginBottom: 20,
    },
    quote: {
        fontSize: 18,
        fontStyle: "italic",
        textAlign: "center",
        marginBottom: 10,
    },
    author: {
        fontSize: 16,
        textAlign: "center",
    },
    titleSubtitleCategoryContainer: {
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 20,
        textAlign: "center",
        marginBottom: 10,
    },
    category: {
        fontSize: 18,
        textAlign: "center",
    },
    mediaCover: {
        width: width,
        height: 280,  // Adjust height to ensure the full cover is visible
        alignSelf: "center",
        marginTop: 20,
        backgroundColor: colors.backgroundColor,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 20,
    },
    button: {
        padding: 10,
    },
    content: {
        fontSize: 16,
        textAlign: "center",
        marginBottom: 10,
    },
    mediaTitle: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 5,
    },
    mediaSubtitle: {
        fontSize: 18,
        textAlign: "center",
        marginBottom: 5,
    },
    mediaGenre: {
        fontSize: 16,
        textAlign: "center",
        marginBottom: 10,
    },
});