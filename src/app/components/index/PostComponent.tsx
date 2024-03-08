"use client";

import { useMemo, memo } from "react";
import dayjs from "dayjs";
import "dayjs/locale/ko";

import { useThemeContext } from "@/app/context/ThemeContext";

import {
  PostContainer,
  PostInfoArea,
  PostImageArea,
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

  const currentDate = dayjs(Date.now());
  const createdDate = dayjs(createdAt);

  const dateDifference = useMemo(() => {
    const secondDifference = currentDate.diff(createdDate, "second");
    if (secondDifference < 60) return `${secondDifference}초 전`;

    const minuteDifference = currentDate.diff(createdDate, "minute");
    if (minuteDifference < 60) return `${minuteDifference}분 전`;

    const hourDifference = currentDate.diff(createdDate, "hour");
    if (hourDifference < 24) return `${hourDifference}시간 전`;

    const dayDifference = currentDate.diff(createdDate, "day");
    if (dayDifference < 7) return `${dayDifference}일 전`;

    return createdDate.format("YYYY년 MM월 DD일 ddd요일");
  }, [createdDate, currentDate]);

  return (
    <PostContainer className={theme?.mode}>
      <PostInfoArea>
        <PostTitle>{title}</PostTitle>
        <PostDescription>{description}</PostDescription>
        <PostInfo>{dateDifference}</PostInfo>
      </PostInfoArea>
      <PostImageArea>
        <PostThumbnail src={thumbnail} alt={`${title}-thumbnail-image`} />
      </PostImageArea>
    </PostContainer>
  );
};

export default memo(PostComponent);
