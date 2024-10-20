import React from "react";
import {View, Text, TouchableOpacity, Image} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import colors from "../../styles/colors";
import {selectedMediaStyles} from "../../styles/selectedMediaStyles";

const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
        return text.substring(0, maxLength) + '...';
    }
    return text;
};

const SelectedMedia = ({selectedMedia, deleteMediaSelection}) => {
    return (
        <View style={selectedMediaStyles.container}>
            <View style={{flexDirection: "row", alignItems: "center"}}>
                {selectedMedia.artworkUrl100 && (
                    <Image
                        source={{uri: selectedMedia.artworkUrl100.replace('100x100', '600x600')}}
                        style={selectedMediaStyles.thumbnail}
                    />
                )}
                <View>
                    <Text style={selectedMediaStyles.title}>
                        {truncateText(selectedMedia.trackName || selectedMedia.collectionName, 18)}
                    </Text>
                    <Text style={selectedMediaStyles.artist}>
                        {truncateText(selectedMedia.artistName || selectedMedia.artistName, 28)}
                    </Text>
                </View>
            </View>
            <TouchableOpacity onPress={deleteMediaSelection}>
                <Icon name="delete-outline" size={35} color={colors.tertiaryColor}/>
            </TouchableOpacity>
        </View>
    );
};

export default SelectedMedia;