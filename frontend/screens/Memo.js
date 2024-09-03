import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Memo = ({ route }) => {
  const { memo } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{memo.title}</Text>
      <Text style={styles.content}>{memo.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  content: {
    fontSize: 16,
    marginTop: 10,
  },
});

export default Memo;