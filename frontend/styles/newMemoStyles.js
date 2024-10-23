import {StyleSheet} from "react-native";
import colors from "./colors";
import {SCREEN_HEIGHT, SCREEN_WIDTH} from "./constants";

export const newMemoStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        marginTop: 50,
        paddingHorizontal: 15,
        paddingBottom: 85,
        height: SCREEN_HEIGHT,
        width: SCREEN_WIDTH,
    },
    quoteInputSearchContainer: {
        height: 414,
        marginBottom: 20,
        width: SCREEN_WIDTH - 30,
        backgroundColor: colors.secondaryColor,
        borderRadius: 15
    },
    quoteInput: {
        flex: 1,
        textAlignVertical: "top",
        padding: 23,
        fontSize: 16,
    },
    input: {
        paddingHorizontal: 23,
        borderRadius: 23,
        marginBottom: 20,
        backgroundColor: colors.secondaryColor,
        width: SCREEN_WIDTH - 30,
        height: 46,
        fontSize: 16,
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
        alignItems: "center",
    },
});
