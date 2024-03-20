"use client";

import { useMemo } from "react";

import dayjs from "dayjs";
import "dayjs/locale/ko";

import { useThemeContext } from "@/app/context/ThemeContext";

import { DEFAULT_COMMENT_PROFILE_IMAGE } from "@/app/constant/post";

import {
  CommentContainer,
  CommentInfo,
  CommentProfileImage,
  CommentName,
  CommentIp,
  CommentDate,
  CommentPassword,
  CommentContent,
  CommentText,
  CommentIcon,
} from "@/app/styles/post/comment.style";

import type { FC } from "react";
import type { Comment } from "@/app/types/post.type";

interface CommentProps {
  comment: Comment;
  parentId?: string;
  isSubComment?: boolean;
}

const CommentComponent: FC<CommentProps> = ({ comment, isSubComment }) => {
  const DELETED_BY = {
    User: "유저",
    Host: "호스트",
  };

  const {
    name,
    ip,
    type,
    content,
    createdAt,
    isDeleted,
    deletedAt,
    deletedBy,
  } = comment;

  const theme = useThemeContext();

  dayjs.locale("ko");

  const currentDate = dayjs(Date.now());
  const createdDate = dayjs(createdAt);

  const dateDifference = useMemo(() => {
    const secondDifference = currentDate.diff(createdDate, "second");
    if (secondDifference < 60) return `${secondDifference}초 전`;

    const minuteDifference = currentDate.diff(createdDate, "minute");
    if (minuteDifference < 60) return `${minuteDifference}분 전`;

    const hourDifference = currentDate.diff(createdDate, "hour");
    if (hourDifference < 24) return `${hourDifference}시간 전`;

    const dayDifference = currentDate.diff(createdDate, "day");
    if (dayDifference < 7) return `${dayDifference}일 전`;

    return createdDate.format("YYYY-MM-DD HH:mm:ss");
  }, [createdDate, currentDate]);

  return (
    <CommentContainer
      className={
        isSubComment ? [theme?.mode, "subComment"].join(" ") : theme?.mode
      }
    >
      <CommentInfo>
        <CommentProfileImage
          src={DEFAULT_COMMENT_PROFILE_IMAGE}
          alt="기본 댓글 프로필 이미지"
        />
        <CommentName>{name}</CommentName>
        <CommentIp>{ip}</CommentIp>
        <CommentDate>{dateDifference}</CommentDate>
      </CommentInfo>
      <CommentContent>
        {type === "text" ? (
          <CommentText>
            {isDeleted && deletedBy
              ? `${DELETED_BY[deletedBy]}에 의해 ${content}`
              : content}
          </CommentText>
        ) : (
          <CommentIcon
            src={`${process.env.NEXT_PUBLIC_API_ENDPOINT}/images/icons/${content}`}
            alt={content}
          />
        )}
      </CommentContent>
    </CommentContainer>
  );
};

export default CommentComponent;
