import React from "react";
import {FlatList, RefreshControl, StatusBar, View} from "react-native";
import colors from "../styles/colors";
import {newMemoStyles} from "../styles/newMemoStyles";

const ListContainer = ({data, renderItem, refreshing, onRefresh}) => {
    return (
        <View style={newMemoStyles.container}>
            <StatusBar backgroundColor={colors.primaryColor} barStyle="light-content"/>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.memoId}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
            />
        </View>
    );
};

export default ListContainer;