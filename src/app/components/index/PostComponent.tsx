"use client";

import { useMemo, memo } from "react";
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

  const currentDate = dayjs(Date.now());
  const createdDate = dayjs(createdAt);

  const dateDifference = useMemo(() => {
    const secondDifference = currentDate.diff(createdDate, "second");
    const minuteDifference = currentDate.diff(createdDate, "minute");
    const hourDifference = currentDate.diff(createdDate, "hour");
    const dayDifference = currentDate.diff(createdDate, "day");

    if (secondDifference < 60) return `${secondDifference}초 전`;
    else if (minuteDifference < 60) return `${minuteDifference}분 전`;
    else if (hourDifference < 24) return `${hourDifference}시간 전`;
    else if (dayDifference < 7) return `${dayDifference}일 전`;
    else return createdDate.format("YYYY년 MM월 DD일 ddd요일");
  }, [createdDate, currentDate]);

  return (
    <PostContainer className={theme && theme.mode}>
      <PostLeftArea>
        <PostTitle>{title}</PostTitle>
        <PostDescription>{description}</PostDescription>
        <PostInfo>{dateDifference}</PostInfo>
      </PostLeftArea>
      <PostRightArea>
        <PostThumbnail src={thumbnail} />
      </PostRightArea>
    </PostContainer>
  );
};

export default memo(PostComponent);
