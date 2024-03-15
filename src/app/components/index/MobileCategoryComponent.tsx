"use client";

import { useMemo } from "react";

import CategoryMainTag from "@/app/components/index/categoryTags/CategoryMainTag";

import { CategoryWrapper } from "@/app/styles/index/category.style";

import type { FC, Dispatch } from "react";
import type { MainState, MainAction } from "@/app/reducers/MainReducer";

interface MobileCategoryProps {
  state: MainState;
  dispatch: Dispatch<MainAction>;
  category: string;
  categoryData: {
    totalCount: number;
    [subCategory: string]: number;
  };
}

const MobileCategoryComponent: FC<MobileCategoryProps> = ({
  state,
  dispatch,
  category,
  categoryData,
}) => {
  const isSelected = useMemo(
    () => category === state.category,
    [category, state.category]
  );

  const handleClickMainTag = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (state.category !== category) {
      dispatch({
        type: "SELECT_CATEGORY",
        payload: { category },
      });
    }
  };

  return (
    <CategoryWrapper key={category}>
      <CategoryMainTag
        category={category}
        count={categoryData.totalCount}
        isMobile={true}
        isSelected={isSelected}
        onClick={handleClickMainTag}
      />
    </CategoryWrapper>
  );
};

export default MobileCategoryComponent;
