import React from "react";
import { View } from "react-native";
import ListContainer from "../components/ListContainer";
import MemoCard from "../components/MemoCard";
import { data, getCreatorsByIds, getMediaById } from "../api/data";
import { collectionStyles } from "../styles/styles";

const Collection = () => {
  return (
    <View style={collectionStyles.collectionContainer}>
      <ListContainer
        data={data}
        renderItem={({ item }) => (
          <MemoCard
            source="Collection"
            memo={{
              ...item,
              creators: getCreatorsByIds(item.creatorIds),
              media: getMediaById(item.mediaId),
            }}
          />
        )}
      />
    </View>
  );
};

export default Collection;