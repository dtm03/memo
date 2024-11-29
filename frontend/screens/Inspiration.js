import React, {useEffect, useState, useCallback, useContext} from "react";
import ListContainer from "../components/ListContainer";
import MemoCard from "../components/MemoCard";
import {serverURL, Source} from "../constants";
import axios from "axios";
import {useFocusEffect} from "@react-navigation/native";
import {UserContext} from "../components/UserContext";

const Inspiration = () => {
    const [memos, setMemos] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const { userId, refreshCollection} = useContext(UserContext);

    const fetchMemos = async () => {
        try {
            const response = await axios.get(`${serverURL}memo`);
            const filteredMemos = await response.data.filter(memo => memo.owner.userId !== userId && memo.user.userId !== userId);
            setMemos(response.data || []);
        } catch (error) {
            console.error("Error fetching memos in Inspiration:", error);
        }
    };

    useFocusEffect(
        useCallback(() => {
            fetchMemos();
        }, [userId])
    );

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
                    source={Source.INSPIRATION}
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

export default Inspiration;