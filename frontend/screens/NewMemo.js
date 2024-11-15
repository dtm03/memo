import React, {useState, useContext} from "react";
import {View, TextInput, Text, TouchableOpacity} from "react-native";
import {newMemoStyles} from "../styles/newMemoStyles";
import Icon from "react-native-vector-icons/MaterialIcons";
import colors from "../styles/colors";
import SwitchSelector from "../components/new/SwitchSelector";
import {categories, Category, serverURL} from "../constants";
import {searchMedia} from "../api/utils";
import ResultList from "../components/new/ResultList";
import SelectedMedia from "../components/new/SelectedMedia";
import axios from "axios";
import {UserContext} from "../components/UserContext";
import Toast from 'react-native-toast-message';

const NewMemo = ({navigation}) => {
        const [quote, setQuote] = useState("");
        const [mediaId, setMediaId] = useState("");
        const [creatorIds, setCreatorIds] = useState("");
        const [isVisible, setIsVisible] = useState(true);
        const [isSearching, setIsSearching] = useState(false);
        const [selectedCategory, setSelectedCategory] = useState(Category.BOOK);
        const [query, setQuery] = useState('');
        const [results, setResults] = useState([]);
        const [selectedMedia, setSelectedMedia] = useState(null);
        const {userId} = useContext(UserContext);

        const handleSearchMedia = async (text, category) => {
            setQuery(text);
            if (text.length > 2 && category !== Category.OTHER) {
                setIsSearching(true);
                const results = await searchMedia(text, category);
                setResults(results);
            } else {
                setIsSearching(false);
                setResults([]);
            }
        };

        const selectMedia = (item) => {
            setSelectedMedia(item);
            setMediaId(item.trackId || item.collectionId);
            setIsSearching(false);
        };

        const deleteMediaSelection = () => {
            setSelectedMedia(null);
            setMediaId('');
            setIsSearching(false);
            setQuery('');
            setResults([]);
        };

        const reset = () => {
            deleteMediaSelection();
            setQuote('');
            if (selectedCategory === Category.OTHER) {
                setCreatorIds('');
            }
        }

        const addQuote = async () => {
            if (quote.length === 0) {
                Toast.show({
                    type: 'success',
                    text1: 'Please enter your new quote',
                    topOffset: 10,
                });
                return;
            }
            if (!selectedMedia && selectedCategory !== Category.OTHER) {
                Toast.show({
                    type: 'success',
                    text1: 'Please select a source',
                    topOffset: 10,
                });
                return;
            }

            const mediaName = selectedMedia ? selectedMedia.trackName || selectedMedia.collectionName : "";
            const artistName = selectedMedia ? selectedMedia.artistName : "";
            const searchQuery = encodeURIComponent(mediaName + " " + artistName);
            const amazonSearchLink = `https://www.amazon.com/s?k=${searchQuery}`;

            const creators = selectedCategory === Category.OTHER
                ? creatorIds.split(",").map(name => ({name: name.trim()}))
                : [{name: selectedMedia ? selectedMedia.artistName : ""}];

            const newMemo = {
                quote: quote,
                isVisible: isVisible,
                mediaId: mediaId,
                link: amazonSearchLink,
                creators: creators
            };

            try {
                const response = await axios.post(`${serverURL}memo/${userId}`, newMemo);
                Toast.show({
                    type: 'success',
                    text1: 'Memo added to your collection',
                    topOffset: 10,
                });
                reset();
            } catch (error) {
                console.error("Error adding memo:", error);
            }
        };

        return (
            <View style={newMemoStyles.container}>
                <SwitchSelector
                    options={categories}
                    onSelect={(value) => {
                        setSelectedCategory(value);
                        handleSearchMedia(query, value);
                    }}
                />
                <View style={newMemoStyles.quoteInputSearchContainer}>
                    {!isSearching ? (
                        <TextInput
                            style={newMemoStyles.quoteInput}
                            value={quote}
                            placeholderTextColor={colors.tertiaryColor}
                            onChangeText={setQuote}
                            placeholder="Enter your new quote"
                            maxLength={280}
                        />
                    ) : (
                        <ResultList results={results} onSelectMedia={selectMedia}/>
                    )}
                </View>
                {selectedMedia ? (
                    <SelectedMedia selectedMedia={selectedMedia} deleteMediaSelection={deleteMediaSelection}/>
                ) : (
                    <TextInput
                        style={newMemoStyles.input}
                        placeholder="Enter it's source"
                        placeholderTextColor={colors.tertiaryColor}
                        value={query}
                        onChangeText={(text) => handleSearchMedia(text, selectedCategory)}
                        maxLength={50}
                    />
                )}
                {selectedCategory === Category.OTHER && (
                    <TextInput
                        style={newMemoStyles.input}
                        value={creatorIds}
                        placeholderTextColor={colors.tertiaryColor}
                        onChangeText={setCreatorIds}
                        placeholder="Enter the creators"
                        maxLength={50}
                    />
                )}
                <View style={newMemoStyles.buttonContainer}>
                    <TouchableOpacity style={{paddingHorizontal: 20}} onPress={reset}>
                        <Icon name={"cached"} size={30} color={colors.secondaryColor}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{paddingRight: 20}} onPress={() => setIsVisible(!isVisible)}>
                        <Icon name={isVisible ? "visibility" : "visibility-off"} size={30} color={colors.secondaryColor}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={newMemoStyles.button} onPress={addQuote}>
                        <Text style={newMemoStyles.buttonText}>Add memo</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
;

export default NewMemo;