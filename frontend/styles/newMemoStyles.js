import {Dimensions, StyleSheet} from "react-native";

const {width, height} = Dimensions.get("screen");

export const newMemoStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingTop: 50,
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
    toggleContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 10,
    },
});
