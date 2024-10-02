import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import { newMemoStyles } from "../styles/newMemoStyles";
import colors from "../styles/colors";
import { memoDetailStyles } from "../styles/memoDetailStyles";
import { editMemoStyles } from "./editMemoStyles";

const EditMemo = ({ route }) => {
    const { quote } = route.params;
    const [newQuote, setNewQuote] = useState(quote);

    return (
        <View style={editMemoStyles.container}>
            <TextInput
                style={[editMemoStyles.quoteInput, memoDetailStyles.quote, { fontSize: newQuote.length > 210 ? 16 : 24 }]}
                value={newQuote}
                multiline={true}
                placeholderTextColor={colors.primaryTextColor}
                onChangeText={setNewQuote}
                maxLength={280}
            />
            <TouchableOpacity style={editMemoStyles.button} onPress={() => console.log(newQuote)}>
                <Text style={newMemoStyles.buttonText}>Save memo</Text>
            </TouchableOpacity>
        </View>
    );
};

export default EditMemo;