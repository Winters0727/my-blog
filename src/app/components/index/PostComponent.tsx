"use client";

import dayjs from "dayjs";
import "dayjs/locale/ko";

import { useThemeContext } from "@/app/context/ThemeContext";

import {
  PostContainer,
  PostLeftArea,
  PostRightArea,
  PostTitle,
  PostDescription,
  PostThumbnail,
  PostInfo,
} from "@/app/styles/index/post.style";

import type { FC } from "react";
import type { Post } from "contentlayer/generated";

interface PostProps {
  post: Post;
}

const PostComponent: FC<PostProps> = ({ post }) => {
  const { title, description, thumbnail, createdAt } = post;

  const theme = useThemeContext();

  dayjs.locale("ko");

  return (
    <PostContainer className={theme && theme.mode}>
      <PostLeftArea>
        <PostTitle>{title}</PostTitle>
        <PostDescription>{description}</PostDescription>
        <PostInfo>
          {dayjs(createdAt).format("YYYY년 MM월 DD일 ddd요일")}
        </PostInfo>
      </PostLeftArea>
      <PostRightArea>
        <PostThumbnail src={thumbnail} />
      </PostRightArea>
    </PostContainer>
  );
};

export default PostComponent;
