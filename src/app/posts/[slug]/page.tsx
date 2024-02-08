import { notFound } from "next/navigation";
import { useMDXComponent } from "next-contentlayer/hooks";
import { allPosts } from "contentlayer/generated";

import PostTitle from "@/app/components/post/PostTitle";
import PostContent from "@/app/components/post/PostContext";

import { PostWrapper } from "@/app/styles/post.style";

import type { FC } from "react";

interface PageProps {
  params: {
    slug: string;
  };
}
export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

const Page: FC<PageProps> = (props) => {
  const post = allPosts.find(
    (post) => encodeURIComponent(post._raw.flattenedPath) === props.params.slug
  );

  const MDXComponent = useMDXComponent((post && post.body.code) || "");

  return post ? (
    <PostWrapper>
      <PostTitle
        title={post.title}
        tags={post.tags}
        createdAt={post.createdAt}
      />
      <PostContent>
        <MDXComponent />
      </PostContent>
    </PostWrapper>
  ) : (
    notFound()
  );
};

export default Page;
