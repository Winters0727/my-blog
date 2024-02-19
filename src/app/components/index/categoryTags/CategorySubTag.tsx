"use client";

import { useThemeContext } from "@/app/context/ThemeContext";

import {
  SubTagWrapper,
  SubTagText,
  SubTagCount,
} from "@/app/styles/index/category.style";

import type { FC } from "react";

interface SubCategoryTagProps {
  subCategory: string;
  count: number;
  isTagSelected: boolean;
  onClick: (e: React.MouseEvent) => void;
}

const CategorySubTag: FC<SubCategoryTagProps> = ({
  subCategory,
  count,
  isTagSelected,
  onClick,
}) => {
  const theme = useThemeContext();

  return (
    <SubTagWrapper
      className={
        theme && isTagSelected ? [theme.mode, "selected"].join(" ") : theme.mode
      }
      onClick={onClick}
    >
      <SubTagText>{subCategory}</SubTagText>
      <SubTagCount>({count})</SubTagCount>
    </SubTagWrapper>
  );
};

export default CategorySubTag;
