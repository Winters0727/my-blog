"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import _ from "lodash";

import { getCommentIcons, postComment } from "@/app/services/post.service";

import { IMAGE_ENDPOINT } from "@/app/constant/post";

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
  CommentFormIconButton,
  CommentFormContentContainer,
} from "@/app/styles/post/comment.style";

import type { FC } from "react";
import type { CommentIcon, CommentPayload } from "@/app/types/post.type";

interface CommentFormProps {
  parentId?: string;
  isSubComment?: boolean;
  slug: string;
  fetchComments: () => Promise<void>;
}

type CommentType = "text" | "image";

const CommentForm: FC<CommentFormProps> = ({
  parentId,
  isSubComment,
  slug,
  fetchComments,
}) => {
  const COMMENT_MAX_LENGTH = 150;
  const SUBMIT_THROTTLE_TIME = 1500;

  const [commentType, setCommentType] = useState<CommentType>("text");
  const [commentIcons, setCommentIcons] = useState<CommentIcon[]>([]);
  const [icon, setIcon] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  const nameInputRef = useRef<HTMLInputElement | null>(null);
  const passwordInputRef = useRef<HTMLInputElement | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const switchFormType = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    setCommentType((e.target as HTMLButtonElement).value as CommentType);
  };

  const submitForm = _.throttle(async (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const name = nameInputRef.current;
    const password = passwordInputRef.current;

    if (name && name.value.length === 0) return alert("이름을 입력해주세요.");
    if (password && password.value.length === 0)
      return alert("비밀번호를 입력해주세요.");

    if (name && password) {
      const payload: Partial<CommentPayload> = {
        name: name.value,
        type: commentType,
        password: password.value,
      };

      if (commentType === "text") {
        const content = textareaRef.current;

        if (content) {
          if (content.value.length === 0) return alert("댓글을 입력해주세요.");

          payload.content = content.value;

          if (parentId) payload.parentId = parentId;
        }
      } else {
        if (icon) {
          payload.content = icon;

          if (parentId) payload.parentId = parentId;
        }
      }

      setIsDisabled(true);

      await postComment(slug, payload as CommentPayload);
      await fetchComments();

      setIsDisabled(false);
    }
  }, SUBMIT_THROTTLE_TIME);

  useEffect(() => {
    const fetchIcons = async () => {
      const iconRes = await getCommentIcons();
      if (iconRes.data) setCommentIcons(iconRes.data);
    };

    fetchIcons();
  }, []);

  return (
    <CommentFormWrapper
      className={isSubComment ? "subComment" : ""}
      id="commentForm"
      onSubmit={submitForm}
    >
      <CommentFormUserWrapper>
        <CommentFormUserData>
          <CommentFormUserLabel htmlFor="name">이름</CommentFormUserLabel>
          <CommentFormUserInput ref={nameInputRef} type="text" id="name" />
        </CommentFormUserData>
        <CommentFormUserData>
          <CommentFormUserLabel htmlFor="password">
            비밀번호
          </CommentFormUserLabel>
          <CommentFormUserInput
            ref={passwordInputRef}
            type="password"
            id="password"
            maxLength={20}
          />
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
              <CommentFormText
                ref={textareaRef}
                maxLength={COMMENT_MAX_LENGTH}
              ></CommentFormText>
              <CommentFormSubmitButton
                type="submit"
                form="commentForm"
                formMethod="POST"
                disabled={isDisabled}
              >
                작성
              </CommentFormSubmitButton>
            </>
          ) : (
            <CommentFormIconContainer>
              {commentIcons.map((icon) => (
                <CommentFormIconButton
                  key={icon.name}
                  className="icon"
                  name="icon-submit-btn"
                  type="submit"
                  form="commentForm"
                  formMethod="POST"
                  onClick={() => setIcon(icon.fileName)}
                >
                  <CommentFormIcon
                    src={`${IMAGE_ENDPOINT}/icons/${icon.fileName}`}
                    alt={icon.name}
                  />
                </CommentFormIconButton>
              ))}
            </CommentFormIconContainer>
          )}
        </CommentFormContentContainer>
      </CommentFormContentWrapper>
    </CommentFormWrapper>
  );
};

export default CommentForm;
