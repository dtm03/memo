import React from "react";
import { FlatList, View } from "react-native";
import { commonStyles } from "../styles/commonStyles";

const ListContainer = ({ data, renderItem }) => {
  return (
    <View style={commonStyles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default ListContainer;