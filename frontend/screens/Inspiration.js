import React from "react";
import ListContainer from "../components/ListContainer";
import MemoCard from "../components/MemoCard";
import {quotes, getCreatorsByIds, getMediaById} from "../api/quotes";

const Inspiration = () => {
    return (
            <ListContainer
                data={quotes}
                renderItem={({item}) => (
                    <MemoCard
                        source="Inspiration"
                        memo={{
                            ...item,
                            creators: getCreatorsByIds(item.creatorIds),
                            media: getMediaById(item.mediaId)
                        }}
                    />
                )}
            />
    );
};

export default Inspiration;