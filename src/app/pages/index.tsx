"use client";

import { useMemo, useReducer } from "react";
import { allPosts } from "contentlayer/generated";

import PostList from "@/app/components/index/PostList";
import CategoryList from "@/app/components/index/CategoryList";
import TempComponent from "../components/index/TempComponent";

import { MainReducer } from "@/app/reducers/MainReducer";

import { POST_COUNT } from "@/app/constant/post";

import { MainWrapper } from "@/app/styles/index.style";

import type { NextPage } from "next";

interface CategoriesWithCount {
  [category: string]: {
    totalCount: number;
    [subCategory: string]: number;
  };
}

const MainPage: NextPage = () => {
  const posts = [...allPosts];

  const categories: CategoriesWithCount = useMemo(() => {
    const categoriesWithCount: CategoriesWithCount = {};

    for (const post of allPosts) {
      const { category, subCategory } = post;

      if (category in categoriesWithCount)
        categoriesWithCount[category].totalCount += 1;
      else categoriesWithCount[category] = { totalCount: 1 };

      if (subCategory in categoriesWithCount[category])
        categoriesWithCount[category][subCategory] += 1;
      else categoriesWithCount[category][subCategory] = 1;
    }

    return categoriesWithCount;
  }, []);

  posts.sort(
    (prev, next) =>
      new Date(next.createdAt).getTime() - new Date(prev.createdAt).getTime()
  );

  const [state, dispatch] = useReducer(MainReducer, {
    category: "",
    subCategory: "",
    currentPosts: posts.slice(0, POST_COUNT),
    totalPosts: posts,
    categorizedPosts: [...posts],
  });

  return (
    <MainWrapper>
      <CategoryList state={state} dispatch={dispatch} categories={categories} />
      <PostList state={state} dispatch={dispatch} />
      <TempComponent />
    </MainWrapper>
  );
};

export default MainPage;
