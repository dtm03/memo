import React from "react";
import { FlatList, View, StyleSheet } from "react-native";

const ListContainer = ({ data, renderItem }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
      paddingTop: 200,
  },
});

export default ListContainer;