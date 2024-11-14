import {TouchableOpacity, View} from "react-native";
import {memoDetailStyles} from "../../styles/memoDetailStyles";
import Icon from "react-native-vector-icons/MaterialIcons";
import colors from "../../styles/colors";
import React, {useState} from "react";
import {serverURL} from "../../constants";
import axios from "axios";
import {useNavigation} from "@react-navigation/native";

const ButtonContainer = ({isEditable, setIsEditable, isMemoVisible, newQuote, memoId}) => {
    const navigation = useNavigation();
    const [isVisible, setIsVisible] = useState(isMemoVisible);

    const handleToggleEditing = async () => {
        setIsEditable(!isEditable);
        if (isEditable) {
            try {
                await axios.put(`${serverURL}memo/${memoId}`, {quote: newQuote});
            } catch (error) {
                console.error("Error updating memo:", error);
            }
        }
    };

    const toggleVisibility = async () => {
        const newVisibility = !isVisible;
        setIsVisible(newVisibility);
        try {
            await axios.put(`${serverURL}memo/${memoId}/${newVisibility}`);
            console.log("Visibility updated");
        } catch (error) {
            console.error("Error updating memo:", error);
        }
    };

    const handleDelete = async () => {
        try {
            await axios.delete(`${serverURL}memo/${memoId}`);
            navigation.goBack();
        } catch (error) {
            console.error("Error deleting memo:", error);
        }
    }

    return (
        <View style={memoDetailStyles.buttonContainer}>
            <TouchableOpacity onPress={() => toggleVisibility(isVisible, setIsVisible)}>
                <Icon name={isVisible ? "visibility-off" : "visibility"} size={30} color={colors.tertiaryColor}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Icon name="share" size={30} color={colors.tertiaryColor}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleToggleEditing}>
                <Icon name={isEditable ? "save" : "mode-edit"} size={30} color={colors.tertiaryColor}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleDelete}>
                <Icon name="delete-outline" size={30} color={colors.tertiaryColor}/>
            </TouchableOpacity>
        </View>
    );
};

export default ButtonContainer;