import React, {useState, useRef, useEffect} from "react";
import {
    View,
    TextInput,
    Text,
    StatusBar, useWindowDimensions,
} from "react-native";
import {memoDetailStyles} from "../styles/memoDetailStyles";
import {useNavigation} from "@react-navigation/native";
import colors from "../styles/colors";
import ButtonContainer from "../components/detail/ButtonContainer";
import {fetchMediaDetails} from '../api/utils';
import {Source} from "../constants";
import MediaInfoBox from "../components/detail/MediaInfoBox";

const MemoDetail = ({route}) => {
    const {memo, source} = route.params;
    const navigation = useNavigation();
    const [newQuote, setNewQuote] = useState(memo.quote + memo.isVisible);
    const [isEditable, setIsEditable] = useState(false);
    const [media, setMedia] = useState(null);
    const textInputRef = useRef(null);
    const authors = memo.creators ?
        memo.creators.map((creator) =>
            creator.lastName ? `${creator.name} ${creator.lastName}` : creator.name
        ).join(", ") : "";
    const windowHeight = useWindowDimensions().height;

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
        <View style={[{minHeight: Math.round(windowHeight)}, memoDetailStyles.container]}>
            <StatusBar backgroundColor={colors.primaryColor} barStyle="light-content"/>
            <TextInput
                ref={textInputRef}
                style={[memoDetailStyles.quoteContainer, memoDetailStyles.quote, {fontSize: newQuote.length > 210 ? 18 : 24}]}
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
            {media && <MediaInfoBox media={media}/>}
            {source === Source.COLLECTION && (
                <ButtonContainer isEditable={isEditable} setIsEditable={setIsEditable} memoId={memo.memoId} newQuote={newQuote}/>
            )}
        </View>
    );
};

export default MemoDetail;