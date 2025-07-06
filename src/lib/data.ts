export type Destination = {
  name: string;
  slug: string;
  location: string;
  description: string;
  longDescription: string;
  image: string;
  gallery: { id: number; src: string; alt: string, hint: string }[];
};

export type Review = {
  id: number;
  destinationSlug: string;
  name: string;
  avatar: string;
  rating: number;
  comment: string;
};

export type GalleryImage = {
    id: number;
    src: string;
    alt: string;
    hint: string;
}

export const destinations: Destination[] = [
  {
    name: "Paris",
    slug: "paris-france",
    location: "France",
    description: "The city of love, lights, and art.",
    longDescription: "Paris, France's capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine. Beyond such landmarks as the Eiffel Tower and the 12th-century, Gothic Notre-Dame cathedral, the city is known for its cafe culture and designer boutiques along the Rue du Faubourg Saint-Honoré.",
    image: "https://placehold.co/600x400.png",
    gallery: [
        { id: 1, src: "https://placehold.co/800x600.png", alt: "Eiffel Tower", hint: "eiffel tower"},
        { id: 2, src: "https://placehold.co/800x600.png", alt: "Louvre Museum", hint: "museum interior"},
        { id: 3, src: "https://placehold.co/800x600.png", alt: "Seine River Cruise", hint: "river boat"},
        { id: 4, src: "https://placehold.co/800x600.png", alt: "Montmartre streets", hint: "city street"},
    ]
  },
  {
    name: "Kyoto",
    slug: "kyoto-japan",
    location: "Japan",
    description: "Ancient temples, beautiful gardens, and traditional geishas.",
    longDescription: "Kyoto, once the capital of Japan, is a city on the island of Honshu. It's famous for its numerous classical Buddhist temples, as well as gardens, imperial palaces, Shinto shrines and traditional wooden houses. It’s also known for formal traditions such as kaiseki dining, consisting of multiple courses of precise dishes, and geisha, female entertainers often found in the Gion district.",
    image: "https://placehold.co/600x400.png",
    gallery: [
        { id: 1, src: "https://placehold.co/800x600.png", alt: "Kinkaku-ji Temple", hint: "temple japan"},
        { id: 2, src: "https://placehold.co/800x600.png", alt: "Arashiyama Bamboo Grove", hint: "bamboo forest"},
        { id: 3, src: "https://placehold.co/800x600.png", alt: "Fushimi Inari Shrine", hint: "shrine japan"},
        { id: 4, src: "https://placehold.co/800x600.png", alt: "Gion District", hint: "historic street"},
    ]
  },
  {
    name: "Santorini",
    slug: "santorini-greece",
    location: "Greece",
    description: "Iconic blue-domed churches and stunning caldera views.",
    longDescription: "Santorini is one of the Cyclades islands in the Aegean Sea. It was devastated by a volcanic eruption in the 16th century BC, forever shaping its rugged landscape. The whitewashed, cubiform houses of its 2 principal towns, Fira and Oia, cling to cliffs above an underwater caldera (crater). They overlook the sea, small islands to the west and beaches made up of black, red and white lava pebbles.",
    image: "https://placehold.co/600x400.png",
    gallery: [
        { id: 1, src: "https://placehold.co/800x600.png", alt: "Oia village sunset", hint: "greece sunset"},
        { id: 2, src: "https://placehold.co/800x600.png", alt: "Blue domed church", hint: "blue dome"},
        { id: 3, src: "https://placehold.co/800x600.png", alt: "Red Beach", hint: "red beach"},
        { id: 4, src: "https://placehold.co/800x600.png", alt: "Caldera view", hint: "caldera view"},
    ]
  },
  {
    name: "Bora Bora",
    slug: "bora-bora",
    location: "French Polynesia",
    description: "Overwater bungalows and turquoise lagoons.",
    longDescription: "Bora Bora is a small South Pacific island northwest of Tahiti in French Polynesia. Surrounded by sand-fringed motus (islets) and a turquoise lagoon protected by a coral reef, it’s known for its scuba diving. It’s also a popular luxury resort destination where some guest bungalows are perched over the water on stilts. At the island's center rises Mt. Otemanu, a 727m dormant volcano.",
    image: "https://placehold.co/600x400.png",
    gallery: [
        { id: 1, src: "https://placehold.co/800x600.png", alt: "Overwater bungalows", hint: "overwater bungalow"},
        { id: 2, src: "https://placehold.co/800x600.png", alt: "Turquoise lagoon", hint: "turquoise lagoon"},
        { id: 3, src: "https://placehold.co/800x600.png", alt: "Mount Otemanu", hint: "tropical mountain"},
        { id: 4, src: "https://placehold.co/800x600.png", alt: "Coral reef snorkeling", hint: "coral reef"},
    ]
  },
];

export const reviews: Review[] = [
    { id: 1, destinationSlug: 'paris-france', name: 'Alex Johnson', avatar: 'https://placehold.co/100x100.png', rating: 5, comment: 'Paris was an absolute dream! The art, the food, the atmosphere... I can\'t wait to go back.' },
    { id: 2, destinationSlug: 'kyoto-japan', name: 'Maria Garcia', avatar: 'https://placehold.co/100x100.png', rating: 5, comment: 'Kyoto is so serene and beautiful. The temples and gardens are out of this world. A truly spiritual experience.' },
    { id: 3, destinationSlug: 'santorini-greece', name: 'David Smith', avatar: 'https://placehold.co/100x100.png', rating: 5, comment: 'The views in Santorini are breathtaking. Every corner is a postcard. The sunsets are unreal!' },
    { id: 4, destinationSlug: 'bora-bora', name: 'Emily White', avatar: 'https://placehold.co/100x100.png', rating: 4, comment: 'Paradise on Earth. It is very expensive, but the beauty of the lagoon is worth it for a special occasion.' },
    { id: 5, destinationSlug: 'paris-france', name: 'John Doe', avatar: 'https://placehold.co/100x100.png', rating: 4, comment: 'A fantastic city with so much to see. It can be a bit crowded, but the landmarks are iconic for a reason.' },
];

export const galleryImages: GalleryImage[] = [
    { id: 1, src: 'https://placehold.co/400x400.png', alt: 'Beach sunset', hint: 'beach sunset' },
    { id: 2, src: 'https://placehold.co/400x400.png', alt: 'Mountain range', hint: 'mountain range' },
    { id: 3, src: 'https://placehold.co/400x400.png', alt: 'Bustling city street', hint: 'city street' },
    { id: 4, src: 'https://placehold.co/400x400.png', alt: 'Ancient ruins', hint: 'ancient ruins' },
    { id: 5, src: 'https://placehold.co/400x400.png', alt: 'Lush forest', hint: 'lush forest' },
    { id: 6, src: 'https://placehold.co/400x400.png', alt: 'Desert landscape', hint: 'desert landscape' },
    { id: 7, src: 'https://placehold.co/400x400.png', alt: 'Cruise ship deck', hint: 'cruise ship' },
    { id: 8, src: 'https://placehold.co/400x400.png', alt: 'Tropical waterfall', hint: 'tropical waterfall' },
]
