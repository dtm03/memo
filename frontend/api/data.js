// Add fields like notes, season, episode, page

export const data = [
    {
        id: 1,
        quote: "This is an inspirational quote. A very long quote though, so we might actually need two lines.",
        mediaId: 101,
        creatorIds: [201, 202, 203, 204],
    },
    {
        id: 2,
        quote: "Another inspirational quote.",
        mediaId: 102,
        creatorIds: [203, 204],
    },
    {
        id: 3,
        quote: "Another inspirational quote.",
        mediaId: 102,
        creatorIds: [203, 204],
    },
    {
        id: 4,
        quote: "Pull me closer in the backseat of your rover.",
        mediaId: 104,
        creatorIds: [206],
    },
    {
        id: 5,
        quote: "I just can't wait to be king.",
        mediaId: 103,
        creatorIds: [205],
    },
    {
        id: 6,
        quote: "Name of your sextape",
        mediaId: 105,
        creatorIds: [205],
    },
    {
        id: 7,
        quote: "I have a dream.",
        mediaId: 106,
        creatorIds: [207],
    }
];

export const media = [
    {
        id: 101,
        title: "Inspiration BookDetail",
        subtitle: "Subtitle of the book",
        date: "2015",
        category: "Book",
        link: "https://www.amazon.de/Little-Life-Shortlisted-Booker-Prize/dp/1447294831/ref=asc_df_1447294831?tag=bingshoppin0b-21&linkCode=df0&hvadid=80470564161838&hvnetw=o&hvqmt=e&hvbmt=be&hvdev=c&hvlocint=&hvlocphy=&hvtargid=pla-4584070139220793&psc=11",
        cover: "https://m.media-amazon.com/images/I/71N9Dy2G5+L._SL1500_.jpg",
    },
    {
        id: 102,
        title: "Motivation BookDetail",
        subtitle: "Subtitle of the book",
        date: "2019",
        category: "Book",
        link: "http://example.com/book2",
        cover: "https://m.media-amazon.com/images/I/71Vh4lfd5FL._SL1500_.jpg",
    },
    {
        id: 103,
        title: "Lion King",
        subtitle: "Subtitle of the book",
        date: "1994",
        category: "Movie",
        link: "https://www.amazon.de/K%C3%B6nig-L%C3%B6wen-Teil-DVDs/dp/B07GJ4JRHD/ref=sr_1_1_sspa?crid=1LI3OFHG51PC0&dib=eyJ2IjoiMSJ9.hlgeyav3ZTjdz6Jjv-nNdpn4McCE81VasAEx-1buKQk-MT-Hzaca0GFonth9fsFb-D3dovUQMQxGedDf-jM4ZfLr1C9UAPhfvceD9OdDKR2lrVUziUO7Y3uK7Mx6iXVKRz0FFM6z1tdWbAVHRhBQosmVBqcD68EL6KZogqeGw5E-KUm9LEGr4s5tqBOFp77M8GnFYnG68T0bvNES3wM3KJbu6q1-Q9ouEB3s5-lM0jo.oxJ50JA8oU-G33_5CxWHprQzqNOvFlK_6Jsk-NGkEs8&dib_tag=se&keywords=lion+king+movie&qid=1726721702&sprefix=lion+king+movie%2Caps%2C103&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
        cover: "https://m.media-amazon.com/images/I/81fKiI-QGgL._SY445_.jpg",
    },
    {
        id: 104,
        title: "Closer",
        date: "2016",
        category: "Song",
        cover: "https://images.genius.com/35f26a5429926eb9cf3ecd89e9b3d79a.1000x1000x1.jpg",
    },
    {
        id: 105,
        title: "Brooklyn Nine-Nine",
        date: "2013",
        category: "TV Show",
        link: "https://www.amazon.de/Brooklyn-Nine-Nine-Staffel-Andy-Samberg/dp/B07R5Z7V9N/ref=sr_1_1?crid=1Q8ZJX5Q5GZ4R&dchild=1&keywords=brooklyn+nine+nine+staffel+1&qid=1626721856&sprefix=brooklyn+nine+nine+staffel+%2Caps%2C103&sr=8-1",
        cover: "https://m.media-amazon.com/images/I/91CQK2QyVNL._AC_SL1500_.jpg",
    },
    {
        id: 106,
        title: "I Have a Dream",
        date: "1963",
        category: "Other",
        link: "https://www.youtube.com/watch?v=smEqnnklfYs",
        cover: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Martin_Luther_King%2C_Jr._I_Have_a_Dream_speech_on_August_28%2C_1963%2C_Washington%2C_D.C.jpg",
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

export const getCreatorsByIds = (ids) => {
    return creators.filter(creator => ids.includes(creator.id));
};

export const getMediaById = (id) => {
    return media.find(m => m.id === id);
};