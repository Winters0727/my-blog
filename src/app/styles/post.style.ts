"use client";

import styled from "styled-components";

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
  line-height: 32px;

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
    display: block;
    width: 100%;
    margin: 16px 0;
    font-size: 20px;
  }

  & > p img {
    display: block;
    margin: 0 auto;
    width: fit-content;
    max-width: 100%;
    height: auto;
    border-radius: 4px;
  }

  & > p a {
    width: fit-content;
    height: fit-content;
    color: ${COLORS.primary};
  }

  & > p a:hover {
    color: ${COLORS.info};
  }

  & > p a:visited {
    color: ${COLORS.danger};
  }

  & > p a:active {
    color: ${COLORS.success};
  }

  & figure {
    font-family: "CommitMono";
    font-size: 1rem;
    font-weight: 700;
    padding: 16px;
    line-height: 20px;

    & pre {
      padding: 32px;
      border-radius: 8px;
    }
  }

  & > p blockquote {
    padding: 16px;
    border-radius: 4px;
  }

  & > p em {
    display: block;
    margin: 0 auto;
    text-align: center;
  }

  & > ul {
    font-size: 1.2rem;
    list-style: square;

    & li {
      margin: 12px auto;

      & p {
        margin: 0;
      }
    }
  }

  & strong {
    margin: 0 2px;
    padding: 2px 6px;
    border-radius: 4px;
  }

  &.light {
    blockquote {
      background-color: ${light.blockquote};
      border-left: 5px solid ${light.blockquoteBorder};
    }

    em {
      color: ${light.em};
    }

    strong {
      color: ${COLORS.white};
      background-color: ${light.strong};
    }
  }

  &.dark {
    blockquote {
      background-color: ${dark.blockquote};
      border-left: 5px solid ${dark.blockquoteBorder};
    }

    em {
      color: ${dark.em};
    }

    strong {
      color: ${COLORS.white};
      background-color: ${dark.strong};
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
