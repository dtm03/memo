import React from "react";
import {View, Text, TouchableOpacity, Linking, Image} from "react-native";
import {memoDetailStyles} from "../styles/memoDetailStyles";
import {useNavigation} from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";
import colors from "../styles/colors";

const MemoDetail = ({route}) => {
    const {memo, source} = route.params;
    const navigation = useNavigation();

    const authors = memo.creators ? memo.creators.map(creator => `${creator.name} ${creator.lastName}`).join(", ") : "";

    return (
        <View style={memoDetailStyles.container}>
            <View style={memoDetailStyles.textContainer}>
                <Text style={memoDetailStyles.quote}>{memo.quote}</Text>
            </View>
            <View style={memoDetailStyles.authorContainer}>
                {authors && <Text style={memoDetailStyles.authors}>{authors}</Text>}
            </View>
            {memo.media && (
                <TouchableOpacity onPress={() => Linking.openURL(memo.media.link)}>
                    <View style={memoDetailStyles.mediaContainer}>
                        <Image source={{uri: memo.media.cover}} style={memoDetailStyles.mediaCover}
                               resizeMode="contain"/>
                        <View style={memoDetailStyles.mediaTextContainer}>
                            <Text style={memoDetailStyles.mediaTitle}>{memo.media.title}</Text>
                            {memo.media.subtitle && (
                                <Text style={memoDetailStyles.mediaSubtitle}>{memo.media.subtitle}</Text>)}
                            <Text style={memoDetailStyles.mediaDate}>{memo.media.date}</Text>
                            <Text style={memoDetailStyles.mediaCategory}>{memo.media.category}</Text>
                        </View>
                    </View>

                </TouchableOpacity>
            )}
            <View style={memoDetailStyles.buttonContainer}>
                <TouchableOpacity
                    style={source !== "Collection" ? {opacity: 0} : null}
                    onPress={() => navigation.navigate("EditMemo", {memo})}
                    disabled={source !== "Collection"}
                >
                    <Icon name="edit-note" size={30} color={colors.tertiaryColor}/>
                </TouchableOpacity>
                <TouchableOpacity
                    style={source !== "Collection" ? {opacity: 0} : null}
                    disabled={source !== "Collection"}
                >
                    <Icon name="delete-outline" size={30} color={colors.tertiaryColor}/>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default MemoDetail;