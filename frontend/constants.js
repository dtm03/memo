import { Dimensions } from "react-native";
import colors from "./styles/colors";
import React from "react";
import BookIcon from "./assets/icons/book.svg";
import MovieIcon from "./assets/icons/movie.svg";
import MusicIcon from "./assets/icons/library-music.svg";
import SeriesIcon from "./assets/icons/tv.svg";

const { width, height } = Dimensions.get("screen");

export const SCREEN_WIDTH = width;
export const SCREEN_HEIGHT = height;

export const Category = Object.freeze({
  MOVIE: "Movie",
  SONG: "Song",
  BOOK: "Book",
  SERIES: "Series",
  OTHER: "Other",
});

export const Source = Object.freeze({
  INSPIRATION: "Inspiration",
  COLLECTION: "Collection",
});

export const categories = [
  {
    label: <BookIcon height={24} width={24} color={colors.tertiaryColor} />,
    value: Category.BOOK,
  },
  {
    label: <MovieIcon height={24} width={24} color={colors.tertiaryColor} />,
    value: Category.MOVIE,
  },
  {
    label: <MusicIcon height={24} width={24} color={colors.tertiaryColor} />,
    value: Category.SONG,
  },
  {
    label: <SeriesIcon height={24} width={24} color={colors.tertiaryColor} />,
    value: Category.SERIES,
  },
];

export const serverURL = "http://192.168.2.106:8080/";
