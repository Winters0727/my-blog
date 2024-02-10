"use client";

import { useCallback, useRef, useReducer, useEffect } from "react";
import Link from "next/link";

import PostComponent from "./PostComponent";

import { PostReducer } from "@/app/reducers/PostReducer";

import { POST_COUNT } from "@/app/constant/post";

import { PostListWrapper } from "@/app/styles/index.style";

import type { FC } from "react";
import type { Post } from "contentlayer/generated";

interface PostListProps {
  posts: Post[];
}

const PostList: FC<PostListProps> = ({ posts }) => {
  const [state, dispatch] = useReducer(PostReducer, {
    currentPosts: posts.slice(0, POST_COUNT),
    totalPosts: posts,
  });

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
    [state]
  );

  useEffect(() => {
    const postWrapper = postWrapperRef.current;

    const io = new IntersectionObserver(handleIOIntersect, {
      threshold: 0.7,
    });

    if (postWrapper && postWrapper.lastElementChild) {
      io.observe(postWrapper.lastElementChild);
    }
  }, [posts, handleIOIntersect]);

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
