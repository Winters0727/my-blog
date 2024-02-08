"use client";

import { useThemeContext } from "@/app/context/ThemeContext";

import { PostContentWrapper } from "@/app/styles/post.style";

const PostContent = ({ children }: { children: React.ReactNode }) => {
  const theme = useThemeContext();

  return (
    <PostContentWrapper className={theme.mode}>{children}</PostContentWrapper>
  );
};

export default PostContent;
