import React, {useEffect, useState} from "react";
import ListContainer from "../components/ListContainer";
import MemoCard from "../components/MemoCard";
import {getCreatorsByIds, getPublicMemos, utils} from "../api/utils";
import {Source} from "../constants";

const Collection = () => {
    return (
        <ListContainer
            data={utils}
            renderItem={({ item }) => (
                <MemoCard
                    source={Source.COLLECTION}
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