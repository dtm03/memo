import React, { useState, useRef, useEffect } from "react";
import {
  View,
  TextInput,
  Text,
  StatusBar,
  useWindowDimensions,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import { memoDetailStyles } from "../styles/memoDetailStyles";
import { useNavigation } from "@react-navigation/native";
import colors from "../styles/colors";
import ButtonContainer from "../components/detail/ButtonContainer";
import { fetchMediaDetails } from "../api/utils";
import { Source, serverURL } from "../constants";
import MediaInfoBox from "../components/detail/MediaInfoBox";
import axios from "axios";

const MemoDetail = ({ route }) => {
  const { memo, source } = route.params;
  const navigation = useNavigation();
  const [newQuote, setNewQuote] = useState(memo.quote);
  const [isEditable, setIsEditable] = useState(false);
  const [media, setMedia] = useState(null);
  const textInputRef = useRef(null);
  const authors = memo.creators
    ? memo.creators
        .map((creator) =>
          creator.lastName
            ? `${creator.name} ${creator.lastName}`
            : creator.name,
        )
        .join(", ")
    : "";
  const windowHeight = useWindowDimensions().height;

  const handleSaveEdit = async () => {
    Keyboard.dismiss();
    setIsEditable(false);
    try {
      await axios.put(`${serverURL}memo/${memo.memoId}`, { quote: newQuote });
    } catch (error) {
      console.error("Error saving edited memo:", error);
    }
  };

  useEffect(() => {
    if (isEditable && textInputRef.current) {
      textInputRef.current.focus();
      if (textInputRef.current.setNativeProps) {
        textInputRef.current.setNativeProps({
          selection: { start: newQuote.length, end: newQuote.length },
        });
      }
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
    <View
      style={[
        { minHeight: Math.round(windowHeight) },
        memoDetailStyles.container,
      ]}
    >
      <StatusBar
        backgroundColor={colors.primaryColor}
        barStyle="light-content"
      />
      <View style={memoDetailStyles.quoteWrapper}>
        <TextInput
          ref={textInputRef}
          style={[
            memoDetailStyles.quoteContainer,
            memoDetailStyles.quote,
            { fontSize: newQuote.length > 210 ? 18 : 24 },
          ]}
          value={newQuote}
          multiline={true}
          placeholderTextColor={colors.primaryTextColor}
          onChangeText={setNewQuote}
          maxLength={280}
          editable={isEditable}
        />
        {isEditable && (
          <TouchableOpacity
            style={memoDetailStyles.saveButton}
            onPress={handleSaveEdit}
          >
            <Text style={memoDetailStyles.saveButtonText}>✓</Text>
          </TouchableOpacity>
        )}
      </View>
      <View style={memoDetailStyles.authorContainer}>
        {authors && <Text style={memoDetailStyles.authors}>{authors}</Text>}
      </View>
      {media && <MediaInfoBox link={memo.link} media={media} />}
      {source === Source.COLLECTION && (
        <ButtonContainer
          isEditable={isEditable}
          setIsEditable={setIsEditable}
          isMemoVisible={memo.isVisible}
          memoId={memo.memoId}
          newQuote={newQuote}
        />
      )}
    </View>
  );
};

export default MemoDetail;
