import { defineField, defineType } from "sanity";

const today = () => new Date().toISOString().slice(0, 10);

export const video = defineType({
  name: "video",
  title: "Video",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "localizedString",
      validation: (r) => r.custom((v: { en?: string; hi?: string } | undefined) => (v?.en || v?.hi ? true : "Write the title in English or Hindi")),
    }),
    defineField({
      name: "youtubeUrl",
      title: "YouTube link",
      description: "Upload the video to YouTube first, then paste its link here (for example https://youtu.be/abc123XYZ00).",
      type: "url",
      validation: (r) => r.required().uri({ scheme: ["https"] }),
    }),
    defineField({ name: "date", title: "Date", type: "date", initialValue: today }),
  ],
  preview: {
    select: { en: "title.en", hi: "title.hi", url: "youtubeUrl" },
    prepare: ({ en, hi, url }) => ({ title: en || hi || "Untitled", subtitle: url }),
  },
});
