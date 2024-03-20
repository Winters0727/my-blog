"use client";

import { useCallback, useRef, useEffect } from "react";

import CommentComponent from "@/app/components/post/CommentComponent";
import CommentForm from "@/app/components/post/CommentForm";

import { useThemeContext } from "@/app/context/ThemeContext";

import { CommentListWrapper } from "@/app/styles/post/comment.style";

import type { FC } from "react";
import type { Comment } from "@/app/types/post.type";

interface CommentListProps {
  comments: Comment[];
}

const PostList: FC<CommentListProps> = ({ comments }) => {
  const theme = useThemeContext();

  return (
    <CommentListWrapper className={theme?.mode}>
      {comments.length > 0 &&
        comments.map((comment) =>
          comment.subComments?.length ? (
            <>
              <CommentComponent key={comment._id} comment={comment} />
              {comment.subComments.map((subComment) => (
                <CommentComponent
                  key={subComment._id}
                  comment={subComment}
                  isSubComment={true}
                  parentId={comment._id}
                />
              ))}
            </>
          ) : (
            <CommentComponent key={comment._id} comment={comment} />
          )
        )}
      <CommentForm />
    </CommentListWrapper>
  );
};

export default PostList;
