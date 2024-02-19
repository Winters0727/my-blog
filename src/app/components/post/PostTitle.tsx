"use client";
import dayjs from "dayjs";
import "dayjs/locale/ko";

import { useThemeContext } from "@/app/context/ThemeContext";

import {
  PostTitleWrapper,
  PostTitleText,
  PostTagContainer,
  PostTag,
  PostTitleDate,
} from "@/app/styles/post.style";

import type { FC } from "react";

interface PostTitleProps {
  title: string;
  tags: string[];
  createdAt: string;
}

const PostTitle: FC<PostTitleProps> = ({ title, tags, createdAt }) => {
  const theme = useThemeContext();

  dayjs.locale("ko");

  return (
    <PostTitleWrapper className={theme && theme.mode}>
      <PostTitleText>{title}</PostTitleText>
      <PostTagContainer>
        {tags.map((tag, index) => (
          <PostTag className={theme && theme.mode} key={`${index}-${tag}`}>
            {tag}
          </PostTag>
        ))}
      </PostTagContainer>
      <PostTitleDate>
        {dayjs(createdAt).format("YYYY년 MM월 DD일 ddd요일")}
      </PostTitleDate>
    </PostTitleWrapper>
  );
};

export default PostTitle;
