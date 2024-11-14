import React, {useCallback, useEffect, useState} from "react";
import ListContainer from "../components/ListContainer";
import MemoCard from "../components/MemoCard";
import {serverURL, Source, userId} from "../constants";
import axios from "axios";
import {useFocusEffect} from "@react-navigation/native";

const Collection = () => {
    const [memos, setMemos] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    const fetchMemos = async () => {
        try {
            const response = await axios.get(`${serverURL}user/${userId}`);
            setMemos(response.data || []);
        } catch (error) {
            console.error("Error fetching memos:", error);
        }
    };

    useEffect(() => {
        fetchMemos();
    }, []);


    useFocusEffect(
        useCallback(() => {
            fetchMemos();
        }, [])
    );

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
