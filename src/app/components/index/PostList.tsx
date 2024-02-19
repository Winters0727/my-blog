"use client";

import { useCallback, useRef, useEffect } from "react";
import Link from "next/link";

import PostComponent from "./PostComponent";

import { PostListWrapper } from "@/app/styles/index.style";

import type { Dispatch, FC } from "react";
import type { MainState, MainAction } from "@/app/reducers/MainReducer";

interface PostListProps {
  state: MainState;
  dispatch: Dispatch<MainAction>;
}

const PostList: FC<PostListProps> = ({ state, dispatch }) => {
  const postWrapperRef = useRef<HTMLElement | null>(null);

  const handleIOIntersect: IntersectionObserverCallback = useCallback(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (state.currentPosts.length === state.totalPosts.length)
          observer.unobserve(entry.target);

        if (entry.isIntersecting) {
          dispatch({ type: "ADD_POSTS" });
          observer.unobserve(entry.target);

          const parent = entry.target.parentElement;

          if (parent && parent.lastElementChild)
            observer.observe(parent.lastElementChild);
        }
      });
    },
    [state, dispatch]
  );

  useEffect(() => {
    const postWrapper = postWrapperRef.current;

    const io = new IntersectionObserver(handleIOIntersect, {
      threshold: 0.7,
    });

    if (postWrapper && postWrapper.lastElementChild) {
      io.observe(postWrapper.lastElementChild);
    }
  }, [handleIOIntersect]);

  return (
    <PostListWrapper ref={postWrapperRef}>
      {state.currentPosts.map((post, index) => {
        const { title, path } = post;

        return (
          <Link key={`${index}-${title}`} href={path}>
            <PostComponent post={post} />
          </Link>
        );
      })}
    </PostListWrapper>
  );
};

export default PostList;
