import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const BookCard = ({ book }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: book.image }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{book.title}</Text>
        <Text style={styles.author}>{book.author}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    flexDirection: "row",
  },
  image: {
    width: 50,
    height: 75,
    borderRadius: 5,
  },
  textContainer: {
    marginLeft: 15,
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  author: {
    fontSize: 14,
    marginTop: 5,
  },
});

export default BookCard;