import React from "react";
import {View, Text, TouchableOpacity, Image, Linking} from "react-native";
import {mediaInfoBoxStyles} from "../../styles/mediaInfoBoxStyles";
import {Category} from "../../constants";
import Icon from "react-native-vector-icons/MaterialIcons";
import colors from "../../styles/colors";

const MediaInfoBox = ({link, media}) => {

    const getCategoryIcon = (category) => {
        switch (category) {
            case Category.MOVIE:
                return <Icon name="movie" size={30} color={colors.tertiaryColor}/>;
            case Category.SONG:
                return <Icon name="library-music" size={30} color={colors.tertiaryColor}/>;
            case Category.BOOK:
                return <Icon name="menu-book" size={30} color={colors.tertiaryColor}/>;
            case Category.SERIES:
                return <Icon name="tv" size={30} color={colors.tertiaryColor}/>;
            default:
                return <Icon name="insert-drive-file" size={30} color={colors.tertiaryColor}/>;
        }
    };

    return (
        <TouchableOpacity onPress={() => Linking.openURL(link)}>
            <View style={mediaInfoBoxStyles.container}>
                <Image source={{uri: media.cover}} style={mediaInfoBoxStyles.cover} resizeMode="contain"/>
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