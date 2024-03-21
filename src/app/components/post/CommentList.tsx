"use client";

import { useState, Fragment } from "react";

import CommentComponent from "@/app/components/post/CommentComponent";
import CommentForm from "@/app/components/post/CommentForm";

import { useThemeContext } from "@/app/context/ThemeContext";

import { CommentListWrapper } from "@/app/styles/post/comment.style";

import type { FC } from "react";
import type { Comment } from "@/app/types/post.type";

interface CommentListProps {
  comments: Comment[];
  slug: string;
  fetchComments: () => Promise<void>;
}

const CommentList: FC<CommentListProps> = ({
  comments,
  slug,
  fetchComments,
}) => {
  const theme = useThemeContext();

  const [subFormId, setSubFormId] = useState("");

  const handleClickComment = (parentId: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setSubFormId((prev) => (prev !== parentId ? parentId : ""));
  };

  return (
    <CommentListWrapper className={theme?.mode}>
      {comments.length > 0 &&
        comments.map((comment) =>
          comment.subComments?.length ? (
            <Fragment key={comment._id}>
              <CommentComponent
                comment={comment}
                onClick={handleClickComment(comment._id)}
              />
              {comment.subComments.map((subComment) => (
                <CommentComponent
                  key={subComment._id}
                  comment={subComment}
                  isSubComment={true}
                  parentId={comment._id}
                  onClick={handleClickComment(comment._id)}
                />
              ))}
              {subFormId === comment._id && (
                <CommentForm
                  parentId={comment._id}
                  isSubComment={true}
                  slug={slug}
                  fetchComments={fetchComments}
                />
              )}
            </Fragment>
          ) : (
            <Fragment key={comment._id}>
              <CommentComponent
                comment={comment}
                onClick={handleClickComment(comment._id)}
              />
              {subFormId === comment._id && (
                <CommentForm
                  parentId={comment._id}
                  slug={slug}
                  fetchComments={fetchComments}
                />
              )}
            </Fragment>
          )
        )}
      <CommentForm slug={slug} fetchComments={fetchComments} />
    </CommentListWrapper>
  );
};

export default CommentList;
