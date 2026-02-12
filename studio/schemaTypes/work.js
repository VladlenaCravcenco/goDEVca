export default {
  name: "work",
  title: "Work (Project)",
  type: "document",
  fields: [
    // привязка к табу
    {
      name: "folder",
      title: "Folder (tab)",
      type: "reference",
      to: [{ type: "folder" }],
      validation: (Rule) => Rule.required(),
    },

    // заголовок проекта
    {
      name: "title",
      title: "Project title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },

    // год (у тебя используется в /год)
    {
      name: "year",
      title: "Year",
      type: "number",
      validation: (Rule) => Rule.min(2000).max(2100),
    },

    // короткое описание под заголовком
    {
      name: "shortDescription",
      title: "Short description",
      type: "text",
      rows: 3,
    },

    // теги (в твоём коде это фильтры-пилюли)
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
      description:
        "Например: Graphic design, Ads, 3d motion — или любые дополнительные.",
    },

    // блок справа (коллаб + лого компании)
    {
      name: "collab",
      title: "Collaboration block (right side)",
      type: "object",
      fields: [
        { name: "label", title: "Label", type: "string" }, // например GROWUP AGENCY
        {
          name: "text",
          title: "Text",
          type: "text",
          rows: 3,
        },
        {
          name: "companyLogo",
          title: "Company logo",
          type: "image",
          options: { hotspot: true },
        },
      ],
    },

    // медиа-сетка
    {
      name: "media",
      title: "Media",
      type: "array",
      of: [
        {
          name: "mediaItem",
          title: "Media item",
          type: "object",
          fields: [
            {
              name: "type",
              title: "Type",
              type: "string",
              validation: (Rule) => Rule.required(),
              options: {
                list: [
                  { title: "Image", value: "image" },
                  { title: "Video", value: "video" },
                ],
                layout: "radio",
              },
            },

            { name: "alt", title: "Alt", type: "string" },

            {
              name: "layout",
              title: "Grid layout",
              type: "object",
              fields: [
                {
                  name: "colSpan",
                  title: "Column span (2–12)",
                  type: "number",
                  initialValue: 4,
                  validation: (Rule) => Rule.min(2).max(12),
                },
                {
                  name: "rowSpan",
                  title: "Row span (2–12)",
                  type: "number",
                  initialValue: 3,
                  validation: (Rule) => Rule.min(2).max(12),
                },
              ],
            },

            // image
            {
              name: "image",
              title: "Image",
              type: "image",
              options: { hotspot: true },
              hidden: ({ parent }) => parent?.type !== "image",
            },

            // video
            {
              name: "video",
              title: "Video file",
              type: "file",
              options: { accept: "video/*" },
              hidden: ({ parent }) => parent?.type !== "video",
            },
            {
              name: "poster",
              title: "Video poster (optional)",
              type: "image",
              options: { hotspot: true },
              hidden: ({ parent }) => parent?.type !== "video",
            },
          ],

          preview: {
            select: {
              type: "type",
              image: "image",
              poster: "poster",
            },
            prepare({ type, image, poster }) {
              return {
                title: type === "video" ? "Video" : "Image",
                media: type === "video" ? poster : image,
              };
            },
          },
        },
      ],
    },

    // сортировка внутри таба
    {
      name: "sortOrder",
      title: "Sort order in folder",
      type: "number",
      initialValue: 0,
      description: "Чем меньше — тем выше проект внутри выбранного таба",
    },
  ],

  orderings: [
    {
      title: "Folder + sortOrder",
      name: "folderSort",
      by: [
        { field: "folder._ref", direction: "asc" },
        { field: "sortOrder", direction: "asc" },
        { field: "_createdAt", direction: "desc" },
      ],
    },
  ],

  preview: {
    select: {
      title: "title",
      folderTitle: "folder.title",
      media: "media.0.image",
    },
    prepare({ title, folderTitle, media }) {
      return {
        title,
        subtitle: folderTitle ? `Folder: ${folderTitle}` : "",
        media,
      };
    },
  },
};