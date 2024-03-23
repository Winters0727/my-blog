"use client";

import styled from "styled-components";

import { tablet, xMobile, sMobile } from "@/app/utils/style.utils";

import COLORS from "@/app//constant/colors";

export const CommentListWrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 32px;
  row-gap: 16px;
  border-radius: 8px;
  background-color: ${COLORS.darkGray};

  ${xMobile`{
    padding: 16px;
  }`}

  & * {
    border-color: transparent;
  }

  & input textarea {
    outline: none;
  }

  &.light {
    background-color: ${COLORS.primary};

    & button:not(.icon) {
      background-color: ${COLORS.success};
    }
  }

  &.dark {
    background-color: ${COLORS.danger};

    & button:not(.icon) {
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
  cursor: pointer;

  ${xMobile`{
    padding: 12px 8px;
  }`}

  &.subComment {
    margin-left: 5%;

    ${xMobile`{
      margin-left: 2%;
    }`}
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

  ${xMobile`{
    align-items: flex-start;
    min-width: 85px;
  }`}

  ${sMobile`{
    min-width: 60px;
  }`}
`;

export const CommentProfileImage = styled.img`
  width: 120px;
  height: 120px;
  margin: auto;
  padding: 8px;
  border-radius: 4px;

  ${xMobile`{
    display: none;
  }`}
`;

export const CommentName = styled.span`
  font-size: 0.9rem;

  ${xMobile`{
    font-size: 0.8rem;
  }`}
`;

export const CommentIp = styled.span`
  font-size: 0.8rem;

  ${xMobile`{
    font-size: 0.7rem;
  }`}
`;

export const CommentDate = styled.span`
  font-size: 0.7rem;

  ${xMobile`{
    font-size: 0.6rem;
  }`}
`;

export const CommentContent = styled.div`
  display: flex;
  width: 85%;
`;

export const CommentText = styled.div`
  padding: 16px 0;
  font-size: 1.5rem;
  word-break: break-all;

  ${tablet`{
    font-size: 1.4rem;
  }`}

  ${xMobile`{
    padding: 0;
    font-size: 1rem;
  }`}

  ${sMobile`{
    font-size: 0.7rem;
  }`}
`;

export const CommentIcon = styled.img`
  width: 150px;
  height: 150px;
  margin: auto 0;
  border-radius: 4px;
  cursor: pointer;

  ${tablet`{
    width: 120px;
    height: 120px;
  }`}

  ${xMobile`{
    width: 100px;
    height: 100px;
  }`}

  ${sMobile`{
    width: 80px;
    height: 80px;
  }`}
`;

export const CommentPassword = styled.input`
  border-radius: 4px;
`;

export const CommentFormWrapper = styled.form`
  display: flex;
  min-height: 200px;
  padding: 16px;
  column-gap: 16px;
  color: ${COLORS.white};
  border-width: 3px;
  border-style: solid;
  border-radius: 8px;

  &.subComment {
    margin-left: 5%;

    ${xMobile`{
      margin-left: 2%;
    }`}
  }

  ${xMobile`{
    min-height: 0;
    padding: 0;
  }`}
`;

export const CommentFormUserWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 15%;
  row-gap: 8px;
`;

export const CommentFormUserData = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2px;
`;

export const CommentFormUserLabel = styled.label`
  ${xMobile`{
    font-size: 0.7rem;
  }`}

  ${sMobile`{
    font-size: 0.5rem;
  }`}
`;

export const CommentFormUserInput = styled.input`
  padding: 8px;
  height: 12px;
  border-radius: 4px;

  ${xMobile`{
    padding: 4px;
    height: 8px;
    font-size: 0.7rem;
  }`}

  ${sMobile`{
    font-size: 0.5rem;
  }`}
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

  ${xMobile`{
    column-gap: 8px;
    height: 60px;
  }`}
`;

export const CommentFormText = styled.textarea`
  padding: 16px;
  width: 100%;
  border-radius: 4px;

  ${xMobile`{
    padding: 8px;
    font-size: 0.7rem;
  }`}
`;
export const CommentFormIconContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  column-gap: 8px;
  width: 100%;
  border-radius: 4px;
  background-color: ${COLORS.white};
  overflow-y: auto;

  ${xMobile`{
    padding: 4px;
    column-gap: 4px;
  }`}
`;

export const CommentFormIcon = styled.img`
  width: 75px;
  height: 75px;
  border-radius: 4px;

  ${tablet`{
    width: 60px;
    height: 60px;
  }`}

  ${xMobile`{
    width: 40px;
    height: 40px;
  }`}

  ${sMobile`{
    width: 30px;
    height: 30px;
  }`}
`;

export const CommentFormIconButton = styled.button`
  background-color: transparent;
  cursor: pointer;
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

  ${xMobile`{
    width: 60px;
    font-size: 0.8rem;
  }`}
`;

export const CommentFormSubmitButton = styled(CommentFormButton)`
  padding: 4px;
  width: 80px;
  margin-left: auto;

  ${xMobile`{
    width: 60px;
    font-size: 0.8rem;
  }`}
`;
