import styled, { keyframes } from "styled-components";

import COLORS from "@/app/constant/colors";

const HoverAnimation = keyframes`
  0% {
    transform: scale(1);
  }

  100% {
    transform: scale(1.1);
  }
`;

export const PostContainer = styled.article`
  display: flex;
  min-width: 640px;
  height: 160px;
  border: 4px solid ${COLORS.black};
  border-radius: 8px;
  cursor: pointer;
  word-break: keep-all;

  &.light {
    border-color: #000000;
  }

  &.dark {
    border-color: #ffffff;
  }

  &:hover {
    animation: ${HoverAnimation} 0.5s forwards;
  }
`;

export const PostLeftArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 16px;
`;

export const PostRightArea = styled.div`
  display: flex;
`;

export const PostThumbnail = styled.img`
  width: 240px;
  height: 100%;
  margin-left: auto;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;
`;

export const PostTitle = styled.div`
  font-size: 1.5rem;
`;

export const PostDescription = styled.div`
  font-size: 1.2rem;
`;

export const PostInfo = styled.div`
  margin-left: auto;
`;
