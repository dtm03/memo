import React from "react";
import ListContainer from "../components/ListContainer";
import MemoCard from "../components/MemoCard";
import {utils, getCreatorsByIds} from "../api/utils";

const Inspiration = () => {
    return (
        <ListContainer
            data={utils}
            renderItem={({item}) => (
                <MemoCard
                    source="Inspiration"
                    memo={{
                        ...item,
                        creators: getCreatorsByIds(item.creatorIds),
                    }}
                />
            )}
        />
    );
};

export default Inspiration;