import { notFound } from "next/navigation";
import { useMDXComponent } from "next-contentlayer/hooks";
import { allPosts } from "contentlayer/generated";

import PostTitle from "@/app/components/post/PostTitle";
import PostContent from "@/app/components/post/PostContext";
import GameContent from "@/app/components/post/GameContent";
import SeriesList from "@/app/components/post/SeriesList";

import { PostWrapper } from "@/app/styles/post.style";

import type { FC } from "react";

interface PageProps {
  params: {
    slug: string;
  };
}

const posts = [...allPosts];

posts.sort(
  (prev, next) =>
    new Date(prev.createdAt).getTime() - new Date(next.createdAt).getTime()
);

export const generateStaticParams = async () =>
  posts.map((post) => ({ slug: post._raw.flattenedPath }));

const Page: FC<PageProps> = (props) => {
  const post = posts.find(
    (post) =>
      encodeURIComponent(post._raw.sourceFileName.replace(".mdx", "")) ===
      props.params.slug
  );

  if (!post || !post.published) notFound();

  const MDXComponent = useMDXComponent(post?.body.code || "");

  return (
    <PostWrapper>
      <PostTitle
        title={post.title}
        tags={post.tags}
        createdAt={post.createdAt}
      />
      <PostContent>
        {post.series && (
          <SeriesList
            title={post.series}
            series={posts.filter(
              (comparedPost) => comparedPost.series === post.series
            )}
          />
        )}
        {post.gameData && (
          <GameContent id={post.gameData.id} title={post.gameData.title} />
        )}
        <MDXComponent />
      </PostContent>
    </PostWrapper>
  );
};

export default Page;
