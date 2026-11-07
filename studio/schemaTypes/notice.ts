import { defineField, defineType } from "sanity";

const today = () => new Date().toISOString().slice(0, 10);

export const notice = defineType({
  name: "notice",
  title: "Notice",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "localizedString",
      validation: (r) => r.custom((v: { en?: string; hi?: string } | undefined) => (v?.en || v?.hi ? true : "Write the title in English or Hindi")),
    }),
    defineField({ name: "date", title: "Date", type: "date", initialValue: today, validation: (r) => r.required() }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      initialValue: "general",
      options: {
        layout: "radio",
        list: [
          { title: "General", value: "general" },
          { title: "Exam", value: "exam" },
          { title: "Holiday", value: "holiday" },
          { title: "Event", value: "event" },
          { title: "Fees", value: "fees" },
        ],
      },
    }),
    defineField({ name: "text", title: "Details", type: "localizedText" }),
    defineField({
      name: "pdf",
      title: "PDF file (optional)",
      description: "Upload a circular, time table, etc. Parents will see a Download link.",
      type: "file",
      options: { accept: "application/pdf" },
    }),
  ],
  orderings: [{ title: "Newest first", name: "dateDesc", by: [{ field: "date", direction: "desc" }] }],
  preview: {
    select: { en: "title.en", hi: "title.hi", date: "date", category: "category" },
    prepare: ({ en, hi, date, category }) => ({ title: en || hi || "Untitled", subtitle: [date, category].filter(Boolean).join(" · ") }),
  },
});
