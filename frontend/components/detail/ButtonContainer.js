import {TouchableOpacity, View} from "react-native";
import {memoDetailStyles} from "../../styles/memoDetailStyles";
import Icon from "react-native-vector-icons/MaterialIcons";
import colors from "../../styles/colors";
import React, {useState} from "react";

const ButtonContainer = ({onToggleEditing, newQuote, memoId}) => {
    const [isVisible, setIsVisible] = useState(true);
    const [isEditable, setIsEditable] = useState(false);

    const handleToggleEditing = () => {
        setIsEditable(!isEditable);
        onToggleEditing(!isEditable);
        if (!isEditable) {
            // Save memo logic here
        }
    };

    const toggleVisibility = (isVisible, setIsVisible) => {
        setIsVisible(!isVisible);
        // Additional visibility logic here
    };

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
            <TouchableOpacity>
                <Icon name="delete-outline" size={30} color={colors.tertiaryColor}/>
            </TouchableOpacity>
        </View>
    );
};

export default ButtonContainer;