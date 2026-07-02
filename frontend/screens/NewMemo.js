import React, { useState, useContext, useRef } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { newMemoStyles } from "../styles/newMemoStyles";
import colors from "../styles/colors";
import SwitchSelector from "../components/new/SwitchSelector";
import { categories, Category, serverURL } from "../constants";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { searchMedia } from "../api/utils";
import ResultList from "../components/new/ResultList";
import SelectedMedia from "../components/new/SelectedMedia";
import axios from "axios";
import { UserContext } from "../components/UserContext";
import Toast from "react-native-toast-message";
import VisibleIcon from "../assets/icons/visibility.svg";
import InvisibleIcon from "../assets/icons/visibility-off.svg";
import RefreshIcon from "../assets/icons/refresh.svg";

const NewMemo = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const [quote, setQuote] = useState("");
  const [mediaId, setMediaId] = useState("");
  const [creatorIds, setCreatorIds] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const [isSearching, setIsSearching] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(Category.BOOK);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [quoteFocused, setQuoteFocused] = useState(false);
  const { userId, triggerRefreshCollection } = useContext(UserContext);
  const quoteInputRef = useRef(null);

  const handleSearchMedia = async (text, category) => {
    setQuery(text);
    // && category !== Category.OTHER
    if (text.length > 2) {
      setIsSearching(true);
      const results = await searchMedia(text, category);
      setResults(results);
    } else {
      setIsSearching(false);
      setResults([]);
    }
  };

  const selectMedia = (item) => {
    setSelectedMedia(item);
    setMediaId(item.trackId || item.collectionId);
    setIsSearching(false);
  };

  const deleteMediaSelection = () => {
    setSelectedMedia(null);
    setMediaId("");
    setIsSearching(false);
    setQuery("");
    setResults([]);
  };

  const reset = () => {
    deleteMediaSelection();
    setQuote("");
    // if (selectedCategory === Category.OTHER) {
    //     setCreatorIds('');
    // }
  };

  const addQuote = async () => {
    if (quote.length === 0) {
      Toast.show({
        type: "success",
        text1: "Please enter your new quote",
        topOffset: insets.top + 10,
      });
      return;
    }
    // && selectedCategory !== Category.OTHER
    if (!selectedMedia) {
      Toast.show({
        type: "success",
        text1: "Please select a source",
        topOffset: insets.top + 10,
      });
      return;
    }

    if (!userId) {
      Toast.show({
        type: "error",
        text1: "User ID not initialized",
        topOffset: insets.top + 10,
      });
      return;
    }

    const mediaName = selectedMedia
      ? selectedMedia.trackName || selectedMedia.collectionName
      : "";
    const artistName = selectedMedia ? selectedMedia.artistName : "";
    const searchQuery = encodeURIComponent(mediaName + " " + artistName);
    const amazonSearchLink = `https://www.amazon.com/s?k=${searchQuery}`;

    // const creators =
    //   selectedCategory === Category.OTHER
    //     ? creatorIds.split(",").map((name) => ({ name: name.trim() }))
    //     : [{ name: selectedMedia ? selectedMedia.artistName : "" }];

    const creators = [{ name: selectedMedia ? selectedMedia.artistName : "" }];

    const newMemo = {
      quote: quote,
      isVisible: isVisible,
      mediaId: mediaId.toString(),
      link: amazonSearchLink,
      creators: creators,
    };

    try {
      const response = await axios.post(`${serverURL}memo/${userId}`, newMemo);
      Toast.show({
        type: "success",
        text1: "Memo added to your collection",
        topOffset: insets.top + 10,
      });
      reset();
    } catch (error) {
      console.error("Error adding memo:", error);
    }

    triggerRefreshCollection();
  };

  return (
    <View style={newMemoStyles.container} pointerEvents="box-none">
      <SwitchSelector
        options={categories}
        onSelect={(value) => {
          setSelectedCategory(value);
          handleSearchMedia(query, value);
        }}
      />
      {selectedMedia ? (
        <SelectedMedia
          selectedMedia={selectedMedia}
          deleteMediaSelection={deleteMediaSelection}
        />
      ) : (
        <TextInput
          style={newMemoStyles.input}
          placeholder="Enter it's source"
          placeholderTextColor={colors.tertiaryColor}
          value={query}
          onChangeText={(text) => handleSearchMedia(text, selectedCategory)}
          maxLength={50}
          scrollEnabled={false}
        />
      )}
      <View
        style={newMemoStyles.quoteInputSearchContainer}
        pointerEvents="box-none"
      >
        {!isSearching ? (
          <>
            <TextInput
              ref={quoteInputRef}
              style={newMemoStyles.quoteInput}
              value={quote}
              placeholderTextColor={colors.tertiaryColor}
              onChangeText={setQuote}
              placeholder="Enter your new quote"
              maxLength={280}
              multiline={true}
              blurOnSubmit={false}
              onFocus={() => setQuoteFocused(true)}
              onBlur={() => setQuoteFocused(false)}
            />
            {quoteFocused && (
              <TouchableOpacity
                style={newMemoStyles.checkButton}
                onPress={() => quoteInputRef.current?.blur()}
              >
                <Text style={newMemoStyles.checkButtonText}>✓</Text>
              </TouchableOpacity>
            )}
          </>
        ) : (
          <ResultList results={results} onSelectMedia={selectMedia} />
        )}
      </View>
      {/*{selectedCategory === Category.OTHER && (*/}
      {/*    <TextInput*/}
      {/*        style={newMemoStyles.input}*/}
      {/*        value={creatorIds}*/}
      {/*        placeholderTextColor={colors.tertiaryColor}*/}
      {/*        onChangeText={setCreatorIds}*/}
      {/*        placeholder="Enter the creators"*/}
      {/*        maxLength={50}*/}
      {/*    />*/}
      {/*)}*/}
      <View style={newMemoStyles.buttonContainer}>
        <TouchableOpacity style={{ paddingHorizontal: 20 }} onPress={reset}>
          <RefreshIcon size={30} color={colors.secondaryColor} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ paddingRight: 20 }}
          onPress={() => setIsVisible(!isVisible)}
        >
          {isVisible ? (
            <VisibleIcon size={30} color={colors.secondaryColor} />
          ) : (
            <InvisibleIcon size={30} color={colors.secondaryColor} />
          )}
        </TouchableOpacity>
        <TouchableOpacity style={newMemoStyles.button} onPress={addQuote}>
          <Text style={newMemoStyles.buttonText}>Add memo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NewMemo;
