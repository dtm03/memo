import {StyleSheet} from "react-native";
import colors from "./colors";
import {SCREEN_HEIGHT, SCREEN_WIDTH} from "../utils/constants";

export const newMemoStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        marginTop: 50,
        paddingBottom: 85,
        height: SCREEN_HEIGHT,
        width: SCREEN_WIDTH,
        backgroundColor: colors.primaryColor,
    },
    quoteInput: {
        textAlignVertical: "top",
        padding: 23,
        borderRadius: 15,
        marginBottom: 20,
        backgroundColor: colors.secondaryColor,
        width: SCREEN_WIDTH - 30,
        height: 414,
        fontSize: 16,
    },
    input: {
        paddingHorizontal: 23,
        borderRadius: 23,
        marginBottom: 20,
        marginHorizontal: 15,
        backgroundColor: colors.secondaryColor,
        width: SCREEN_WIDTH - 30,
        height: 46,
        fontSize: 16,
    },
    switchSelector: {
        width: SCREEN_WIDTH - 30,
        marginBottom: 20,
        height: 46,
        backgroundColor: "green",
    },
    button: {
        flex: 1,
        backgroundColor: colors.secondaryColor,
        borderRadius: 23,
        height: 46,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        color: colors.primaryColor,
        fontSize: 16,
        lineHeight: 46,
        fontWeight: "bold",
    },
    buttonContainer: {
        flexDirection: "row",
        width: SCREEN_WIDTH - 30,
        alignItems: "center",
    },
});
