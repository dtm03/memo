import { Dimensions } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import colors from "./styles/colors";
import React from "react";

const { width, height } = Dimensions.get("screen");

export const SCREEN_WIDTH = width;
export const SCREEN_HEIGHT = height;

export const Category = Object.freeze({
    MOVIE: "Movie",
    SONG: "Song",
    BOOK: "Book",
    SERIES: "Series",
    OTHER: "Other"
});

export const Source = Object.freeze({
   INSPIRATION: "Inspiration",
   COLLECTION: "Collection",
});

export const categories = [
    {label: <Icon name="menu-book" size={24} color={colors.tertiaryColor}/>, value: Category.BOOK},
    {label: <Icon name="movie" size={24} color={colors.tertiaryColor}/>, value: Category.MOVIE},
    {label: <Icon name="library-music" size={24} color={colors.tertiaryColor}/>, value: Category.SONG},
    {label: <Icon name="tv" size={24} color={colors.tertiaryColor}/>, value: Category.SERIES},
    {label: <Icon name="insert-drive-file" size={24} color={colors.tertiaryColor}/>, value: Category.OTHER}
];

export const serverURL =  "http://192.168.178.143:8080/";

export const userId = 1;

