import React, {useState} from "react";
import {View, TextInput, Text, TouchableOpacity} from "react-native";
import {newMemoStyles} from "../styles/newMemoStyles";
import Icon from "react-native-vector-icons/MaterialIcons";
import colors from "../styles/colors";
import {commonStyles} from "../styles/commonStyles";
import SwitchSelector from "../components/SwitchSelector";

const NewMemo = ({navigation}) => {
    const [quote, setQuote] = useState("");
    const [mediaId, setMediaId] = useState("");
    const [creatorIds, setCreatorIds] = useState("");
    const [isVisible, setIsVisible] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const options = [
        {label: <Icon name="menu-book" size={24} color={colors.tertiaryColor}/>, value: "Book"},
        {label: <Icon name="movie" size={24} color={colors.tertiaryColor}/>, value: "Movie"},
        {label: <Icon name="library-music" size={24} color={colors.tertiaryColor}/>, value: "Song"},
        {label: <Icon name="tv" size={24} color={colors.tertiaryColor}/>, value: "Series"},
        {label: <Icon name="insert-drive-file" size={24} color={colors.tertiaryColor}/>, value: "Other"}
    ];

    return (
        <View style={commonStyles.container}>
            <SwitchSelector
                options={options}
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
            <TextInput
                style={newMemoStyles.input}
                value={mediaId}
                placeholderTextColor={colors.tertiaryColor}
                onChangeText={setMediaId}
                placeholder="Enter it's source"
                maxLength={50}
            />
            {selectedCategory === "Other" && (
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
                <TouchableOpacity style={newMemoStyles.button}>
                    <Text style={newMemoStyles.buttonText}>Add memo</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default NewMemo;