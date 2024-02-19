"use client";

import { POST_COUNT } from "@/app/constant/post";

import type { Post } from "contentlayer/generated";

type MainActionType = "SELECT_CATEGORY" | "SELECT_SUBCATEGORY" | "ADD_POSTS";

export interface MainState {
  category: string;
  subCategory: string;
  totalPosts: Post[];
  currentPosts: Post[];
  categorizedPosts: Post[];
}

export interface MainAction {
  type: MainActionType;
  payload?: {
    posts?: Post[];
    category?: string;
    subCategory?: string;
  };
}

export const MainReducer = (state: MainState, action: MainAction) => {
  switch (action.type) {
    case "SELECT_CATEGORY":
      if (action.payload) {
        const { category } = action.payload;

        if (category) {
          state.category = category;
        } else {
          state.category = "";
          state.subCategory = "";
          state.categorizedPosts = [...state.totalPosts];
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
