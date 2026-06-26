import React from "react";
import { View, Dimensions, Animated, Keyboard } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Inspiration from "./Inspiration";
import Collection from "./Collection";
import Tabs from "../components/home/Tabs";
import NewMemo from "./NewMemo";
import AddIcon from "../assets/icons/add.svg";
import colors from "../styles/colors";

const { width } = Dimensions.get("screen");

const tabs = {
  Inspo: <Inspiration />,
  Collection: <Collection />,
  plus: <NewMemo />,
};

const data = Object.keys(tabs).map((i) => ({
  key: i,
  title: i === "plus" ? <AddIcon size={20} color="white" /> : i,
  view: tabs[i],
  ref: React.createRef(),
}));

export default function Menu() {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const ref = React.useRef();

  const onMomentumScrollEnd = () => {
    Keyboard.dismiss();
  };

  const onItemPress = React.useCallback((itemIndex) => {
    Keyboard.dismiss();
    ref?.current?.scrollToOffset({
      offset: itemIndex * width,
    });
  }, []);
  return (
    <SafeAreaView
      edges={["top"]}
      style={{
        flex: 1,
        backgroundColor: colors.primaryColor,
      }}
    >
      <View style={{ paddingTop: 15 }}>
        <Animated.FlatList
          ref={ref}
          data={data}
          keyExtractor={(item) => item.key}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false },
          )}
          onScrollBeginDrag={Keyboard.dismiss}
          onMomentumScrollBegin={Keyboard.dismiss}
          onMomentumScrollEnd={onMomentumScrollEnd}
          keyboardDismissMode="on-drag"
          keyboardShouldPersistTaps="handled"
          bounces={false}
          scrollEventThrottle={16}
          decelerationRate="fast"
          snapToInterval={width}
          snapToAlignment="start"
          renderItem={({ item }) => {
            return item.view;
          }}
        />
        <Tabs scrollX={scrollX} data={data} onItemPress={onItemPress} />
      </View>
    </SafeAreaView>
  );
}
