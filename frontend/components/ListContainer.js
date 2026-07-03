import React from "react";
import {
  FlatList,
  RefreshControl,
  StatusBar,
  View,
  StyleSheet,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import colors from "../styles/colors";

const ListContainer = ({
  data,
  renderItem,
  refreshing,
  onRefresh,
  ListHeaderComponent,
  bottomBar,
}) => {
  const insets = useSafeAreaInsets();
  const contentBottom = 64 + insets.bottom;

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={colors.primaryColor}
        barStyle="light-content"
      />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => String(item.memoId)}
        style={styles.list}
        contentContainerStyle={{ flexGrow: 1, paddingBottom: contentBottom }}
        scrollEventThrottle={16}
        nestedScrollEnabled={true}
        ListHeaderComponent={ListHeaderComponent}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  list: {
    flex: 1,
    width: "100%",
  },
});

export default ListContainer;
