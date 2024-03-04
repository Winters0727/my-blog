import styled, { keyframes } from "styled-components";

import COLORS from "@/app/constant/colors";

const HoverAnimation = keyframes`
  0% {
    transform: scale(1);
  }

  100% {
    transform: scale(1.05);
  }
`;

export const PostContainer = styled.article`
  display: flex;
  min-width: 640px;
  height: 200px;
  border-width: 4px;
  border-style: solid;
  border-radius: 8px;
  cursor: pointer;
  word-break: keep-all;

  &.light {
    border-color: ${COLORS.black};
  }

  &.dark {
    border-color: ${COLORS.white};
  }

  &:hover {
    animation: ${HoverAnimation} 0.5s forwards;
  }
`;

export const PostLeftArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  padding: 16px;
  word-break: break-all;
`;

export const PostRightArea = styled.div`
  display: flex;
`;

export const PostThumbnail = styled.img`
  width: 240px;
  height: 100%;
  margin-left: auto;
  border-radius: 4px;
  cursor: pointer;
`;

export const PostTitle = styled.div`
  margin-bottom: 16px;
  font-size: 1.5rem;
`;

export const PostDescription = styled.div`
  margin-bottom: auto;
  font-size: 1.2rem;
`;

export const PostInfo = styled.div`
  margin-left: auto;
`;
