import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { commonStyles } from "../styles/styles";

const NewMemo = ({ navigation }) => {
  const [quote, setQuote] = useState("");
  const [mediaId, setMediaId] = useState("");
  const [creatorIds, setCreatorIds] = useState("");

  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.label}>Quote:</Text>
      <TextInput
        style={commonStyles.input}
        value={quote}
        onChangeText={setQuote}
        placeholder="Enter quote"
      />
      <Text style={commonStyles.label}>Media ID:</Text>
      <TextInput
        style={commonStyles.input}
        value={mediaId}
        onChangeText={setMediaId}
        placeholder="Enter media ID"
        keyboardType="numeric"
      />
      <Text style={commonStyles.label}>Creator IDs (comma separated):</Text>
      <TextInput
        style={commonStyles.input}
        value={creatorIds}
        onChangeText={setCreatorIds}
        placeholder="Enter creator IDs"
      />
      <Button title="Add Memo" onPress={() => {}} />
    </View>
  );
};

export default NewMemo;