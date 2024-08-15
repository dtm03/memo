import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Text,
  View,
  Dimensions,
  Animated,
  TouchableOpacity,
} from "react-native";
import Inspiration from "./inspiration";
import Collection from "./collections";

const { width, height } = Dimensions.get("screen");

const tabs = {
  inspiration: <Inspiration />,
  collection: <Collection />,
  library: <View style={{ backgroundColor: "green", height, width }} />,
};

const data = Object.keys(tabs).map((i) => ({
  key: i,
  title: i,
  view: tabs[i],
  ref: React.createRef(),
}));

const Tab = React.forwardRef(({ item, onItemPress }, ref) => {
  return (
    <TouchableOpacity onPress={onItemPress}>
      <View ref={ref}>
        <Text
          style={{
            color: "white",
            fontSize: 48 / data.length,
            fontWeight: "800",
            textTransform: "uppercase",
          }}
        >
          {item.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
});

const Indicator = ({ measures, scrollX }) => {
  const inputRange = data.map((_, i) => i * width);
  const indicatorWidth = scrollX.interpolate({
    inputRange,
    outputRange: measures.map((measure) => measure.width),
  });
  const translateX = scrollX.interpolate({
    inputRange,
    outputRange: measures.map((measure) => measure.x),
  });
  return (
    <Animated.View
      style={{
        position: "absolute",
        height: 4,
        width: indicatorWidth,
        transform: [{ translateX }],
        backgroundColor: "white",
        bottom: -10,
      }}
    />
  );
};

const Tabs = ({ data, scrollX, onItemPress }) => {
  const [measures, setMeasures] = React.useState([]);
  const containerRef = React.useRef();
  React.useEffect(() => {
    let m = [];
    if (containerRef.current) {
      data.forEach((item) => {
        item.ref.current.measureLayout(
          containerRef.current,
          (x, y, width, height) => {
            m.push({
              x,
              y,
              width,
              height,
            });
            if (m.length === data.length) {
              setMeasures(m);
            }
          }
        );
      });
    }
  }, []);
  return (
    <View style={{ position: "absolute", top: 100, width }} ref={containerRef}>
      <View
        style={{
          justifyContent: "space-evenly",
          flex: 1,
          flexDirection: "row",
        }}
      >
        {data.map((item, index) => {
          return (
            <Tab
              key={item.key}
              item={item}
              ref={item.ref}
              onItemPress={() => onItemPress(index)}
            />
          );
        })}
      </View>
      {measures.length > 0 && (
        <Indicator measures={measures} scrollX={scrollX} />
      )}
    </View>
  );
};

export default function App() {
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
