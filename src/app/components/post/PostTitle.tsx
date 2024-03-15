"use client";

import dayjs from "dayjs";
import "dayjs/locale/ko";

import { useThemeContext } from "@/app/context/ThemeContext";

import {
  PostTitleWrapper,
  PostTitleText,
  PostTagContainer,
  PostTag,
  PostTitleDataContainer,
} from "@/app/styles/post.style";

import type { FC } from "react";

interface PostTitleProps {
  title: string;
  tags: string[];
  views: number;
  createdAt: string;
}

const PostTitle: FC<PostTitleProps> = ({ title, tags, views, createdAt }) => {
  const theme = useThemeContext();

  dayjs.locale("ko");

  return (
    <PostTitleWrapper className={theme?.mode}>
      <PostTitleText>{title}</PostTitleText>
      <PostTagContainer>
        {tags.map((tag, index) => (
          <PostTag className={theme?.mode} key={`${index}-${tag}`}>
            {tag}
          </PostTag>
        ))}
      </PostTagContainer>
      <PostTitleDataContainer>
        {dayjs(createdAt).format("YYYY년 MM월 DD일 ddd요일")}
        <br />
        조회수: {views}회
      </PostTitleDataContainer>
    </PostTitleWrapper>
  );
};

export default PostTitle;
