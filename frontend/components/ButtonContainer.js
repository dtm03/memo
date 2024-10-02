import { TouchableOpacity, View } from "react-native";
import { memoDetailStyles } from "../styles/memoDetailStyles";
import { toggleEditing, toggleVisibility } from "../utils/helpers";
import Icon from "react-native-vector-icons/MaterialIcons";
import colors from "../styles/colors";
import React, { useState } from "react";

const ButtonContainer = ({ onToggleEditing }) => {
    const [isVisible, setIsVisible] = useState(true);
    const [isEditable, setIsEditable] = useState(false);

    const handleToggleEditing = () => {
        toggleEditing(isEditable, setIsEditable);
        onToggleEditing(!isEditable);
    };

    return (
        <View style={memoDetailStyles.buttonContainer}>
            <TouchableOpacity onPress={() => toggleVisibility(isVisible, setIsVisible)}>
                <Icon name={isVisible ? "visibility-off" : "visibility"} size={30} color={colors.tertiaryColor} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Icon name="share" size={30} color={colors.tertiaryColor} />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleToggleEditing}>
                <Icon name={isEditable ? "save" : "mode-edit"} size={30} color={colors.tertiaryColor} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Icon name="delete-outline" size={30} color={colors.tertiaryColor} />
            </TouchableOpacity>
        </View>
    );
};

export default ButtonContainer;