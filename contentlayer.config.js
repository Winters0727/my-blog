import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
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
    subTitle: {
      type: "string",
      default: "",
    },
    category: {
      type: "string",
      default: "일상",
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
      default: new Date().toDateString(),
    },
    updatedAt: {
      type: "date",
      default: new Date().toDateString(),
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
