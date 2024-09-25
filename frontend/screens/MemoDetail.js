import React, { useState } from "react";
import { View, Text, TouchableOpacity, Linking, Image, StatusBar, SafeAreaView } from "react-native";
import { memoDetailStyles } from "../styles/memoDetailStyles";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";
import colors from "../styles/colors";

const MemoDetail = ({ route }) => {
    const { memo, source } = route.params;
    const navigation = useNavigation();
    const [isVisible, setIsVisible] = useState(true);

    const authors = memo.creators ? memo.creators.map(creator => `${creator.name} ${creator.lastName}`).join(", ") : "";

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <SafeAreaView style={memoDetailStyles.container}>
            <StatusBar backgroundColor={colors.maybe} barStyle="light-content" />
            <View style={memoDetailStyles.quoteContainer}>
                <Text style={[memoDetailStyles.quote, { fontSize: memo.quote.length > 210 ? 18 : 24 }]}>{memo.quote}</Text>
            </View>
            <View style={memoDetailStyles.authorContainer}>
                {authors && <Text style={memoDetailStyles.authors}>{authors}</Text>}
            </View>
            {memo.media && (
                <TouchableOpacity onPress={() => Linking.openURL(memo.media.link)}>
                    <View style={memoDetailStyles.mediaContainer}>
                        <Image source={{ uri: memo.media.cover }} style={memoDetailStyles.mediaCover} resizeMode="contain" />
                        <View style={memoDetailStyles.mediaTextContainer}>
                            <Text style={memoDetailStyles.mediaTitle}>{memo.media.title}</Text>
                            {memo.media.subtitle_album && (
                                <Text style={memoDetailStyles.mediaSubtitle}>{memo.media.subtitle_album}</Text>
                            )}
                            <Text style={memoDetailStyles.mediaDate}>{memo.media.date}</Text>
                            <Text style={memoDetailStyles.mediaCategory}>{memo.media.category}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            )}
            {source === "Collection" && (
                <View style={memoDetailStyles.buttonContainer}>
                    <TouchableOpacity onPress={toggleVisibility}>
                        <Icon name={isVisible ? "visibility" : "visibility-off"} size={30} color={colors.tertiaryColor} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon name="share" size={30} color={colors.tertiaryColor} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("EditMemo", { memo })}>
                        <Icon name="edit-note" size={30} color={colors.tertiaryColor} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon name="delete-outline" size={30} color={colors.tertiaryColor} />
                    </TouchableOpacity>
                </View>
            )}
        </SafeAreaView>
    );
};

export default MemoDetail;