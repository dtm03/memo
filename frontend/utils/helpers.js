import Icon from "react-native-vector-icons/MaterialIcons";
import colors from "../styles/colors";
import { Category } from "./constants";

export const toggleVisibility = (isVisible, setIsVisible) => {
    setIsVisible(!isVisible);
    // Additional visibility logic here
};

export const toggleEditing = (isEditable, setIsEditable, newQuote, memoId) => {
    setIsEditable(!isEditable);
    if (!isEditable) {
        // Save memo logic here
    }
};

export const getCategoryIcon = (category) => {
    switch (category) {
        case Category.MOVIE:
            return <Icon name="movie" size={30} color={colors.tertiaryColor} />;
        case Category.SONG:
            return <Icon name="library-music" size={30} color={colors.tertiaryColor} />;
        case Category.BOOK:
            return <Icon name="menu-book" size={30} color={colors.tertiaryColor} />;
        case Category.SERIES:
            return <Icon name="tv" size={30} color={colors.tertiaryColor} />;
        default:
            return <Icon name="insert-drive-file" size={30} color={colors.tertiaryColor} />;
    }
};

export const getSearchCategory = (category) => {
    switch (category) {
        case Category.MOVIE:
            return "movie";
        case Category.SONG:
            return "music";
        case Category.BOOK:
            return "ebook";
        case Category.SERIES:
            return "tvShow";
        default:
            return "all";
    }
};
