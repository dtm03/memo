import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import ListContainer from "../components/ListContainer";
import BookCard from "./BookCard";

const { width, height } = Dimensions.get("screen");

const data = [
    { id: 1, title: "BookDetail 1", author: "Author 1", image: "https://m.media-amazon.com/images/I/71Vh4lfd5FL._SL1500_.jpg" },
    { id: 2, title: "BookDetail 2", author: "Author 2", image: "https://m.media-amazon.com/images/I/71N9Dy2G5+L._SL1500_.jpg" },
    // Add more books as needed
];

const Library = () => {
    return (
        <View style={styles.container}>
        <ListContainer data={data} renderItem={({ item }) => <BookCard book={item} />} />
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
