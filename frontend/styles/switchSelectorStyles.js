import {Dimensions, StyleSheet} from "react-native";

const {width, height} = Dimensions.get("screen");

export const switchSelectorStyles = StyleSheet.create({
    switchContainer: {
        flexDirection: 'row',
        width: width - 30,
        backgroundColor: 'white',
        borderRadius: 23,
        height: 46,
        marginBottom: 20,
        padding: 2,
    },
    option: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 23,
        height: 42,
    },
});
