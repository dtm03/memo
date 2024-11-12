import React from "react";
import {FlatList, StatusBar, View} from "react-native";
import colors from "../styles/colors";
import {newMemoStyles} from "../styles/newMemoStyles";

const ListContainer = ({data, renderItem}) => {
    return (
        <View style={newMemoStyles.container}>
            <StatusBar backgroundColor={colors.primaryColor} barStyle="light-content"/>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.memoId}
            />
        </View>
    );
};

export default ListContainer;