import React, { useEffect, useState, useCallback, useContext } from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AddIcon from "../assets/icons/add.svg";
import ListContainer from "../components/ListContainer";
import MemoCard from "../components/MemoCard";
import { serverURL, Source } from "../constants";
import axios from "axios";
import { useFocusEffect } from "@react-navigation/native";
import { UserContext } from "../components/UserContext";
import colors from "../styles/colors";

const Inspiration = () => {
  const [memos, setMemos] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { userId, refreshCollection } = useContext(UserContext);
  const navigation = useNavigation();

  const fetchMemos = async () => {
    try {
      const response = await axios.get(`${serverURL}memo`);
      const filteredMemos = response.data.filter(
        (memo) => memo.owner.userId !== userId && memo.user.userId !== userId,
      );
      setMemos(filteredMemos || []);
    } catch (error) {
      console.error("Error fetching memos in Inspiration:", error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchMemos();
    }, [userId]),
  );

  useEffect(() => {
    if (refreshCollection) {
      fetchMemos();
    }
  }, [refreshCollection]);

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchMemos();
    setRefreshing(false);
  };

  const normalizedSearch = searchQuery.trim().toLowerCase();
  const visibleMemos = normalizedSearch
    ? memos.filter((memo) =>
        memo.creators?.some((creator) => {
          const creatorName =
            `${creator.name || ""} ${creator.lastName || ""}`.trim();
          return (
            creatorName.toLowerCase().includes(normalizedSearch) ||
            memo.quote.toLowerCase().includes(normalizedSearch)
          );
        }),
      )
    : memos;

  const bottomBar = (
    <View style={styles.bottomBar}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search all memos"
        placeholderTextColor={colors.tertiaryColor}
        value={searchQuery}
        onChangeText={setSearchQuery}
        autoCorrect={false}
        returnKeyType="search"
        clearButtonMode="while-editing"
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate("NewMemo")}
      >
        <AddIcon width={24} height={24} color={colors.tertiaryColor} />
      </TouchableOpacity>
    </View>
  );

  return (
    <ListContainer
      data={visibleMemos}
      renderItem={({ item }) => (
        <MemoCard
          source={Source.INSPIRATION}
          memo={{
            ...item,
          }}
        />
      )}
      refreshing={refreshing}
      onRefresh={onRefresh}
      bottomBar={bottomBar}
    />
  );
};

const styles = StyleSheet.create({
  bottomBar: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    backgroundColor: "transparent",
    padding: 10,
    borderRadius: 28,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 16,
    elevation: 8,
  },
  searchInput: {
    flex: 1,
    height: 50,
    backgroundColor: "#f8f8f8",
    borderRadius: 25,
    paddingHorizontal: 18,
    fontSize: 16,
    color: "#222",
  },
  addButton: {
    marginLeft: 12,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#f8f8f8",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Inspiration;
