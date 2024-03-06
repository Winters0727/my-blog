import styled, { keyframes } from "styled-components";

import { tablet, mobile } from "@/app/utils/style.utils";

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
  justify-content: space-between;
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

  ${tablet`{
    height: 140px;
    border-width: 3px;
  }`}

  ${mobile`{
    height: 120px;
    border-width: 2px;
  }`}
`;

export const PostLeftArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 16px;
  word-break: break-all;

  ${tablet`{
    padding: 14px;
  }`}

  ${mobile`{
    padding: 10px;
  }`}
`;

export const PostRightArea = styled.div`
  display: flex;
`;

export const PostThumbnail = styled.img`
  width: 180px;
  height: 100%;
  margin-left: auto;
  border-top-rightradius: 4px;
  border-bottom-rightradius: 4px;
  cursor: pointer;

  ${tablet`{
    width: 120px;
  }`}

  ${mobile`{
    width: 100px;
  }`}
`;

export const PostTitle = styled.div`
  margin-bottom: 16px;
  font-size: 1.8rem;
  font-weight: 700;

  ${tablet`{
    font-size: 1.3rem;
  }`}

  ${mobile`{
    font-size: 0.9rem;
  }`}
`;

export const PostDescription = styled.div`
  margin-bottom: auto;
  font-size: 1.4rem;

  ${tablet`{
    font-size: 1.1rem;
  }`}

  ${mobile`{
    font-size: 0.8rem;
  }`}
`;

export const PostInfo = styled.div`
  margin-left: auto;
  font-size: 1.2rem;

  ${tablet`{
    font-size: 1rem;
  }`}

  ${mobile`{
    font-size: 0.7rem;
  }`}
`;
