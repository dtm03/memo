import React, { useState, useRef, useEffect } from "react";
import {
    View,
    TextInput,
    TouchableOpacity,
    Text,
    SafeAreaView,
    StatusBar,
    Linking,
    Image,
} from "react-native";
import { memoDetailStyles } from "../styles/memoDetailStyles";
import { useNavigation } from "@react-navigation/native";
import colors from "../styles/colors";
import { getCategoryIcon } from "../utils/helpers";
import ButtonContainer from "../components/ButtonContainer";

const MemoDetail = ({ route }) => {
    const { memo, source } = route.params;
    const navigation = useNavigation();
    const [newQuote, setNewQuote] = useState(memo.quote);
    const [isEditable, setIsEditable] = useState(false);
    const textInputRef = useRef(null);
    const authors = memo.creators ? memo.creators.map(creator => `${creator.name} ${creator.lastName}`).join(", ") : "";

    useEffect(() => {
        if (isEditable && textInputRef.current) {
            textInputRef.current.focus();
            textInputRef.current.setSelection(newQuote.length);
        }
    }, [isEditable]);

    return (
        <SafeAreaView style={memoDetailStyles.container}>
            <StatusBar backgroundColor={colors.primaryColor} barStyle="light-content" />
            <TextInput
                ref={textInputRef}
                style={[memoDetailStyles.quoteContainer, memoDetailStyles.quote, { fontSize: newQuote.length > 210 ? 18 : 24 }]}
                value={newQuote}
                multiline={true}
                placeholderTextColor={colors.primaryTextColor}
                onChangeText={setNewQuote}
                maxLength={280}
                editable={isEditable}
            />
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
                            {getCategoryIcon(memo.media.category)}
                        </View>
                    </View>
                </TouchableOpacity>
            )}
            {source === "Collection" && (
                <ButtonContainer onToggleEditing={setIsEditable} />
            )}
        </SafeAreaView>
    );
};

export default MemoDetail;