import React, { useState } from "react";
import { View, Text, TextInput, Button, Switch } from "react-native";
import { newMemoStyles } from "../styles/newMemoStyles";

const AddMemo = ({ navigation }) => {
  const [quote, setQuote] = useState("");
  const [mediaId, setMediaId] = useState("");
  const [creatorIds, setCreatorIds] = useState("");
  const [isPublic, setIsPublic] = useState(false);

  return (
    <View style={newMemoStyles.container}>
      <Text style={newMemoStyles.label}>Quote:</Text>
      <TextInput
        style={newMemoStyles.input}
        value={quote}
        onChangeText={setQuote}
        placeholder="Enter new memo"
        maxLength={100}
      />
      <Text style={newMemoStyles.label}>Source:</Text>
      <TextInput
        style={newMemoStyles.input}
        value={mediaId}
        onChangeText={setMediaId}
        placeholder="Enter source"
        maxLength={50}
      />
      <Text style={newMemoStyles.label}>Creator's:</Text>
      <TextInput
        style={newMemoStyles.input}
        value={creatorIds}
        onChangeText={setCreatorIds}
        placeholder="Enter the creators"
        maxLength={50}
      />
      <View style={newMemoStyles.toggleContainer}>
        <Text style={newMemoStyles.label}>Public:</Text>
        <Switch
          value={isPublic}
          onValueChange={setIsPublic}
        />
      </View>
      <Button title="Add Memo" onPress={() => {}} />
    </View>
  );
};

export default AddMemo;