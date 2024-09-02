import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const MemoDetail = ({ memo, onBack }) => {
  return (
    <View style={styles.container}>
      <Button title="Back" onPress={onBack} />
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
    marginVertical: 10,
  },
  content: {
    fontSize: 16,
    marginTop: 10,
  },
});

export default MemoDetail;