import {StyleSheet, Dimensions} from "react-native";

const {width, height} = Dimensions.get("screen");

export const commonStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        height,
        width,
    },
    label: {
        fontSize: 18,
        marginVertical: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: "gray",
        padding: 10,
        borderRadius: 5,
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
    },
    listContainer: {
        flex: 1,
        padding: 10,
        paddingTop: 200,
    },
});

export const inspirationStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "blue",
        height,
        width,
    },
});

export const collectionStyles = StyleSheet.create({
    collectionContainer: {
        flex: 1,
        backgroundColor: "green",
        height,
        width,
    },
});

export const memoDetailStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
    },
    content: {
        fontSize: 16,
        marginTop: 10,
    },
    mediaTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 20,
    },
    mediaSubtitle: {
        fontSize: 18,
        marginTop: 10,
    },
    mediaGenre: {
        fontSize: 16,
        marginTop: 10,
    },
    mediaCover: {
        width: "100%",
        height: 200,
        borderRadius: 10,
        marginTop: 10,
    },
});

export const memoCardStyles = StyleSheet.create({
    card: {
        backgroundColor: "white",
        padding: 15,
        marginVertical: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
    },
    content: {
        fontSize: 14,
        marginTop: 5,
    },
    starButton: {
        marginTop: 10,
        alignSelf: "flex-start",
    },
    button: {
        backgroundColor: "blue",
        padding: 10,
        borderRadius: 5,
    },
});
