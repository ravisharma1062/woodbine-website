import { defineField, defineType } from "sanity";

// English + Hindi side by side. If one is left empty the website shows the other.
export const localizedString = defineType({
  name: "localizedString",
  title: "English and Hindi",
  type: "object",
  fields: [
    defineField({ name: "en", title: "English", type: "string" }),
    defineField({ name: "hi", title: "Hindi (हिन्दी)", type: "string" }),
  ],
});

export const localizedText = defineType({
  name: "localizedText",
  title: "English and Hindi (long text)",
  type: "object",
  fields: [
    defineField({ name: "en", title: "English", type: "text", rows: 4 }),
    defineField({ name: "hi", title: "Hindi (हिन्दी)", type: "text", rows: 4 }),
  ],
});
