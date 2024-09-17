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
];

export const media = [
  {
    id: 101,
    title: "Inspiration BookDetail",
    subtitle: "Subtitle of the book",
    genre: "Self-help",
    link: "https://www.amazon.de/Little-Life-Shortlisted-Booker-Prize/dp/1447294831/ref=asc_df_1447294831?tag=bingshoppin0b-21&linkCode=df0&hvadid=80470564161838&hvnetw=o&hvqmt=e&hvbmt=be&hvdev=c&hvlocint=&hvlocphy=&hvtargid=pla-4584070139220793&psc=11",
    cover: "https://m.media-amazon.com/images/I/71N9Dy2G5+L._SL1500_.jpg",
  },
  {
    id: 102,
    title: "Motivation BookDetail",
    subtitle: "Subtitle of the book",
    genre: "Motivation",
    link: "http://example.com/book2",
    cover: "http://example.com/book2/cover.jpg",
  },
];

export const creators = [
  { id: 201, name: "John", lastName: "Doe" },
  { id: 202, name: "Jane", lastName: "Smith" },
  { id: 203, name: "Alice-Clara", lastName: "Johnson-Meyers" },
  { id: 204, name: "Bob", lastName: "Brown" },
];

export const getCreatorsByIds = (ids) => {
  return creators.filter(creator => ids.includes(creator.id));
};

export const getMediaById = (id) => {
  return media.find(m => m.id === id);
};