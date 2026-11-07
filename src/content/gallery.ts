// Albums. Put photos in /public/gallery/<album>/ and list them in "images".
// If "images" is empty, a coloured sample tile is shown.
export type Album = {
  id: string;
  hue: number; // colour of the sample tile
  title: { en: string; hi: string };
  images: string[];
  count: number; // used for the sample tiles
};

export const albums: Album[] = [
  { id: "annual-day", hue: 150, title: { en: "Annual Day", hi: "वार्षिक उत्सव" }, images: [], count: 12 },
  { id: "sports-day", hue: 35, title: { en: "Sports Day", hi: "खेल दिवस" }, images: [], count: 9 },
  { id: "art-craft", hue: 330, title: { en: "Art and Craft", hi: "कला और शिल्प" }, images: [], count: 8 },
  { id: "independence-day", hue: 20, title: { en: "Independence Day", hi: "स्वतंत्रता दिवस" }, images: [], count: 10 },
  { id: "festival", hue: 270, title: { en: "Festival Celebration", hi: "त्योहार उत्सव" }, images: [], count: 14 },
  { id: "classroom", hue: 200, title: { en: "Classroom Moments", hi: "कक्षा के पल" }, images: [], count: 7 },
];
