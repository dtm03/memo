import React from "react";
import ListContainer from "../components/ListContainer";
import MemoCard from "../components/MemoCard";
import {utils, getCreatorsByIds} from "../api/utils";
import {Source} from "../utils/constants";

const Collection = () => {
    return (
        <ListContainer
            data={utils}
            renderItem={({item}) => (
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