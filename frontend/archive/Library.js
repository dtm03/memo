import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import ListContainer from "../components/ListContainer";
import BookCard from "./BookCard";

const { width, height } = Dimensions.get("screen");

const data = [];

const Library = () => {
  return (
    <View style={styles.container}>
      <ListContainer
        data={data}
        renderItem={({ item }) => <BookCard book={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    height,
    width,
  },
});

export default Library;
