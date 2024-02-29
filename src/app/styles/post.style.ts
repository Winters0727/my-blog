"use client";

import styled, { keyframes } from "styled-components";

import COLORS from "@/app//constant/colors";

const { light, dark } = COLORS.theme;

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
