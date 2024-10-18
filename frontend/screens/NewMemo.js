import React, {useState} from "react";
import {View, TextInput, Text, TouchableOpacity} from "react-native";
import {newMemoStyles} from "../styles/newMemoStyles";
import Icon from "react-native-vector-icons/MaterialIcons";
import colors from "../styles/colors";
import SwitchSelector from "../components/SwitchSelector";
import {categories, Category} from "../utils/constants";
import MediaSearchBar from "../components/MediaSearchBar";

// Check styling names, refactor, positioning of result list,
// show warning when category does not match media type, add frontend part of adding a new memo
// Fix keyboard and tapping when keyboard is open

const NewMemo = ({navigation, userId}) => {
    const [quote, setQuote] = useState("");
    const [mediaId, setMediaId] = useState("");
    const [creatorIds, setCreatorIds] = useState("");
    const [isVisible, setIsVisible] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState(null);

    function addQuote() {
        console.log("Adding quote...");
    }

    return (
        <View style={newMemoStyles.container}>
            <SwitchSelector
                options={categories}
                onSelect={(value) => setSelectedCategory(value)}
            />
            <TextInput
                style={newMemoStyles.quoteInput}
                value={quote}
                placeholderTextColor={colors.tertiaryColor}
                onChangeText={setQuote}
                placeholder="Enter your new quote"
                maxLength={280}
            />
            <MediaSearchBar onMediaSelect={() => console.log("Media selected")} category={selectedCategory}/>
            {selectedCategory === Category.OTHER && (
                <TextInput
                    style={newMemoStyles.input}
                    value={creatorIds}
                    placeholderTextColor={colors.tertiaryColor}
                    onChangeText={setCreatorIds}
                    placeholder="Enter the creators"
                    maxLength={50}
                />)}
            <View style={newMemoStyles.buttonContainer}>
                <TouchableOpacity style={{paddingHorizontal: 20}} onPress={() => setIsVisible(!isVisible)}>
                    <Icon name={isVisible ? "visibility" : "visibility-off"} size={30}
                          color={colors.secondaryColor}/>
                </TouchableOpacity>
                <TouchableOpacity style={newMemoStyles.button} onPress={() => addQuote()}>
                    <Text style={newMemoStyles.buttonText}>Add memo</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default NewMemo;