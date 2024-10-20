import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { memoCardStyles } from "../styles/memoCardStyles";
import colors from "../styles/colors";
import {Source} from "../utils/constants";

const MemoCard = ({ source, memo }) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={() => navigation.navigate("Memo", { source, memo })}>
            <View style={memoCardStyles.card}>
                <View style={memoCardStyles.quoteContainer}>
                    <Text
                        style={[memoCardStyles.quote, { fontSize: memo.quote.length > 210 ? 16 : 24 }]}
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
                        {memo.creators.map((creator) => `${creator.name} ${creator.lastName}`).join(", ")}
                    </Text>
                    {source === Source.INSPIRATION && (
                        <>
                            <TouchableOpacity style={{ marginLeft: 10 }}>
                                <Icon name="bookmark-outline" size={30} color="gold" />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ marginLeft: 10 }}>
                                <Icon name="report-gmailerrorred" size={30} color={colors.tertiaryColor} />
                            </TouchableOpacity>
                        </>
                    )}
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default MemoCard;