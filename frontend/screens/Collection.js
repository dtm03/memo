import React from "react";
import ListContainer from "../components/ListContainer";
import MemoCard from "../components/MemoCard";
import {utils, getCreatorsByIds, getMediaById} from "../api/utils";

const Collection = () => {
    return (
        <ListContainer
            data={utils}
            renderItem={({item}) => (
                <MemoCard
                    source="Collection"
                    memo={{
                        ...item,
                        creators: getCreatorsByIds(item.creatorIds),
                    }}
                />
            )}
        />
    );
};

export default Collection;