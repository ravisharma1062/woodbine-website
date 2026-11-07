// Add new notices at the top. Later these can come from a CMS.
// pdf: put the file in /public/notices and write "/notices/file.pdf"
export type Category = "general" | "exam" | "holiday" | "event" | "fees";

export type Notice = {
  id: string;
  date: string; // YYYY-MM-DD
  category: Category;
  title: { en: string; hi: string };
  text: { en: string; hi: string };
  pdf?: string;
};

export const notices: Notice[] = [
  {
    id: "admission-open",
    date: "2026-11-05",
    category: "general",
    title: { en: "Admissions open for the new session", hi: "नए सत्र के लिए प्रवेश जारी" },
    text: {
      en: "Admission forms are available at the school office. Please visit with your child.",
      hi: "प्रवेश फॉर्म स्कूल कार्यालय में उपलब्ध हैं। कृपया अपने बच्चे के साथ आइए।",
    },
  },
  {
    id: "annual-day",
    date: "2026-11-01",
    category: "event",
    title: { en: "Annual Day celebration", hi: "वार्षिक उत्सव समारोह" },
    text: {
      en: "Parents are invited to the Annual Day programme. Children should come in the given dress.",
      hi: "अभिभावकों को वार्षिक उत्सव कार्यक्रम में आमंत्रित किया जाता है। बच्चे बताई गई पोशाक में आएँ।",
    },
  },
  {
    id: "chhath-holiday",
    date: "2026-10-28",
    category: "holiday",
    title: { en: "Holiday for Chhath Puja", hi: "छठ पूजा की छुट्टी" },
    text: {
      en: "The school will remain closed for Chhath Puja. Classes will start again as per the notice.",
      hi: "छठ पूजा के लिए स्कूल बंद रहेगा। कक्षाएँ सूचना के अनुसार फिर शुरू होंगी।",
    },
  },
  {
    id: "term-exam",
    date: "2026-10-20",
    category: "exam",
    title: { en: "Term exam time table", hi: "सत्र परीक्षा समय सारणी" },
    text: {
      en: "The time table for the term exam is ready. Please check and help your child to prepare.",
      hi: "सत्र परीक्षा की समय सारणी तैयार है। कृपया देखें और बच्चे की तैयारी में मदद करें।",
    },
  },
  {
    id: "fee-reminder",
    date: "2026-10-10",
    category: "fees",
    title: { en: "Fee payment reminder", hi: "शुल्क जमा करने की याद दिलाना" },
    text: {
      en: "Parents are requested to pay the pending fees before the last date.",
      hi: "अभिभावकों से अनुरोध है कि बकाया शुल्क अंतिम तिथि से पहले जमा करें।",
    },
  },
];
