"use client";

import styled, { keyframes } from "styled-components";

import COLORS from "@/app//constant/colors";

const { light, dark } = COLORS.theme;

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

export const PostWrapper = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 64px 0;
  font-family: "BaeminDoHyeon";
  }
`;

export const PostContentWrapper = styled.section`
  width: 100%;
  line-height: 24px;

  & > blockquote,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  h7 {
    margin: 32px 0;
  }

  & > h1 {
    font-size: 2.5rem;
  }

  & > h2 {
    font-size: 2rem;
  }

  & > h3 {
    font-size: 1.75rem;
  }

  & > h4 {
    font-size: 1.5rem;
  }

  & > h5 {
    font-size: 1.25rem;
  }

  & > h6 {
    font-size: 1rem;
  }

  & > p {
    display: flex;
    flex-direction: column;
    margin: 16px 0;
    font-size: 20px;
    line-height: 32px;
    word-break: break-all;
  }

  & > img,
  & > p > img,
  & > p > a > img {
    width: fit-content;
    max-width: 100%;
    height: auto;
    margin: 0 auto;
    border-radius: 4px;
  }

  & > a,
  & > p > a {
    width: fit-content;
    height: fit-content;
    color: ${COLORS.primary};
  }

  & > a:hover,
  & > p > a:hover {
    color: ${COLORS.info};
  }

  & > a:visited,
  & > p > a:visited {
    color: ${COLORS.danger};
  }

  & > a:active,
  & > p > a:active {
    color: ${COLORS.success};
  }

  & > figure {
    font-family: "CommitMono";
    font-size: 12px;
    font-weight: 700;
    padding: 16px;
    line-height: 20px;

    & > pre {
      padding: 32px;
      border-radius: 8px;
    }
  }

  & > blockquote {
    padding: 16px;
    border-radius: 4px;
  }

  &.light > blockquote {
    background-color: ${light.blockquote};
    border-left: 5px solid ${light.blockquoteBorder};
  }

  &.dark > blockquote {
    background-color: ${dark.blockquote};
    border-left: 5px solid ${dark.blockquoteBorder};
  }

  & > em,
  & > p > em {
    text-align: center;
  }

  &.light > p > em {
    color: ${light.em};
  }

  &.dark > p > em {
    color: ${dark.em};
  }

  & > ul {
    font-size: 1.2rem;
    list-style: square;

    & > li {
      margin: 12px auto;
    }
  }
`;

export const PostTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 32px 0;
  row-gap: 16px;
  word-break: keep-word;
`;

export const PostTitleText = styled.div`
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
`;

export const PostTagContainer = styled.div`
  display: flex;
  margin-left: auto;
  column-gap: 8px;
`;

export const PostTag = styled.span`
  min-width: 32px;
  font-weight: 700;
  padding: 8px 16px;
  color: ${COLORS.white};
  border: 2px solid transparent;
  border-radius: 32px;
  cursor: pointer;

  &.light {
    background-color: ${COLORS.primary};
  }

  &.dark {
    background-color: ${COLORS.danger};
  }
`;

export const PostTitleDate = styled.div`
  font-size: 1.2rem;
  margin-left: auto;
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
  font-size: 1.4rem;
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
  justify-content: center;
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
  width: 100px;
  height: 100px;
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
