import axios from "axios";
import {Category} from "../constants";

export const fetchMediaDetails = async (mediaId) => {
    try {
        const response = await axios.get(`https://itunes.apple.com/lookup?id=${mediaId}`);
        const mediaData = response.data.results[0];
        const exampleLink = "https://www.amazon.de/Little-Life-Shortlisted-Booker-Prize/dp/1447294831/ref=asc_df_1447294831?tag=bingshoppin0b-21&linkCode=df0&hvadid=80470564161838&hvnetw=o&hvqmt=e&hvbmt=be&hvdev=c&hvlocint=&hvlocphy=&hvtargid=pla-4584070139220793&psc=11";

        return {
            id: mediaId,
            title: mediaData.trackName || mediaData.collectionName,
            show_album: (mediaData.kind === 'tv-episode' || mediaData.kind === 'song') ? mediaData.collectionName : undefined,
            date: new Date(mediaData.releaseDate).getFullYear().toString(),
            category: mediaData.kind === 'feature-movie' ? 'Movie' :
                mediaData.kind === 'tv-episode' ? 'Series' :
                    mediaData.kind === 'song' ? 'Song' : 'Other',
            link: exampleLink,
            cover: mediaData.artworkUrl100.replace('100x100', '600x600'),
        };
    } catch (error) {
        console.error('Error fetching media details:', error);
        throw error;
    }
};

export const searchMedia = async (text, category) => {
    let searchCategory;
    switch (category) {
        case Category.MOVIE:
            searchCategory = "movie";
            break;
        case Category.SONG:
            searchCategory = "music";
            break;
        case Category.BOOK:
            searchCategory = "ebook";
            break;
        case Category.SERIES:
            searchCategory = "tvShow";
            break;
        default:
            searchCategory = "all";
            break;
    }
    const response = await axios.get(`https://itunes.apple.com/search?term=${text}&media=${searchCategory}&limit=5`);
    return response.data.results || [];
};