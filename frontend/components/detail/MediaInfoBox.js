import React from "react";
import { View, Text, TouchableOpacity, Image, Linking } from "react-native";
import { getCategoryIcon } from "../../utils/helpers";
import {mediaInfoBoxStyles} from "../../styles/mediaInfoBoxStyles";

const MediaInfoBox = ({ media }) => {
    return (
        <TouchableOpacity onPress={() => Linking.openURL(media.link)}>
            <View style={mediaInfoBoxStyles.container}>
                <Image source={{ uri: media.cover }} style={mediaInfoBoxStyles.cover} resizeMode="contain" />
                <View style={mediaInfoBoxStyles.textContainer}>
                    <Text style={mediaInfoBoxStyles.title}>{media.title}</Text>
                    {media.show_album && (
                        <Text style={mediaInfoBoxStyles.subtitle}>{media.show_album}</Text>
                    )}
                    <Text style={mediaInfoBoxStyles.date}>{media.date}</Text>
                    {getCategoryIcon(media.category)}
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default MediaInfoBox;