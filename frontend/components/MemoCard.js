import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { memoCardStyles } from "../styles/memoCardStyles";
import colors from "../styles/colors";
import { serverURL, Source } from "../constants";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import axios from "axios";
import { UserContext } from "./UserContext";
import Toast from "react-native-toast-message";
import BookmarkIcon from "../assets/icons/bookmark.svg";

const MemoCard = ({ source, memo }) => {
  const navigation = useNavigation();
  const { userId } = useContext(UserContext);
  const insets = useSafeAreaInsets();

  const saveMemo = async () => {
    if (memo.owner.userId === userId || memo.user.userId === userId) {
      Toast.show({
        type: "success",
        text1: "You can't save your own Memo",
        topOffset: insets.top + 10,
      });
    } else {
      const newMemo = {
        quote: memo.quote,
        owner: memo.owner,
        isVisible: memo.isVisible,
        mediaId: memo.mediaId,
        link: memo.link,
        creators: memo.creators,
      };
      try {
        const response = await axios.post(
          `${serverURL}memo/${userId}`,
          newMemo,
        );
        Toast.show({
          type: "success",
          text1: "Memo saved to your own Collection",
          topOffset: insets.top + 10,
        });
      } catch (error) {
        console.error("Error adding memo:", error);
      }
    }
  };

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Memo", { source, memo })}
    >
      <View style={memoCardStyles.card}>
        <View style={memoCardStyles.quoteContainer}>
          <Text
            style={[
              memoCardStyles.quote,
              { fontSize: memo.quote.length > 210 ? 16 : 24 },
            ]}
          >
            {memo.quote}
          </Text>
        </View>
        <View style={memoCardStyles.divider} />
        <View style={memoCardStyles.authorContainer}>
          <Text
            style={memoCardStyles.author}
            numberOfLines={1}
            ellipsizeMode={"tail"}
          >
            {memo.creators
              .map((creator) =>
                creator.lastName
                  ? `${creator.name} ${creator.lastName}`
                  : creator.name,
              )
              .join(", ")}
          </Text>
          {source === Source.INSPIRATION && (
            <>
              <TouchableOpacity style={{ marginLeft: 10 }} onPress={saveMemo}>
                <BookmarkIcon height={24} width={24} color="gold" />
              </TouchableOpacity>
            </>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MemoCard;
