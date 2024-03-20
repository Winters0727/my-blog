"use client";

import { useState, useCallback, useEffect } from "react";

import { useThemeContext } from "@/app/context/ThemeContext";

import { getCommentIcons } from "@/app/services/post.service";

import {
  CommentFormContentWrapper,
  CommentFormIconContainer,
  CommentFormSwitchButton,
  CommentFormSubmitButton,
  CommentFormSwitchButtonContainer,
  CommentFormText,
  CommentFormUserData,
  CommentFormUserInput,
  CommentFormUserLabel,
  CommentFormUserWrapper,
  CommentFormWrapper,
  CommentFormIcon,
  CommentFormContentContainer,
} from "@/app/styles/post/comment.style";

import type { FC } from "react";
import type { CommentIcon, CommentPayload } from "@/app/types/post.type";

interface CommentFormProps {}

type CommentType = "text" | "image";

const CommentForm: FC<CommentFormProps> = () => {
  const [commentType, setCommentType] = useState<CommentType>("text");
  const [commentIcons, setCommentIcons] = useState<CommentIcon[]>([]);

  const theme = useThemeContext();

  const switchFormType = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    setCommentType((e.target as HTMLButtonElement).value as CommentType);
  };

  useEffect(() => {
    const fetchIcons = async () => {
      const iconRes = await getCommentIcons();
      if (iconRes.data) setCommentIcons(iconRes.data);
    };

    fetchIcons();
  }, []);

  return (
    <CommentFormWrapper>
      <CommentFormUserWrapper>
        <CommentFormUserData>
          <CommentFormUserLabel htmlFor="name">이름</CommentFormUserLabel>
          <CommentFormUserInput type="text" id="name" />
        </CommentFormUserData>
        <CommentFormUserData>
          <CommentFormUserLabel htmlFor="password">
            비밀번호
          </CommentFormUserLabel>
          <CommentFormUserInput type="password" id="password" maxLength={20} />
        </CommentFormUserData>
      </CommentFormUserWrapper>
      <CommentFormContentWrapper>
        <CommentFormSwitchButtonContainer>
          <CommentFormSwitchButton
            type="button"
            name="text-type-btn"
            value="text"
            onClick={switchFormType}
          >
            텍스트
          </CommentFormSwitchButton>
          <CommentFormSwitchButton
            type="button"
            name="image-type-btn"
            value="image"
            onClick={switchFormType}
          >
            아이콘
          </CommentFormSwitchButton>
        </CommentFormSwitchButtonContainer>
        <CommentFormContentContainer>
          {commentType === "text" ? (
            <>
              <CommentFormText maxLength={200}></CommentFormText>
              <CommentFormSubmitButton>작성</CommentFormSubmitButton>
            </>
          ) : (
            <CommentFormIconContainer>
              {commentIcons.map((icon) => (
                <CommentFormIcon
                  key={icon.name}
                  src={`${process.env.NEXT_PUBLIC_API_ENDPOINT}${icon.path}`}
                  alt={icon.name}
                />
              ))}
            </CommentFormIconContainer>
          )}
        </CommentFormContentContainer>
      </CommentFormContentWrapper>
    </CommentFormWrapper>
  );
};

export default CommentForm;
