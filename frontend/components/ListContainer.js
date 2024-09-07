import React from "react";
import { FlatList, View } from "react-native";
import { commonStyles} from "../styles/styles";

const ListContainer = ({ data, renderItem }) => {
  return (
    <View style={commonStyles.listContainer}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default ListContainer;