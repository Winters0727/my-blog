import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  path: {
    type: "string",
    resolve: (doc) => `/posts/${doc._raw.flattenedPath}`,
  },
};

export const Post = defineDocumentType(() => ({
  name: "Post",
  contentType: "mdx",
  filePathPattern: "**/*.mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
      default: "",
    },
    category: {
      type: "string",
      default: "일상",
    },
    thumbnail: {
      type: "string",
      default: "images/default-thumbnail.jpg",
    },
    tags: {
      type: "list",
      of: {
        type: "string",
      },
      default: [],
    },
    published: {
      type: "boolean",
      default: true,
    },
    createdAt: {
      type: "date",
      required: true,
    },
    updatedAt: {
      type: "date",
      required: true,
    },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: "src/posts",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypePrettyCode,
      rehypeSlug,
      {
        theme: "github-dark",
      },
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["subheading-anchor"],
            ariaLabel: "Link to Section",
          },
        },
      ],
    ],
  },
});
