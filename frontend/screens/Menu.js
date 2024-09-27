import { StatusBar } from "expo-status-bar";
import React from "react";
import {
    View,
    Dimensions,
    Animated,
} from "react-native";
import Inspiration from "./Inspiration";
import Collection from "./Collection";
import Tabs from "../components/home/Tabs";
import NewMemo from "./NewMemo";
import Icon from "react-native-vector-icons/FontAwesome";
import colors from "../styles/colors";

const { width } = Dimensions.get("screen");

const tabs = {
    Inspo: <Inspiration />,
    Collection: <Collection />,
    "plus": <NewMemo />,
};

const data = Object.keys(tabs).map((i) => ({
    key: i,
    title: i === "plus" ? <Icon name="plus" size={20} color="white" /> : i,
    view: tabs[i],
    ref: React.createRef(),
}));

export default function Menu() {
    const scrollX = React.useRef(new Animated.Value(0)).current;
    const ref = React.useRef();
    const onItemPress = React.useCallback((itemIndex) => {
        ref?.current?.scrollToOffset({
            offset: itemIndex * width,
        });
    }, []);
    return (
        <View style={{backgroundColor: colors.primaryColor}}>
            <StatusBar backgroundColor={colors.primaryColor} barStyle="light-content" />
            <Animated.FlatList
                ref={ref}
                data={data}
                keyExtractor={(item) => item.key}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    { useNativeDriver: false }
                )}
                bounces={false}
                renderItem={({ item }) => {
                    return item.view;
                }}
            />
            <Tabs scrollX={scrollX} data={data} onItemPress={onItemPress} />
        </View>
    );
}
