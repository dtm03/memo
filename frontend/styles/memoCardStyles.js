import {StyleSheet} from "react-native";
import colors from "./colors";
import { SCREEN_WIDTH } from "../utils/constants";

export const memoCardStyles = StyleSheet.create({
    card: {
        backgroundColor: "white",
        paddingBottom: 10,
        marginBottom: 20,
        borderRadius: 15,
        width: SCREEN_WIDTH - 30,
        height: SCREEN_WIDTH,
    },
    quoteContainer: {
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
        color: colors.primaryTextColor,
    },
    authorContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 15,
    },
    author: {
        fontSize: 14,
        flex: 1,
        color: colors.primaryTextColor,
        paddingVertical: 10,
    },
    divider: {
        height: 1,
        backgroundColor: colors.tertiaryColor,
        marginBottom: 10,
    },
});
