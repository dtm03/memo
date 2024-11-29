import React, {useContext, useEffect, useState} from "react";
import ListContainer from "../components/ListContainer";
import MemoCard from "../components/MemoCard";
import {serverURL, Source} from "../constants";
import axios from "axios";
import {UserContext} from "../components/UserContext";

const Collection = () => {
    const [memos, setMemos] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const {userId, refreshCollection} = useContext(UserContext);

    const fetchMemos = async () => {
        try {
            const response = await axios.get(`${serverURL}user/${userId}`);
            setMemos(response.data || []);
        } catch (error) {
            console.error("Error fetching memos in Collection:", error);
        }
    };

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

    return (
        <ListContainer
            data={memos}
            renderItem={({item}) => (
                <MemoCard
                    source={Source.COLLECTION}
                    memo={{
                        ...item,
                    }}
                />
            )}
            refreshing={refreshing}
            onRefresh={onRefresh}
        />
    );
};

export default Collection;
