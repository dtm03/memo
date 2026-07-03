import React from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import AddIcon from "../assets/icons/add.svg";
import colors from "../styles/colors";
import { searchBarStyles } from "../styles/searchBarStyles";

const SearchBar = ({ placeholder, searchQuery, onChangeText, onAddPress }) => {
  return (
    <View style={searchBarStyles.bottomBar}>
      <TextInput
        style={searchBarStyles.searchInput}
        placeholder={placeholder}
        placeholderTextColor={colors.tertiaryColor}
        value={searchQuery}
        onChangeText={onChangeText}
        autoCorrect={false}
        returnKeyType="search"
        clearButtonMode="while-editing"
      />
      <TouchableOpacity style={searchBarStyles.addButton} onPress={onAddPress}>
        <AddIcon width={28} height={28} color={colors.tertiaryColor} />
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(SearchBar);
