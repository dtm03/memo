import React from "react";
import { View, Text, TouchableOpacity, Image, Linking } from "react-native";
import { mediaInfoBoxStyles } from "../../styles/mediaInfoBoxStyles";
import { Category } from "../../constants";
import colors from "../../styles/colors";
import MovieIcon from "../../assets/icons/movie.svg";
import MusicIcon from "../../assets/icons/library-music.svg";
import BookIcon from "../../assets/icons/book.svg";
import SeriesIcon from "../../assets/icons/tv.svg";
// import OtherIcon from "../../assets/icons/file.svg";

const MediaInfoBox = ({ link, media }) => {
  const getCategoryIcon = (category) => {
    switch (category) {
      case Category.MOVIE:
        return <MovieIcon size={30} color={colors.tertiaryColor} />;
      case Category.SONG:
        return (
          <MusicIcon
            name="library-music"
            size={30}
            color={colors.tertiaryColor}
          />
        );
      case Category.BOOK:
        return (
          <BookIcon name="menu-book" size={30} color={colors.tertiaryColor} />
        );
      case Category.SERIES:
        return <SeriesIcon name="tv" size={30} color={colors.tertiaryColor} />;
      // default:
      //   return (
      //     <OtherIcon
      //       name="insert-drive-file"
      //       size={30}
      //       color={colors.tertiaryColor}
      //     />
      //   );
    }
  };

  return (
    <TouchableOpacity onPress={() => Linking.openURL(link)}>
      <View style={mediaInfoBoxStyles.container}>
        <Image
          source={{ uri: media.cover }}
          style={mediaInfoBoxStyles.cover}
          resizeMode="contain"
        />
        <View style={mediaInfoBoxStyles.textContainer}>
          <Text style={mediaInfoBoxStyles.title}>{media.title}</Text>
          {media.show_album && (
            <Text style={mediaInfoBoxStyles.subtitle}>{media.show_album}</Text>
          )}
          <Text style={mediaInfoBoxStyles.date}>{media.date}</Text>
          {getCategoryIcon(media.category)}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MediaInfoBox;
