"use client";

import { useState, useEffect } from "react";

import PostTitle from "@/app/components/post/PostTitle";
import RecommendComponent from "@/app/components/post/RecommendComponent";
import CommentList from "@/app/components/post/CommentList";

import { useThemeContext } from "@/app/context/ThemeContext";

import {
  getPostData,
  getCommentData,
  updatePostLikes,
} from "@/app/services/post.service";

import { PostContentWrapper } from "@/app/styles/post.style";

import type { FC } from "react";
import type { Post } from "contentlayer/generated";
import type { Comment, PostData } from "@/app/types/post.type";

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

  const [comments, setComments] = useState<Comment[]>([]);

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
    const fetchData = async () => {
      const postRes = await getPostData(post.slug);
      const commentRes = await getCommentData(post.slug);

      if (postRes.data) setPostData(postRes.data);
      if (commentRes.data) setComments(commentRes.data);
    };

    fetchData();
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
      <CommentList comments={comments} />
    </PostContentWrapper>
  );
};

export default PostContent;
