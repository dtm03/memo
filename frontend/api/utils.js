import axios from "axios";

// Trying to implement second API, fix tabs once again, fix keyboard view, implement adding quotes functionality

export const utils = [
    {
        id: 1,
        quote: "This is an inspirational quote. A very long quote though, so we might actually need two lines. Now we have two lines. I mean, we could have three lines, but that would be too much. So let's stick with two lines. So now we can add something right? How much though. Not too much. On",
        mediaId: 333558155,
        creatorIds: [201, 202, 203, 204],
        userIds: [300, 301],
    },
    {
        id: 8,
        quote: "This is an inspirational quote. A very long quote though, so we might actually need two lines. Now we have two lines. I mean, we could have three lines, but that would be too much.",
        mediaId: 421072264,
        creatorIds: [201, 202, 203, 204],
        userIds: [300, 301],
    },
    {
        id: 2,
        quote: "Another inspirational quote.",
        mediaId: 966768980,
        creatorIds: [203, 204],
        userIds: [302],
    },
    {
        id: 3,
        quote: "Another inspirational quote.",
        mediaId: 317492997,
        creatorIds: [203, 204],
        userIds: [303],
    },
    {
        id: 4,
        quote: "Pull me closer in the backseat of your rover.",
        mediaId: 1544494392,
        creatorIds: [206],
        userIds: [300],
    },
    {
        id: 5,
        quote: "I just can't wait to be king.",
        mediaId: 1544494392,
        creatorIds: [205],
        userIds: [301],
    },
    {
        id: 6,
        quote: "Name of your sextape",
        mediaId: 1544494392,
        creatorIds: [205],
        userIds: [302, 303],
    },
    {
        id: 7,
        quote: "I have a dream.",
        creatorIds: [207],
        userIds: [300, 301, 302, 303],
    },
];

export const creators = [
    {id: 201, name: "John", lastName: "Doe"},
    {id: 202, name: "Jane", lastName: "Smith"},
    {id: 203, name: "Alice-Clara", lastName: "Johnson-Meyers"},
    {id: 204, name: "Bob", lastName: "Brown"},
    {id: 205, name: "Charlie", lastName: "White"},
    {id: 206, name: "The Chainsmokers", lastName: ""},
    {id: 207, name: "Martin Luther", lastName: "King"},
];

export const fetchMediaDetails = async (mediaId) => {
    try {
        const response = await axios.get(`https://itunes.apple.com/lookup?id=${mediaId}`);
        const mediaData = response.data.results[0];
        const exampleLink = "https://www.amazon.de/Little-Life-Shortlisted-Booker-Prize/dp/1447294831/ref=asc_df_1447294831?tag=bingshoppin0b-21&linkCode=df0&hvadid=80470564161838&hvnetw=o&hvqmt=e&hvbmt=be&hvdev=c&hvlocint=&hvlocphy=&hvtargid=pla-4584070139220793&psc=11";

        const mappedMedia = {
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

        return mappedMedia;
    } catch (error) {
        console.error('Error fetching media details:', error);
        throw error;
    }
};

export const getCreatorsByIds = (ids) => {
    return creators.filter(creator => ids.includes(creator.id));
};