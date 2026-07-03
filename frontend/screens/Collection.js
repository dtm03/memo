import React, { useCallback, useContext, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import ListContainer from "../components/ListContainer";
import MemoCard from "../components/MemoCard";
import { serverURL, Source } from "../constants";
import axios from "axios";
import { UserContext } from "../components/UserContext";
import { useFocusEffect } from "@react-navigation/native";

const Collection = ({ searchQuery = "" }) => {
  const [memos, setMemos] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
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

  const bottomBar = null;

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

export default Collection;
