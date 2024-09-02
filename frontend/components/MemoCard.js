import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MemoCard = ({ memo }) => {

  return (
      <View style={styles.card}>
        <Text style={styles.title}>{memo.title}</Text>
        <Text style={styles.content}>{memo.content}</Text>
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
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  content: {
    fontSize: 14,
    marginTop: 5,
  },
});

export default MemoCard;