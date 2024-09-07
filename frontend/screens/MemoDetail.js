import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, Linking, Image} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import {memoDetailStyles} from "../styles/styles";

const MemoDetail = ({route}) => {
    const {memo, source} = route.params;

    return (
        <View style={memoDetailStyles.container}>
            <Text style={memoDetailStyles.title}>{memo.quote}</Text>
            {memo.creators && memo.creators.map((creator) => (
                <Text key={creator.id} style={memoDetailStyles.content}>
                    {creator.name + " " + creator.lastName}
                </Text>
            ))}
            {memo.media && (
                <>
                    <Text style={memoDetailStyles.mediaTitle}>{memo.media.title}</Text>
                    <Text style={memoDetailStyles.mediaSubtitle}>{memo.media.subtitle}</Text>
                    <Text style={memoDetailStyles.mediaGenre}>{memo.media.genre}</Text>
                    <TouchableOpacity onPress={() => Linking.openURL(memo.media.link)}>
                        <Image source={{uri: memo.media.cover}} style={memoDetailStyles.mediaCover}/>
                    </TouchableOpacity>
                </>
            )}
            {source === "Collection" && (
                <View style={memoDetailStyles.buttonContainer}>
                    <TouchableOpacity style={memoDetailStyles.button}>
                        <Icon name="edit" size={20} color="black"/>
                    </TouchableOpacity>
                    <TouchableOpacity style={memoDetailStyles.button}>
                        <Icon name="trash" size={20} color="black"/>
                    </TouchableOpacity>
                </View>
            )}

        </View>
    );
};

export default MemoDetail;