import React from "react";
import ListContainer from "../components/ListContainer";
import MemoCard from "../components/MemoCard";
import { data, getCreatorsByIds, getMediaById } from "../api/data";

const Collection = () => {
  return (
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
  );
};

export default Collection;