import { StatusBar } from "expo-status-bar";
import React from "react";
import {
    View,
    Dimensions,
    Animated,
} from "react-native";
import Inspiration from "./Inspiration";
import Collection from "./Collection";
import Library from "./Library";
import Tabs from "../components/Tabs";

const { width } = Dimensions.get("screen");

const tabs = {
    inspo: <Inspiration />,
    collection: <Collection />,
    library: <Library />,
};

const data = Object.keys(tabs).map((i) => ({
    key: i,
    title: i,
    view: tabs[i],
    ref: React.createRef(),
}));

export default function Main() {
    const scrollX = React.useRef(new Animated.Value(0)).current;
    const ref = React.useRef();
    const onItemPress = React.useCallback((itemIndex) => {
        ref?.current?.scrollToOffset({
            offset: itemIndex * width,
        });
    }, []);
    return (
        <View style={{ flex: 1 }}>
            <StatusBar hidden />
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
