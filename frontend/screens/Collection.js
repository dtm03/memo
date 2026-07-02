import React, { useCallback, useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AddIcon from "../assets/icons/add.svg";
import ListContainer from "../components/ListContainer";
import MemoCard from "../components/MemoCard";
import { serverURL, Source } from "../constants";
import axios from "axios";
import { UserContext } from "../components/UserContext";
import { useFocusEffect } from "@react-navigation/native";
import colors from "../styles/colors";

const Collection = () => {
  const [memos, setMemos] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { userId, refreshCollection } = useContext(UserContext);
  const navigation = useNavigation();

  const fetchCollection = async () => {
    if (!userId) return;
    try {
      const response = await axios.get(`${serverURL}user/${userId}`);
      setMemos(response.data || []);
    } catch (error) {
      console.error("Error fetching memos in Collection:", error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchCollection();
    }, [userId]),
  );

  useEffect(() => {
    if (refreshCollection) {
      fetchCollection();
    }
  }, [refreshCollection]);

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchCollection();
    setRefreshing(false);
  };

  const normalizedSearch = searchQuery.trim().toLowerCase();
  const visibleMemos = normalizedSearch
    ? memos.filter((memo) => {
        const quoteMatch = memo.quote?.toLowerCase().includes(normalizedSearch);
        const creatorMatch = memo.creators?.some((creator) => {
          const creatorName =
            `${creator.name || ""} ${creator.lastName || ""}`.trim();
          return creatorName.toLowerCase().includes(normalizedSearch);
        });
        return quoteMatch || creatorMatch;
      })
    : memos;

  const bottomBar = (
    <View style={styles.bottomBar}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search your collection"
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
          source={Source.COLLECTION}
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

export default Collection;
