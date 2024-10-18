import React, {useState, useEffect} from 'react';
import {View, TextInput, FlatList, Text, Image, TouchableOpacity} from 'react-native';
import {newMemoStyles} from "../styles/newMemoStyles";
import colors from "../styles/colors";
import {searchMedia} from '../api/utils';
import Icon from "react-native-vector-icons/MaterialIcons";

export default function MediaSearchBar({onMediaSelect, category}) {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [selectedMedia, setSelectedMedia] = useState(null);

    const handleSearchMedia = async (text, category) => {
        setQuery(text);
        const results = await searchMedia(text, category);
        setResults(results);
    };

    const selectMedia = (item) => {
        setSelectedMedia(item);
        onMediaSelect(item.trackId || item.collectionId);
    };

    const deleteMediaSelection = () => {
        setSelectedMedia(null);
        setQuery('');
        setResults([]);
    }

    useEffect(() => {
        if (query.length > 2) {
            handleSearchMedia(query, category);
        }
    }, [category]);

    return (
        <View>
            {selectedMedia ? (
                <View style={newMemoStyles.selectedMediaContainer}>
                    <View style={{flexDirection: "row", alignItems: "center"}}>
                        {selectedMedia.artworkUrl100 && (
                            <Image
                                source={{uri: selectedMedia.artworkUrl100.replace('100x100', '600x600')}}
                                style={newMemoStyles.selectedThumbnail}
                            />
                        )}
                        <Text
                            style={newMemoStyles.selectedTitle}>{selectedMedia.trackName || selectedMedia.collectionName}
                        </Text>
                    </View>
                    <TouchableOpacity onPress={() => deleteMediaSelection()}>
                        <Icon name="delete-outline" size={35} color={colors.tertiaryColor}/>
                    </TouchableOpacity>
                </View>
            ) : (
                <>
                    <FlatList
                        style={newMemoStyles.resultList}
                        data={results}
                        keyExtractor={(item) => item.trackId ? item.trackId.toString() : item.collectionId.toString()}
                        renderItem={({item, index}) => (
                            <TouchableOpacity onPress={() => selectMedia(item)}>
                                <View style={[
                                    newMemoStyles.resultItem,
                                    index === results.length - 1 && {borderBottomWidth: 0}
                                ]}>
                                    {item.artworkUrl100 && (
                                        <Image
                                            source={{uri: item.artworkUrl100.replace('100x100', '600x600')}}
                                            style={newMemoStyles.thumbnail}
                                        />
                                    )}
                                    <Text style={newMemoStyles.title}>{item.trackName || item.collectionName}</Text>
                                </View>
                            </TouchableOpacity>
                        )}
                    />
                    <TextInput
                        style={newMemoStyles.input}
                        placeholder="Enter it's source"
                        placeholderTextColor={colors.tertiaryColor}
                        value={query}
                        onChangeText={(text) => handleSearchMedia(text, category)}
                        maxLength={50}
                    />
                </>
            )}
        </View>
    );
}