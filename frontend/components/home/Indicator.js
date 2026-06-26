import React from "react";
import { Animated, Dimensions } from "react-native";

const { width } = Dimensions.get("screen");

const Indicator = ({ measures, scrollX, data }) => {
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

export default Indicator;
