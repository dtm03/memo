import React from "react";
import {View, Text, TouchableOpacity} from "react-native";
import {useNavigation} from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import {memoCardStyles} from "../styles/styles";

const MemoCard = ({source, memo}) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={() => navigation.navigate("Memo", {source, memo})}>
            <View style={memoCardStyles.card}>
                <Text style={memoCardStyles.title}>{memo.quote}</Text>
                {memo.creators && memo.creators.map((creator) => (
                    <Text key={creator.id} style={memoCardStyles.content}>
                        {creator.name + " " + creator.lastName}
                    </Text>
                ))}
                {source === "Inspiration" && (
                    <>
                        <TouchableOpacity style={memoCardStyles.starButton}>
                            <Icon name="star" size={20} color="gold"/>
                        </TouchableOpacity>
                        <TouchableOpacity style={memoCardStyles.button}>
                            <Icon name="flag" size={20} color="black"/>
                        </TouchableOpacity>
                    </>
                )}
            </View>
        </TouchableOpacity>
    );
};

export default MemoCard;