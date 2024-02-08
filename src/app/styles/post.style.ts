"use client";

import styled from "styled-components";

import COLORS from "@/app//constant/colors";

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
    align-items: center;
    margin: 8px 0;
    font-size: 20px;
    line-height: 32px;
    word-break: keep-all;
  }

  & > img,
  & > p > img {
    margin: 16px auto;
  }

  & > a,
  & > p > a {
    color: #00ff00;
    text-decoration: none;
  }

  & > a:hover,
  & > p > a:hover {
    color: #22ff22;
  }

  & > a:active,
  & > p > a:active {
    color: #0000ff;
  }

  & > a:visited,
  & > p > a:visited {
    color: #ff2222;
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
    background-color: ${COLORS.theme.light.blockquote};
    border-left: 5px solid ${COLORS.theme.light.blockquoteBorder};
  }

  &.dark > blockquote {
    background-color: ${COLORS.theme.dark.blockquote};
    border-left: 5px solid ${COLORS.theme.dark.blockquoteBorder};
  }

  &.light > p > em {
    color: ${COLORS.theme.light.em};
  }

  &.dark > p > em {
    color: ${COLORS.theme.dark.em};
  }
`;

export const PostTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 32px 0;
  row-gap: 16px;
  word-break: keep-all;
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
