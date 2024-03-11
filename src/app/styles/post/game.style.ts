"use client";

import styled, { keyframes } from "styled-components";

import { tablet, mobile, xMobile } from "@/app/utils/style.utils";

import COLORS from "@/app//constant/colors";

const showImageAnimation = keyframes`
  from {
    display: none;
    opacity: 0;
  }

  to {
    display: flex;
    opacity: 1;
  }
`;

const hideImageAnimation = keyframes`
  from {
    display: flex;
    opacity: 1;
  }

  to {
    display: none;
    opacity: 0;
  }
`;

export const GameDataWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 32px auto;
  max-width: 960px;
  border-width: 5px;
  border-style: solid;
  border-radius: 8px;

  ${tablet`{
    border-width: 4px;
  }`}

  ${mobile`{
    border-width: 3px;
  }`}


  &.light {
    border-color: ${COLORS.black};
  }

  &.light * {
    border-color: ${COLORS.black};
  }

  &.dark {
    border-color: ${COLORS.white};
  }

  &.dark * {
    border-color: ${COLORS.white};
  }
`;

export const YoutubeIframe = styled.iframe`
  width: 100%;
  height: auto;
  min-height: 30vh;
  margin: 0 auto;
`;

export const MagnifiedImageWrapper = styled.div`
  display: block;
  position: absolute;
  background-color: #00000088;
  margin: auto;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  cursor: pointer;

  &.show {
    animation: ${showImageAnimation} 0.5s forwards;
  }

  &.hidden {
    animation: ${hideImageAnimation} 0.5s forwards;
  }
`;

export const MagnifiedImage = styled.img`
  margin: auto;
  width: auto;
  max-width: 80%;
  height: 70vh;
  cursor: pointer;
`;

export const GameTopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;
  border-bottom-width: 5px;
  border-bottom-style: solid;

  ${tablet`{
    border-bottom-width: 4px;
  }`}

  ${mobile`{
    border-bottom-width: 3px;
  }`}
`;

export const TopSubWrapper = styled.div`
  display: flex;
  border-top-width: 5px;
  border-top-style: solid;

  ${tablet`{
    border-top-width: 4px;
  }`}

  ${mobile`{
    border-top-width: 3px;
  }`}
`;

export const GameTitle = styled.span`
  padding: 32px 0;
  font-size: 2rem;

  ${tablet`{
    padding: 28px 0;
    font-size: 1.8rem;
  }`}

  ${mobile`{
    padding: 24px 0;
    font-size: 1.5rem;
  }`}
`;

export const CoverImageContainer = styled.div`
  display: flex;
  width: 60%;
  padding: 16px;
  justify-content: center;
  align-items: center;
`;

export const CoverImage = styled.img`
  width: 40vw;
  height: auto
  cursor: pointer;
`;

export const ReleaseContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
`;

export const ReleaseText = styled.span`
  width: 50%;
  font-size: 1.5rem;
  text-align: center;

  ${tablet`{
    font-size: 1.4rem;
  }`}

  ${mobile`{
    font-size: 0.9rem;
  }`}
`;

export const ReleaseDateWrapper = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
  justify-content: center;
  align-items: center;
  border-left-width: 5px;
  border-left-style: solid;

  ${tablet`{
    border-left-width: 4px;
  }`}

  ${mobile`{
    border-left-width: 3px;
  }`}
`;

export const ReleaseDate = styled.span`
  font-size: 1.4rem;
  text-align: center;

  ${tablet`{
    font-size: 1.2rem;
  }`}

  ${mobile`{
    font-size: 0.6rem;
  }`}
`;

export const GameImageText = styled.span`
  width: 30%;
  font-size: 1.5rem;
  text-align: center;
  word-break: break-word;

  ${tablet`{
    font-size: 1.4rem;
  }`}

  ${mobile`{
    font-size: 1rem;
  }`}
`;

export const GameMiddleWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const GameDataContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const GameBottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  & > div:not(:last-child) {
    border-bottom-width: 5px;
    border-bottom-style: solid;

    ${tablet`{
      border-bottom-width: 4px;
    }`}

    ${mobile`{
      border-bottom-width: 3px;
    }`}
  }
`;

export const GameImageContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
  width: 100%;
  height: 100%;
  padding: 16px;
  border-left-width: 5px;
  border-left-style: solid;

  ${tablet`{
    padding: 12px;
    gap: 12px;
    border-left-width: 4px;
  }`}

  ${mobile`{
    padding: 8px;
    gap: 8px;
    border-left-width: 3px;
  }`}
`;

export const GameImageThumb = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 4px;
  cursor: pointer;

  ${tablet`{
    width: 70px;
    height: 70px;
  }`}

  ${mobile`{
    width: 40px;
    height: 40px;
  }`}
`;

export const SubDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  border-left-width: 5px;
  border-left-style: solid;

  ${tablet`{
    border-left-width: 4px;
  }`}

  ${mobile`{
    border-left-width: 3px;
  }`}

  & > div:not(:last-child) {
    border-bottom-width: 5px;
    border-bottom-style: solid;

    ${tablet`{
      border-bottom-width: 4px;
    }`}

    ${mobile`{
      border-bottom-width: 3px;
    }`}
  }
`;

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const RatingText = styled.span`
  width: 50%;
  font-size: 1.5rem;
  text-align: center;

  ${tablet`{
    font-size: 1.4rem;
  }`}

  ${mobile`{
    font-size: 0.8rem;
  }`}
`;

export const RatingTagWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  border-left-width: 5px;
  border-left-style: solid;

  ${tablet`{
    border-left-width: 4px;
  }`}

  ${mobile`{
    border-left-width: 3px;
  }`}
`;

export const RatingTag = styled.span`
  padding: 12px 24px;
  border-radius: 16px;
  background-color: ${COLORS.success};
  color: ${COLORS.white};
  font-size: 1.4rem;

  ${tablet`{
    font-size: 1.3rem;
  }`}

  ${mobile`{
    padding: 8px 16px;
    font-size: 0.9rem;
  }`}

  ${xMobile`{
    padding: 6px 12px;
    font-size: 0.8rem;
  }`}

  &.bad {
    background-color: ${COLORS.danger};
  }

  &.normal {
    background-color: ${COLORS.warning};
  }

  &.good {
    background-color: ${COLORS.success};
  }
`;
