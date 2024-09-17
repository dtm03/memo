import React from "react";
import {View, Text, TouchableOpacity, Linking, Image} from "react-native";
import {memoDetailStyles} from "../styles/memoDetailStyles";
import {useNavigation} from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";
import colors from "../styles/colors";

const MemoDetail = ({route}) => {
    const {memo, source} = route.params;
    const navigation = useNavigation();

    return (
        <View style={memoDetailStyles.container}>
            {memo.media && (
                <>
                    <TouchableOpacity onPress={() => Linking.openURL(memo.media.link)}>
                        <Image source={{uri: memo.media.cover}} style={memoDetailStyles.mediaCover} resizeMode={"contain"}/>
                    </TouchableOpacity>
                    <Text style={memoDetailStyles.mediaTitle}>{memo.media.title}</Text>
                    <Text style={memoDetailStyles.mediaSubtitle}>{memo.media.subtitle}</Text>
                    <Text style={memoDetailStyles.mediaGenre}>{memo.media.genre}</Text>
                </>
            )}
            <Text style={memoDetailStyles.title}>{memo.quote}</Text>
            {memo.creators && memo.creators.map((creator) => (
                <Text key={creator.id} style={memoDetailStyles.content}>
                    {creator.name + " " + creator.lastName}
                </Text>
            ))}
            {source === "Collection" && (
                <View style={memoDetailStyles.buttonContainer}>
                    <TouchableOpacity style={memoDetailStyles.button}
                                      onPress={() => navigation.navigate("EditMemo", {memo})}>
                        <Icon name="edit-note" size={30} color={colors.buttonColor}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={memoDetailStyles.button}>
                        <Icon name="delete-outline" size={30} color={colors.buttonColor}/>
                    </TouchableOpacity>
                </View>
            )}

        </View>
    );
};

export default MemoDetail;