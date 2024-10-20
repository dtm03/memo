import React, { useState, useRef, useEffect } from "react";
import {
    View,
    TextInput,
    Text,
    SafeAreaView,
    StatusBar,

} from "react-native";
import { memoDetailStyles } from "../styles/memoDetailStyles";
import { useNavigation } from "@react-navigation/native";
import colors from "../styles/colors";
import ButtonContainer from "../components/detail/ButtonContainer";
import { fetchMediaDetails } from '../api/utils';
import {Source} from "../utils/constants";
import MediaInfoBox from "../components/detail/MediaInfoBox";

const MemoDetail = ({ route }) => {
    const { memo, source } = route.params;
    const navigation = useNavigation();
    const [newQuote, setNewQuote] = useState(memo.quote);
    const [isEditable, setIsEditable] = useState(false);
    const [media, setMedia] = useState(null);
    const textInputRef = useRef(null);
    const authors = memo.creators ? memo.creators.map(creator => `${creator.name} ${creator.lastName}`).join(", ") : "";

    useEffect(() => {
        if (isEditable && textInputRef.current) {
            textInputRef.current.focus();
            textInputRef.current.setSelection(newQuote.length);
        }
    }, [isEditable, newQuote.length]);

    useEffect(() => {
        const fetchAndSetMediaDetails = async (mediaId) => {
                const mediaDetails = await fetchMediaDetails(mediaId);
                setMedia(mediaDetails);
        };
        fetchAndSetMediaDetails(memo.mediaId);
    }, [memo.mediaId]);

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
            {media && <MediaInfoBox media={media} />}
            {source === Source.COLLECTION && (
                <ButtonContainer onToggleEditing={setIsEditable} memoId={memo.id} newQuote={newQuote} />
            )}
        </SafeAreaView>
    );
};

export default MemoDetail;