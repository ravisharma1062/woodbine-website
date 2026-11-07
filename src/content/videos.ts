// Upload the video to YouTube, then paste only the video ID here.
// Example: https://youtu.be/dQw4w9WgXcQ  ->  youtubeId: "dQw4w9WgXcQ"
export type Video = {
  id: string;
  youtubeId: string; // leave empty to show "coming soon"
  title: { en: string; hi: string };
};

export const videos: Video[] = [
  { id: "annual-day", youtubeId: "", title: { en: "Annual Day highlights", hi: "वार्षिक उत्सव की झलकियाँ" } },
  { id: "sports-day", youtubeId: "", title: { en: "Sports Day fun", hi: "खेल दिवस की मस्ती" } },
  { id: "rhymes", youtubeId: "", title: { en: "Rhymes by our little stars", hi: "हमारे नन्हे सितारों की कविताएँ" } },
  { id: "independence", youtubeId: "", title: { en: "Independence Day programme", hi: "स्वतंत्रता दिवस कार्यक्रम" } },
];
