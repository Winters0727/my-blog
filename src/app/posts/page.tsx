"use client";

import { useMemo, useReducer } from "react";
import { allPosts } from "contentlayer/generated";

import PostList from "@/app/components/index/PostList";
import CategoryList from "@/app/components/index/CategoryList";
import MobileCategoryList from "@/app/components/index/MobileCategoryList";
import ProfileComponent from "@/app/components/index/ProfileComponent";
import LawnComponent from "@/app/components/index/LawnComponent";
import ClockComponent from "@/app/components/index/ClockComponent";
import VisitComponent from "@/app/components/index/VisitComponent";

import { MainReducer } from "@/app/reducers/MainReducer";

import { POST_COUNT } from "@/app/constant/post";

import {
  MainWrapper,
  TopSection,
  LeftSection,
  MiddleSection,
  RightSection,
  RightSectionWrapper,
} from "@/app/styles/index.style";

import type { NextPage } from "next";

interface CategoriesWithCount {
  [category: string]: {
    totalCount: number;
    [subCategory: string]: number;
  };
}

const PostsPage: NextPage = () => {
  const posts = [...allPosts.filter((post) => post.published)];

  const categories: CategoriesWithCount = useMemo(() => {
    const categoriesWithCount: CategoriesWithCount = {};

    for (const post of posts) {
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
      <TopSection>
        <MobileCategoryList
          state={state}
          dispatch={dispatch}
          categories={categories}
        />
      </TopSection>
      <LeftSection>
        <CategoryList
          state={state}
          dispatch={dispatch}
          categories={categories}
        />
      </LeftSection>
      <MiddleSection>
        <PostList state={state} dispatch={dispatch} />
      </MiddleSection>
      <RightSection>
        <RightSectionWrapper>
          <ProfileComponent />
          <ClockComponent />
          <LawnComponent state={state} dispatch={dispatch} />
          <VisitComponent />
        </RightSectionWrapper>
      </RightSection>
    </MainWrapper>
  );
};

export default PostsPage;
