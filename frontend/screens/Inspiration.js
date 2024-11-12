import React, {useEffect, useState} from "react";
import ListContainer from "../components/ListContainer";
import MemoCard from "../components/MemoCard";
import {getPublicMemos} from "../api/utils";
import {Source} from "../constants";

const Inspiration = () => {
    const [memos, setMemos] = useState([]);

    useEffect(() => {
        getPublicMemos()
            .then(setMemos)
            .catch((error) => console.error("Error fetching memos:", error));
    }, []);

    return (
        <ListContainer
            data={memos}
            renderItem={({item}) => (
                <MemoCard
                    source={Source.INSPIRATION}
                    memo={{
                        ...item,
                    }}
                />
            )}
        />
    );
};

export default Inspiration;