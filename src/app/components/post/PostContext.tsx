"use client";

import { useThemeContext } from "@/app/context/ThemeContext";

import { PostContentWrapper } from "@/app/styles/post.style";

import type { FC } from "react";

interface PostContentProps {
  children: React.ReactNode;
}

const PostContent: FC<PostContentProps> = ({ children }) => {
  const theme = useThemeContext();

  return (
    <PostContentWrapper className={theme.mode}>{children}</PostContentWrapper>
  );
};

export default PostContent;
