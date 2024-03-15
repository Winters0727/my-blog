"use client";

import dayjs from "dayjs";

import { POST_COUNT } from "@/app/constant/post";

import type { Post } from "contentlayer/generated";

type MainActionType =
  | "SELECT_CATEGORY"
  | "SELECT_SUBCATEGORY"
  | "SELECT_DATE"
  | "SEARCH_BY_KEYWORD"
  | "ADD_POSTS";

export interface MainState {
  category: string;
  subCategory: string;
  searchKeyword: string;
  totalPosts: Post[];
  currentPosts: Post[];
  categorizedPosts: Post[];
  categorizedPostsBackup: Post[];
}

export interface MainAction {
  type: MainActionType;
  payload?: {
    posts?: Post[];
    category?: string;
    subCategory?: string;
    date?: string;
    keyword?: string;
    initSubCategory?: boolean;
  };
}

export const MainReducer = (state: MainState, action: MainAction) => {
  switch (action.type) {
    case "SELECT_CATEGORY":
      if (action.payload) {
        const { category, initSubCategory } = action.payload;

        if (category) {
          state.category = category;
          if (initSubCategory) state.subCategory = "";
          state.categorizedPosts = state.totalPosts.filter(
            (post) => post.category === category
          );
          state.categorizedPostsBackup = [...state.categorizedPosts];
          state.currentPosts = state.categorizedPosts.slice(0, POST_COUNT);
        } else {
          state.category = "";
          state.subCategory = "";
          state.categorizedPosts = [...state.totalPosts];
          state.categorizedPostsBackup = [...state.categorizedPosts];
          state.currentPosts = state.categorizedPosts.slice(0, POST_COUNT);
        }
      }
      break;

    case "SELECT_SUBCATEGORY":
      if (action.payload) {
        const { subCategory } = action.payload;

        if (subCategory) {
          state.subCategory = subCategory;
          state.categorizedPosts = state.totalPosts.filter(
            (post) =>
              post.category === state.category &&
              post.subCategory === subCategory
          );
          state.categorizedPostsBackup = [...state.categorizedPosts];
          state.currentPosts = state.categorizedPosts.slice(0, POST_COUNT);
        } else {
          state.subCategory = "";
          state.categorizedPosts = state.totalPosts.filter(
            (post) => post.category === state.category
          );
          state.categorizedPostsBackup = [...state.categorizedPosts];
          state.currentPosts = state.categorizedPosts.slice(0, POST_COUNT);
        }
      }
      break;

    case "SELECT_DATE":
      if (action.payload) {
        const { date } = action.payload;

        if (date) {
          state.categorizedPosts = state.totalPosts.filter(
            (post) => dayjs(post.createdAt).format("YYYY-MM-DD") === date
          );

          if (state.categorizedPosts.length > 0) {
            state.category = "";
            state.subCategory = "";
            state.currentPosts = state.categorizedPosts.slice(0, POST_COUNT);
          }
        }
      }
      break;

    case "SEARCH_BY_KEYWORD":
      if (action.payload) {
        const { keyword } = action.payload;

        if (keyword) {
          state.searchKeyword = keyword;

          const keywordRegex = new RegExp(keyword, "i");

          state.categorizedPosts = state.categorizedPostsBackup.filter(
            (post) =>
              keywordRegex.test(post.title) ||
              keywordRegex.test(post.description)
          );
          state.currentPosts = state.categorizedPosts.slice(0, POST_COUNT);
        }
      }
      break;

    case "ADD_POSTS":
      if (state.currentPosts.length < state.categorizedPosts.length) {
        const length = state.currentPosts.length;
        state.currentPosts = [
          ...state.currentPosts,
          ...state.categorizedPosts.slice(length, length + POST_COUNT),
        ];
      }
      break;
  }

  return { ...state };
};
