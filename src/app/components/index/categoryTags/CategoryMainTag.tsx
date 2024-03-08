"use client";

import { useThemeContext } from "@/app/context/ThemeContext";

import {
  TagWrapper,
  TagText,
  TagCount,
} from "@/app/styles/index/category.style";

import type { FC } from "react";

interface CategoryTagProps {
  category: string;
  count: number;
  isMobile?: boolean;
  isSelected: boolean;
  onClick: (e: React.MouseEvent) => void;
}

const CategoryMainTag: FC<CategoryTagProps> = ({
  category,
  count,
  isMobile,
  isSelected,
  onClick,
}) => {
  const theme = useThemeContext();

  return (
    <TagWrapper
      className={
        theme && isSelected ? [theme.mode, "selected"].join(" ") : theme.mode
      }
      onClick={onClick}
    >
      <TagText>{category}</TagText>
      {(isMobile || !isSelected) && <TagCount>({count})</TagCount>}
    </TagWrapper>
  );
};

export default CategoryMainTag;
