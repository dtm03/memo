import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import ListContainer from "../components/ListContainer";
import MemoCard from "../components/MemoCard";

const { width, height } = Dimensions.get("screen");

const data = [
  { id: 1, title: "Memo 1", content: "This is the first memo" },
  { id: 2, title: "Memo 2", content: "This is the second memo" },
  // Add more memos as needed
];

const Collection = () => {
  return (
      <View style={styles.container}>
        <ListContainer data={data} renderItem={({ item }) => <MemoCard memo={item} />} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
    height,
    width,
  },
});

export default Collection;
