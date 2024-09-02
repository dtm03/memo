import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";

const Memo = () => {
  const route = useRoute();
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
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
  },
});

export default Memo;