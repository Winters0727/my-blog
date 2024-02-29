import {
  defineDocumentType,
  defineNestedType,
  makeSource,
} from "contentlayer/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

/** @type {import('contentlayer/source-files').ComputedFields} */
const postComputedFields = {
  path: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
};

const GameDataNestedType = defineNestedType(() => ({
  name: "GameData",
  fields: {
    id: {
      type: "number",
      required: true,
    },
    title: {
      type: "string",
      required: true,
    },
  },
}));

const AbbreviationPostNestedType = defineNestedType(() => ({
  name: "AbbreviationPost",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    path: {
      type: "string",
      required: true,
    },
  },
}));

export const Post = defineDocumentType(() => ({
  name: "Post",
  contentType: "mdx",
  filePathPattern: "posts/*.mdx",
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
      default: "없음",
    },
    subCategory: {
      type: "string",
      default: "없음",
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
    previousPost: {
      type: "nested",
      of: AbbreviationPostNestedType,
    },
    nextPost: {
      type: "nested",
      of: AbbreviationPostNestedType,
    },
    series: {
      type: "string",
    },
    gameData: {
      type: "nested",
      of: GameDataNestedType,
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
  computedFields: postComputedFields,
}));

export default makeSource({
  contentDirPath: "src/mdx",
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
