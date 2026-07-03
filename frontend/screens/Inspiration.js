import React, { useEffect, useState, useCallback, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import ListContainer from "../components/ListContainer";
import MemoCard from "../components/MemoCard";
import { serverURL, Source } from "../constants";
import axios from "axios";
import { useFocusEffect } from "@react-navigation/native";
import { UserContext } from "../components/UserContext";

const Inspiration = ({ searchQuery = "" }) => {
  const [memos, setMemos] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
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

  const bottomBar = null;

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

export default Inspiration;
