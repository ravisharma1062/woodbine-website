import { defineField, defineType } from "sanity";

const today = () => new Date().toISOString().slice(0, 10);

export const album = defineType({
  name: "album",
  title: "Photo album",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Album name",
      type: "localizedString",
      validation: (r) => r.custom((v: { en?: string; hi?: string } | undefined) => (v?.en || v?.hi ? true : "Write the name in English or Hindi")),
    }),
    defineField({ name: "date", title: "Event date", type: "date", initialValue: today }),
    defineField({
      name: "images",
      title: "Photos",
      description: "Drag many photos here at once. An album with no photos is not shown on the website.",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
      options: { layout: "grid" },
    }),
  ],
  preview: {
    select: { en: "title.en", hi: "title.hi", images: "images", media: "images.0" },
    prepare: ({ en, hi, images, media }) => ({
      title: en || hi || "Untitled",
      subtitle: `${Array.isArray(images) ? images.length : 0} photos`,
      media,
    }),
  },
});
