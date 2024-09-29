import React, {useState} from "react";
import {View, TextInput, Text, TouchableOpacity} from "react-native";
import {newMemoStyles} from "../styles/newMemoStyles";
import colors from "../styles/colors";
import {memoDetailStyles} from "../styles/memoDetailStyles";
import {editMemoStyles} from "../styles/editMemoStyles";

const EditMemo = ({route}) => {
    const {quote} = route.params;
    const [newQuote, setNewQuote] = useState(quote);

    return (
        <View style={editMemoStyles.container}>
            <View style={memoDetailStyles.quoteContainer}>
                <Text style={[memoDetailStyles.quote, {fontSize: 24}]}>{newQuote}</Text>
            </View>
            <TextInput
                style={newMemoStyles.input}
                value={newQuote}
                placeholderTextColor={colors.tertiaryColor}
                onChangeText={setNewQuote}
                placeholder={newQuote}
                maxLength={280}
            />
            <TouchableOpacity style={editMemoStyles.button}>
                <Text style={newMemoStyles.buttonText}>Save memo</Text>
            </TouchableOpacity>
        </View>
    );
};

export default EditMemo;