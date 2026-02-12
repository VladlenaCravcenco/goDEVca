export default {
  name: "folder",
  title: "Folder (Tabs)",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Tab title",
      type: "string",
      validation: (Rule) => Rule.required(),
      description: "То, что увидишь в табах: Graphic design / Ads / 3d motion",
    },

    {
      name: "tabKey",
      title: "Tab key (fixed)",
      type: "string",
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          { title: "Graphic design", value: "graphic" },
          { title: "Ads", value: "ads" },
          { title: "3d motion", value: "motion3d" },
        ],
        layout: "radio",
      },
      description:
        "Стабильный ключ. Чтобы фронт мог фильтровать без зависимости от текста.",
    },

    {
      name: "sortOrder",
      title: "Sort order",
      type: "number",
      initialValue: 0,
      description: "Чем меньше — тем левее/выше в табах",
    },
  ],

  preview: {
    select: { title: "title", tabKey: "tabKey" },
    prepare({ title, tabKey }) {
      return {
        title,
        subtitle: tabKey ? `key: ${tabKey}` : "",
      };
    },
  },
};