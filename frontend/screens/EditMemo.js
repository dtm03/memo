import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { newMemoStyles } from "../styles/newMemoStyles";

const EditMemo = ({ route, navigation }) => {
    const { memo } = route.params;
    const [quote, setQuote] = useState(memo.quote);
    const [mediaId, setMediaId] = useState(memo.mediaId);
    const [creatorIds, setCreatorIds] = useState(memo.creatorIds.join(", "));

    const handleSave = () => {
        // Save the updated memo
        navigation.goBack();
    };

    return (
        <View style={newMemoStyles.container}>
            <Text style={newMemoStyles.label}>Quote:</Text>
            <TextInput
                style={newMemoStyles.input}
                value={quote}
                onChangeText={setQuote}
                placeholder="Enter quote"
                maxLength={100}
            />
            <Text style={newMemoStyles.label}>Media ID:</Text>
            <TextInput
                style={newMemoStyles.input}
                value={mediaId}
                onChangeText={setMediaId}
                placeholder="Enter media ID"
                maxLength={50}
            />
            <Text style={newMemoStyles.label}>Creator IDs (comma separated):</Text>
            <TextInput
                style={newMemoStyles.input}
                value={creatorIds}
                onChangeText={setCreatorIds}
                placeholder="Enter creator IDs"
                maxLength={50}
            />
            <Button title="Save" onPress={handleSave} />
        </View>
    );
};

export default EditMemo;