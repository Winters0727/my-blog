"use client";

import { useState, useEffect } from "react";

import PostTitle from "@/app/components/post/PostTitle";
import RecommendComponent from "@/app/components/post/RecommendComponent";

import { useThemeContext } from "@/app/context/ThemeContext";

import { getPostData, updatePostLikes } from "@/app/services/post.service";

import { PostContentWrapper } from "@/app/styles/post.style";

import type { FC } from "react";
import type { Post } from "contentlayer/generated";
import type { PostData } from "@/app/types/post.type";

interface PostContentProps {
  post: Post;
  children: React.ReactNode;
}

const PostContent: FC<PostContentProps> = ({ post, children }) => {
  const [postData, setPostData] = useState<PostData>({
    slug: "",
    views: 0,
    likes: 0,
    isLike: false,
  });

  const theme = useThemeContext();

  const handleClickRecommend = async (e: React.MouseEvent) => {
    const { data } = await updatePostLikes(post.slug);

    if (data)
      setPostData((prevData) => ({
        ...prevData,
        likes: data.likes,
        isLike: data?.isLike,
      }));
  };

  useEffect(() => {
    const fetchPostData = async () => {
      const res = await getPostData(post.slug);

      if (res.data) setPostData(res.data);
    };

    fetchPostData();
  }, []);

  return (
    <PostContentWrapper className={theme.mode}>
      <PostTitle
        title={post.title}
        tags={post.tags}
        views={postData.views}
        createdAt={post.createdAt}
      />
      {children}
      <RecommendComponent
        likes={postData.likes}
        isLike={postData.isLike}
        onClick={handleClickRecommend}
      />
    </PostContentWrapper>
  );
};

export default PostContent;
