"use client";

import styled from "styled-components";

import { tablet, mobile, xMobile, sMobile } from "@/app/utils/style.utils";

import COLORS from "@/app//constant/colors";

export const CommentListWrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 32px;
  row-gap: 16px;
  border-radius: 8px;
  background-color: ${COLORS.darkGray};

  & * {
    border-color: transparent;
  }

  & input textarea {
    outline: none;
  }

  &.light {
    background-color: ${COLORS.primary};

    & button {
      background-color: ${COLORS.success};
    }
  }

  &.dark {
    background-color: ${COLORS.danger};

    & button {
      background-color: ${COLORS.info};
    }
  }
`;

export const CommentContainer = styled.div`
  display: flex;
  padding: 16px 8px;
  column-gap: 16px;
  border-width: 3px;
  border-style: solid;
  border-radius: 8px;

  &.subComment {
    margin-left: 5%;
  }

  &.light {
    background-color: ${COLORS.white};
  }

  &.dark {
    background-color: ${COLORS.darkGray};
  }
`;

export const CommentInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 15%;
  min-width: 130px;
  line-height: 24px;
`;

export const CommentProfileImage = styled.img`
  width: 120px;
  height: 120px;
  margin: auto;
  padding: 8px;
  border-radius: 4px;
`;

export const CommentName = styled.span`
  font-size: 0.9rem;
`;

export const CommentIp = styled.span`
  font-size: 0.8rem;
`;

export const CommentDate = styled.span`
  font-size: 0.7rem;
`;

export const CommentContent = styled.div`
  display: flex;
  width: 85%;
`;

export const CommentText = styled.div`
  padding: 16px 0;
  font-size: 1.5rem;
  word-break: break-all;
`;

export const CommentIcon = styled.img`
  width: 150px;
  height: 150px;
  margin: auto 0;
  border-radius: 4px;
`;

export const CommentPassword = styled.input`
  border-radius: 4px;
`;

export const CommentFormWrapper = styled.form`
  display: flex;
  height: 200px;
  padding: 16px;
  column-gap: 16px;
  color: ${COLORS.white};
  border-width: 3px;
  border-style: solid;
  border-radius: 8px;
`;

export const CommentFormUserWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 15%;
  row-gap: 16px;
`;

export const CommentFormUserData = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2px;
`;

export const CommentFormUserLabel = styled.label``;

export const CommentFormUserInput = styled.input`
  padding: 8px;
  height: 12px;
  border-radius: 4px;
`;

export const CommentFormContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: 16px;
`;

export const CommentFormContentContainer = styled.div`
  display: flex;
  column-gap: 16px;
  height: 100px;
`;

export const CommentFormText = styled.textarea`
  padding: 16px;
  width: 100%;
  border-radius: 4px;
`;
export const CommentFormIconContainer = styled.div`
  padding: 8px;
`;

export const CommentFormIcon = styled.img`
  width: 75px;
  height: 75px;
  border-radius: 4px;
`;

export const CommentFormSwitchButtonContainer = styled.div`
  display: flex;
  margin-left: auto;
  column-gap: 16px;
`;

const CommentFormButton = styled.button`
  color: ${COLORS.white};
  font-size: 1.2rem;
  font-weight: 700;
  border-radius: 4px;
  cursor: pointer;
`;

export const CommentFormSwitchButton = styled(CommentFormButton)`
  padding: 4px;
  width: 100px;
`;

export const CommentFormSubmitButton = styled(CommentFormButton)`
  padding: 4px;
  width: 80px;
  margin-left: auto;
`;
