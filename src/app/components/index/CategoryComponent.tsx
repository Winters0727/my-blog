"use client";

import { useMemo } from "react";

import CategoryMainTag from "@/app/components/index/categoryTags/CategoryMainTag";
import CategorySubTag from "@/app/components/index/categoryTags/CategorySubTag";

import {
  CategoryWrapper,
  SubTagListWrapper,
} from "@/app/styles/index/category.style";

import type { FC, Dispatch } from "react";
import type { MainState, MainAction } from "@/app/reducers/MainReducer";

interface CategoryAttributes {
  category: string;
  subCategory: string;
}

interface CategoryProps {
  state: MainState;
  dispatch: Dispatch<MainAction>;
  category: string;
  categoryData: {
    totalCount: number;
    [subCategory: string]: number;
  };
}

const CategoryComponent: FC<CategoryProps> = ({
  state,
  dispatch,
  category,
  categoryData,
}) => {
  const isSelected = useMemo(
    () => category === state.category,
    [category, state.category]
  );

  const checkTagSelected = (attrs: CategoryAttributes) =>
    state.category === attrs.category &&
    state.subCategory === attrs.subCategory;

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

  const handleClickSubTag = (subCategory: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    dispatch({
      type: "SELECT_SUBCATEGORY",
      payload: { subCategory },
    });
  };

  const subCategoryKeys = Object.keys(categoryData).filter(
    (subCategory) => subCategory !== "totalCount"
  );

  subCategoryKeys.sort((prev, next) => categoryData[next] - categoryData[prev]);

  return (
    <CategoryWrapper key={category}>
      <CategoryMainTag
        category={category}
        count={categoryData.totalCount}
        isSelected={isSelected}
        onClick={handleClickMainTag}
      />
      {isSelected && (
        <SubTagListWrapper>
          {subCategoryKeys.map((subCategory) => (
            <CategorySubTag
              key={subCategory}
              subCategory={subCategory}
              count={categoryData[subCategory]}
              isTagSelected={checkTagSelected({ category, subCategory })}
              onClick={handleClickSubTag(subCategory)}
            />
          ))}
        </SubTagListWrapper>
      )}
    </CategoryWrapper>
  );
};

export default CategoryComponent;
