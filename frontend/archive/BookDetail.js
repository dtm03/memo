import React from "react";
import {View, Text, StyleSheet, Image} from "react-native";
import ListContainer from "../components/ListContainer";
import MemoCardBook from "./MemoCardBook";
import {quotes, getCreatorsByIds, getMediaById} from "../api/quotes";

const BookDetail = ({route}) => {
    const {book} = route.params;

    return (
        <View style={styles.container}>
            <Image source={{uri: book.image}} style={styles.image}/>
            <Text style={styles.title}>{book.title}</Text>
            <Text style={styles.author}>{book.author}</Text>
            <Text style={styles.description}>{book.description}</Text>
            <ListContainer
                data={quotes}
                renderItem={({item}) => (
                    <MemoCardBook
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    image: {
        width: "100%",
        height: 200,
        borderRadius: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 20,
    },
    author: {
        fontSize: 18,
        marginTop: 10,
    },
    description: {
        fontSize: 16,
        marginTop: 10,
    },
});

export default BookDetail;