import React from "react";
import {View, Dimensions} from "react-native";
import ListContainer from "../components/ListContainer";
import MemoCard from "../components/MemoCard";
import {data, getCreatorsByIds, getMediaById} from "../api/data";
import {inspirationStyles} from "../styles/styles";

const {width, height} = Dimensions.get("screen");

const Inspiration = () => {
    return (
        <View style={inspirationStyles.container}>
            <ListContainer
                data={data}
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
        </View>
    );
};

export default Inspiration;