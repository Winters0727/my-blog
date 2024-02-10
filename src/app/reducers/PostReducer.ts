import { POST_COUNT } from "../constant/post";

import type { Post } from "contentlayer/generated";

type PostActionType = "SORT_BY_CATEGORY" | "ADD_POSTS";

interface PostState {
  totalPosts: Post[];
  currentPosts: Post[];
}

interface PostAction {
  type: PostActionType;
  payload?: {
    posts?: Post[];
    category?: string;
  };
}

export const PostReducer = (state: PostState, action: PostAction) => {
  switch (action.type) {
    case "SORT_BY_CATEGORY":
      if (action.payload) {
        const { category } = action.payload;

        if (category)
          state.currentPosts = state.totalPosts
            .filter((post) => post.category === category)
            .slice(0, POST_COUNT);
      }
      break;

    case "ADD_POSTS":
      if (state.currentPosts.length < state.totalPosts.length) {
        const length = state.currentPosts.length;
        state.currentPosts = [
          ...state.currentPosts,
          ...state.totalPosts.slice(length, length + POST_COUNT),
        ];
      }
      break;
  }

  return { ...state };
};
