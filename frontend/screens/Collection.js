import React, {useCallback, useContext, useEffect, useState} from "react";
import ListContainer from "../components/ListContainer";
import MemoCard from "../components/MemoCard";
import {serverURL, Source} from "../constants";
import axios from "axios";
import {useFocusEffect} from "@react-navigation/native";
import {UserContext} from "../components/UserContext";

const Collection = () => {
    const [memos, setMemos] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const {userId} = useContext(UserContext);

    const fetchMemos = async () => {
        try {
            const response = await axios.get(`${serverURL}user/${userId}`);
            setMemos(response.data || []);
        } catch (error) {
            console.error("Error fetching memos:", error);
        }
    };
    useFocusEffect(
        useCallback(() => {
            if (userId) {
                fetchMemos();
            }
        }, [userId])
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
