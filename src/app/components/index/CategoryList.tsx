"use client";

import { useMemo } from "react";

import CategoryComponent from "./CategoryComponent";

import { useThemeContext } from "@/app/context/ThemeContext";

import {
  CategoryWrapper,
  TagListWrapper,
  TagWrapper,
  TagText,
} from "@/app/styles/index/category.style";

import type { Dispatch, FC } from "react";
import type { MainState, MainAction } from "@/app/reducers/MainReducer";

interface CategoryListProps {
  categories: {
    [category: string]: {
      totalCount: number;
      [subCategory: string]: number;
    };
  };
  state: MainState;
  dispatch: Dispatch<MainAction>;
}

const CategoryList: FC<CategoryListProps> = ({
  categories,
  state,
  dispatch,
}) => {
  const isTagNotSelected = useMemo(
    () => !state.category && !state.subCategory,
    [state.category, state.subCategory]
  );

  const theme = useThemeContext();

  const categoryKeys = Object.keys(categories);

  categoryKeys.sort((prev, next) =>
    categories[prev] < categories[next] ? -1 : 1
  );

  return (
    <TagListWrapper>
      <CategoryWrapper>
        <TagWrapper
          className={
            theme && isTagNotSelected
              ? [theme.mode, "selected"].join(" ")
              : theme.mode
          }
          onClick={() =>
            dispatch({
              type: "SELECT_CATEGORY",
              payload: { category: "" },
            })
          }
        >
          <TagText>전체보기</TagText>
        </TagWrapper>
      </CategoryWrapper>
      {categoryKeys.map((category) => {
        const categoryData = categories[category];

        return (
          <CategoryComponent
            key={category}
            state={state}
            dispatch={dispatch}
            category={category}
            categoryData={categoryData}
          />
        );
      })}
    </TagListWrapper>
  );
};

export default CategoryList;
