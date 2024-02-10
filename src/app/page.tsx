import { allPosts } from "contentlayer/generated";

import PostList from "@/app/components/index/PostList";

const Home = () => {
  const posts = [...allPosts];

  posts.sort(
    (prev, next) =>
      new Date(next.createdAt).getTime() - new Date(prev.createdAt).getTime()
  );

  return (
    <>
      <PostList posts={posts} />
    </>
  );
};

export default Home;
