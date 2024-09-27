import React, {useState} from "react";
import {View, Text, TextInput, Button, Switch, TouchableOpacity} from "react-native";
import {newMemoStyles} from "../styles/newMemoStyles";
import Icon from "react-native-vector-icons/MaterialIcons";
import colors from "../styles/colors";
import {commonStyles} from "../styles/commonStyles";

const NewMemo = ({navigation}) => {
    const [quote, setQuote] = useState("");
    const [mediaId, setMediaId] = useState("");
    const [creatorIds, setCreatorIds] = useState("");
    const [isPublic, setIsPublic] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <View style={commonStyles.container}>
            <TextInput
                style={newMemoStyles.input}
                value={quote}
                onChangeText={setQuote}
                placeholder="Enter your new quote"
                maxLength={100}
            />
            <TextInput
                style={newMemoStyles.input}
                value={mediaId}
                onChangeText={setMediaId}
                placeholder="Enter it's source"
                maxLength={50}
            />
            <TextInput
                style={newMemoStyles.input}
                value={creatorIds}
                onChangeText={setCreatorIds}
                placeholder="Enter the creators"
                maxLength={50}
            />
            <View>
                <TouchableOpacity onPress={toggleVisibility}>
                    <Icon name={isVisible ? "visibility" : "visibility-off"} size={30} color={colors.tertiaryColor}/>
                </TouchableOpacity>
            </View>
            <View style={newMemoStyles.buttonStyle}>
                <Button color={colors.secondaryColor} title="Add Memo"/>
            </View>
        </View>
    );
};

export default NewMemo;