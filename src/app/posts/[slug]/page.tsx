import { notFound } from "next/navigation";
import { useMDXComponent } from "next-contentlayer/hooks";
import { allPosts } from "contentlayer/generated";

import PostContent from "@/app/components/post/PostContent";
import GameContent from "@/app/components/post/GameContent";
import SeriesList from "@/app/components/post/SeriesList";

import { METADATA } from "@/app/constant";

import { PostWrapper } from "@/app/styles/post.style";

import type { NextPage, Metadata } from "next";

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

export const metadata: Metadata = {
  ...METADATA,
};

export const generateStaticParams = async () =>
  posts.map((post) => ({ slug: post._raw.flattenedPath }));

const Page: NextPage<PageProps> = (props) => {
  const post = posts.find(
    (post) =>
      encodeURIComponent(post._raw.sourceFileName.replace(".mdx", "")) ===
      props.params.slug
  );

  if (!post || !post.published) notFound();

  metadata.title = post.title;

  if (metadata.openGraph) metadata.openGraph.title = post.title;

  const MDXComponent = useMDXComponent(post?.body.code || "");

  return (
    <PostWrapper>
      <PostContent post={post}>
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
