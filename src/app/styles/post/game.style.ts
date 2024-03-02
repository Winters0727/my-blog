"use client";

import styled, { keyframes } from "styled-components";

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
  max-width: 80%;
  min-width: 1024px;
  border: 5px solid;
  border-radius: 8px;

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
  width: 70%;
  height: auto;
  min-height: 350px;
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
  width: 100%;
  text-align: center;
`;

export const GameTitle = styled.span`
  padding: 32px 0;
  width: 70%;
  height: 100%;
  font-size: 2rem;
`;

export const ReleaseWrapper = styled.div`
  display: flex;
  width: 30%;
  height: 100%;
  justify-content: center;
  align-items: center;
  border-left-width: 5px;
  border-left-style: solid;

  & > * {
    padding: 32px 0;
  }
`;

export const ReleaseText = styled.span`
  width: 50%;
  height: 100%;
  font-size: 1.2rem;
`;

export const ReleaseDate = styled.span`
  width: 50%;
  height: 100%;
  font-size: 1.4rem;
  border-left-width: 5px;
  border-left-style: solid;
`;

export const GameDataText = styled.span`
  width: 30%;
  min-width: 200px;
  font-size: 1.5rem;
  text-align: center;
  word-break: word-break;
`;

export const GameMiddleWrapper = styled.div`
  display: flex;
  width: 100%;
  border-top-width: 5px;
  border-top-style: solid;
  border-bottom-width: 5px;
  border-bottom-style: solid;
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
`;

export const GameImageThumb = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 4px;
  cursor: pointer;
`;

export const RatingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  border-left-width: 5px;
  border-left-style: solid;

  & > div:not(:last-child) {
    border-bottom-width: 5px;
    border-bottom-style: solid;
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
`;

export const RatingTagWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  border-left-width: 5px;
  border-left-style: solid;
`;

export const RatingTag = styled.span`
  padding: 12px 24px;
  border-radius: 16px;
  background-color: ${COLORS.success};
  color: ${COLORS.white};
  font-size: 1.4rem;

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
