import React from "react";
import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { memoCardStyles } from "../styles/styles";

const { width } = Dimensions.get("screen");

const MemoCard = ({ source, memo }) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={() => navigation.navigate("Memo", { source, memo })}>
            <View style={[memoCardStyles.card, { height: width }]}>
                <View style={memoCardStyles.textContainer}>
                    <Text style={memoCardStyles.text}>{memo.quote}</Text>
                </View>
                <View style={memoCardStyles.divider} />
                <View style={memoCardStyles.authorContainer}>
                    <Text style={memoCardStyles.author}>
                        {memo.creators.map((creator) => `${creator.name} ${creator.lastName}`).join(", ")}
                    </Text>
                    {source === "Inspiration" && (
                        <>
                            <TouchableOpacity style={memoCardStyles.button}>
                                <Icon name="star-outline" size={30} color="gold" />
                            </TouchableOpacity>
                            <TouchableOpacity style={memoCardStyles.button}>
                                <Icon name="report-gmailerrorred" size={30} color="darkgrey" />
                            </TouchableOpacity>
                        </>
                    )}
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default MemoCard;