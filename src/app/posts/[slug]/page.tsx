import { notFound } from "next/navigation";
import { useMDXComponent } from "next-contentlayer/hooks";
import { allPosts } from "contentlayer/generated";

import PostTitle from "@/app/components/post/PostTitle";
import PostContent from "@/app/components/post/PostContext";
import GameComponent from "@/app/components/post/GameComponent";

import { PostWrapper } from "@/app/styles/post.style";

import type { FC } from "react";
import type { Category } from "@/app/types/post.type";

interface PageProps {
  params: {
    slug: string;
  };
}
export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

const Page: FC<PageProps> = (props) => {
  const post = allPosts.find(
    (post) =>
      encodeURIComponent(post._raw.sourceFileName.replace(".mdx", "")) ===
      props.params.slug
  );

  const MDXComponent = useMDXComponent((post && post.body.code) || "");

  return post && post.published ? (
    <PostWrapper>
      <PostTitle
        title={post.title}
        tags={post.tags}
        createdAt={post.createdAt}
      />
      <PostContent>
        {post.category === "Game" && post.gameData && (
          <GameComponent id={post.gameData.id} title={post.gameData.title} />
        )}
        <MDXComponent />
      </PostContent>
    </PostWrapper>
  ) : (
    notFound()
  );
};

export default Page;
