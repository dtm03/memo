import React from "react";
import {View, Text, TouchableOpacity, Image, FlatList} from "react-native";
import {resultListStyles} from "../../styles/resultListStyles";

const ResultList = ({results, onSelectMedia}) => {
    return (
        <FlatList
            style={{marginVertical: 5}}
            data={results}
            keyExtractor={(item) => item.trackId ? item.trackId.toString() : item.collectionId.toString()}
            renderItem={({item, index}) => (
                <TouchableOpacity onPress={() => onSelectMedia(item)}>
                    <View style={[
                        resultListStyles.item,
                        index === results.length - 1 ? {borderBottomWidth: 0} : {borderBottomWidth: 1},
                    ]}>
                        {item.artworkUrl100 && (
                            <Image
                                source={{uri: item.artworkUrl100.replace('100x100', '600x600')}}
                                style={resultListStyles.thumbnail}
                            />
                        )}
                        <View>
                            <Text style={resultListStyles.title}>
                                {item.trackName || item.collectionName}
                            </Text>
                            <Text style={resultListStyles.artist}>
                                {item.artistName || item.artistName}
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
            )}
        />
    );
};

export default ResultList;