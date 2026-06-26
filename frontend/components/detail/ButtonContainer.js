import { TouchableOpacity, View } from "react-native";
import { memoDetailStyles } from "../../styles/memoDetailStyles";
import colors from "../../styles/colors";
import React, { useState } from "react";
import { serverURL } from "../../constants";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-toast-message";
import VisibleIcon from "../../assets/icons/visibility.svg";
import InvisibleIcon from "../../assets/icons/visibility-off.svg";
import EditIcon from "../../assets/icons/edit.svg";
import DeleteIcon from "../../assets/icons/delete.svg";

const ButtonContainer = ({
  isEditable,
  setIsEditable,
  isMemoVisible,
  newQuote,
  memoId,
}) => {
  const navigation = useNavigation();
  const [isVisible, setIsVisible] = useState(isMemoVisible);
  const insets = useSafeAreaInsets();

  const handleToggleEditing = async () => {
    setIsEditable(!isEditable);
    if (isEditable) {
      try {
        await axios.put(`${serverURL}memo/${memoId}`, { quote: newQuote });
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
    } catch (error) {
      console.error("Error updating memo:", error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`${serverURL}memo/${memoId}`);
      navigation.goBack();
      Toast.show({
        type: "success",
        text1: "Memo deleted successfully",
        topOffset: insets.top + 10,
      });
    } catch (error) {
      console.error("Error deleting memo:", error);
    }
  };

  return (
    <View style={memoDetailStyles.buttonContainer}>
      <TouchableOpacity
        onPress={() => toggleVisibility(isVisible, setIsVisible)}
      >
        {isVisible ? (
          <VisibleIcon size={30} color={colors.tertiaryColor} />
        ) : (
          <InvisibleIcon size={30} color={colors.tertiaryColor} />
        )}
      </TouchableOpacity>
      {/*<TouchableOpacity>*/}
      {/*    <Icon name="share" size={30} color={colors.tertiaryColor}/>*/}
      {/*</TouchableOpacity>*/}
      <TouchableOpacity onPress={handleToggleEditing}>
        <EditIcon size={30} color={colors.tertiaryColor} />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleDelete}>
        <DeleteIcon size={30} color={colors.tertiaryColor} />
      </TouchableOpacity>
    </View>
  );
};

export default ButtonContainer;
