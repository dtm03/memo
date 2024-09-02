import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

const Tab = React.forwardRef(({ item, onItemPress, data }, ref) => {
  return (
    <TouchableOpacity onPress={onItemPress}>
      <View ref={ref}>
        <Text
          style={{
            color: "white",
            fontSize: 48 / data.length,
            fontWeight: "800",
          }}
        >
          {item.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
});

export default Tab;