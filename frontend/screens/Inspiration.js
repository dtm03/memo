import React from "react";
import ListContainer from "../components/ListContainer";
import MemoCard from "../components/MemoCard";
import {utils, getCreatorsByIds} from "../api/utils";
import {Source} from "../utils/constants";

const Inspiration = () => {
    return (
        <ListContainer
            data={utils}
            renderItem={({item}) => (
                <MemoCard
                    source={Source.INSPIRATION}
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