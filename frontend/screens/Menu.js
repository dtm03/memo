import React, { useState, useEffect } from "react";
import { View, Dimensions, Animated, Keyboard } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import Inspiration from "./Inspiration";
import Collection from "./Collection";
import SearchBar from "../components/SearchBar";
import Tabs from "../components/home/Tabs";
import colors from "../styles/colors";

const { width } = Dimensions.get("screen");

export default function Menu() {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const ref = React.useRef();
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [keyboardHeight, setKeyboardHeight] = useState(0);

  useEffect(() => {
    const keyboardWillShow = (event) => {
      setKeyboardHeight(event.endCoordinates.height);
    };

    const keyboardWillHide = () => {
      setKeyboardHeight(0);
    };

    const showSubscription = Keyboard.addListener(
      "keyboardWillShow",
      keyboardWillShow,
    );
    const hideSubscription = Keyboard.addListener(
      "keyboardWillHide",
      keyboardWillHide,
    );

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  const placeholders = ["Search all memos", "Search your collection"];
  const currentPlaceholder = placeholders[activeTabIndex];

  const tabs = {
    Inspo: <Inspiration searchQuery={searchQuery} />,
    Collection: <Collection searchQuery={searchQuery} />,
  };

  const data = Object.keys(tabs).map((i) => ({
    key: i,
    title: i,
    view: tabs[i],
    ref: React.createRef(),
  }));

  const onMomentumScrollEnd = () => {
    Keyboard.dismiss();
  };

  const onItemPress = React.useCallback((itemIndex) => {
    Keyboard.dismiss();
    setActiveTabIndex(itemIndex);
    ref?.current?.scrollToOffset({
      offset: itemIndex * width,
    });
  }, []);

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
    {
      useNativeDriver: false,
      listener: (event) => {
        const offsetX = event.nativeEvent.contentOffset.x;
        const tabIndex = Math.round(offsetX / width);
        setActiveTabIndex(tabIndex);
      },
    },
  );

  const handleAddPress = () => {
    navigation.navigate("NewMemo");
  };
  return (
    <View style={{ flex: 1, backgroundColor: colors.primaryColor }}>
      <SafeAreaView
        edges={["top"]}
        style={{
          flex: 1,
          backgroundColor: colors.primaryColor,
        }}
      >
        <View style={{ flex: 1, paddingTop: 15 }}>
          <Animated.FlatList
            ref={ref}
            data={data}
            keyExtractor={(item) => item.key}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            onScroll={handleScroll}
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
            renderItem={({ item }) => (
              <View style={{ width, flex: 1 }}>{item.view}</View>
            )}
          />
          <Tabs scrollX={scrollX} data={data} onItemPress={onItemPress} />
        </View>
      </SafeAreaView>
      <View
        style={{
          paddingBottom: 8,
          backgroundColor: colors.primaryColor,
          marginBottom: keyboardHeight,
        }}
      >
        <SearchBar
          placeholder={currentPlaceholder}
          searchQuery={searchQuery}
          onChangeText={setSearchQuery}
          onAddPress={handleAddPress}
        />
      </View>
    </View>
  );
}
