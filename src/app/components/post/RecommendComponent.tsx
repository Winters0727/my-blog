"use client";

import {
  PostRecommendWrapper,
  PostRecommendImage,
  PostRecommendCount,
} from "@/app/styles/post.style";

import { useThemeContext } from "@/app/context/ThemeContext";

import type { FC } from "react";

interface RecommendProps {
  likes: number;
  isLike: boolean;
  onClick: (e: React.MouseEvent) => void;
}

const RecommendComponent: FC<RecommendProps> = ({ likes, isLike, onClick }) => {
  const theme = useThemeContext();

  return (
    <PostRecommendWrapper className={theme?.mode} onClick={onClick}>
      <PostRecommendImage
        src={`/images/icons/star-${isLike ? "filled" : "empty"}.svg`}
        alt="추천 이미지"
      />
      <PostRecommendCount>({likes})</PostRecommendCount>
    </PostRecommendWrapper>
  );
};

export default RecommendComponent;
