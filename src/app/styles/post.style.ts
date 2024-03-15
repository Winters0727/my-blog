"use client";

import styled from "styled-components";

import { mobile, sMobile, xMobile } from "../utils/style.utils";

import COLORS from "@/app//constant/colors";

const { light, dark } = COLORS.theme;

export const PostWrapper = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1280px;
  margin: 64px 0;
  padding: 0 32px;
  font-family: "BaeminDoHyeon";

  ${mobile`{
    margin: 48px 0;
    padding: 0 24px;
  }`}

  ${xMobile`{
    margin: 32px 0;
    padding: 0 16px;
  }`}
`;

export const PostContentWrapper = styled.section`
  width: 100%;
  line-height: 32px;

  ${mobile`{
    line-height: 28px;
  }`}

  ${xMobile`{
    line-height: 22px;
  }`}

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

    ${mobile`{
      font-size: 2.2rem;
    }`}

    ${xMobile`{
      font-size: 1.8rem;
    }`}
  }

  & > h2 {
    font-size: 2rem;

    ${mobile`{
      font-size: 1.8rem;
    }`}

    ${xMobile`{
      font-size: 1.5rem;
    }`}
  }

  & > h3 {
    font-size: 1.75rem;

    ${mobile`{
      font-size: 1.5rem;
    }`}

    ${xMobile`{
      font-size: 1.2rem;
    }`}
  }

  & > h4 {
    font-size: 1.5rem;

    ${mobile`{
      font-size: 1.3rem;
    }`}

    ${xMobile`{
      font-size: 1rem;
    }`}
  }

  & > h5 {
    font-size: 1.25rem;

    ${mobile`{
      font-size: 1rem;
    }`}

    ${xMobile`{
      font-size: 0.8rem;
    }`}
  }

  & > h6 {
    font-size: 1rem;

    ${mobile`{
      font-size: 0.8rem;
    }`}

    ${xMobile`{
      font-size: 0.6rem;
    }`}
  }

  & > p {
    display: block;
    width: 100%;
    margin: 16px 0;
    font-size: 1.3rem;

    ${mobile`{
      margin: 12px 0;
      font-size: 1.1rem;
    }`}

    ${xMobile`{
      margin: 8px 0;
      font-size: 0.8rem;
    }`}
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

      ${mobile`{
        padding: 24px;
      }`}

      ${xMobile`{
        padding: 16px;
      }`}
    }

    ${mobile`{
      padding: 12px;
      font-size: 0.7rem;
      line-height: 16px;
    }`}

    ${xMobile`{
      padding: 8px;
      font-size: 0.5rem;
      line-height: 12px;
    }`}

    ${sMobile`{
      padding: 4px;
      font-size: 0.4rem;
      line-height: 8px;
    }`}
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

    ${mobile`{
      font-size: 1rem;
    }`}

    ${xMobile`{
      font-size: 0.8rem;
    }`}

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

  ${mobile`{
    padding: 24px 0;
  }`}
`;

export const PostTitleText = styled.div`
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  line-height: 56px;

  ${mobile`{
    font-size: 2rem;
    line-height: 36px;
  }`}
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

  ${mobile`{
    padding: 6px 12px;
    font-size: 0.8rem;
  }`}

  &.light {
    background-color: ${COLORS.primary};
  }

  &.dark {
    background-color: ${COLORS.danger};
  }
`;

export const PostTitleDataContainer = styled.div`
  font-size: 1.2rem;
  margin-left: auto;
  text-align: right;

  ${mobile`{
    font-size: 1rem;
  }`}
`;

export const PostRecommendWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  height: fit-content;
  margin: 32px auto;
  padding: 16px;
  align-items: center;
  row-gap: 16px;
  border-width: 3px;
  border-style: solid;
  border-radius: 8px;
  cursor: pointer;

  &.light {
    background-color: ${COLORS.lightGray};
  }

  &.dark {
    background-color: ${COLORS.darkGray};
  }
`;

export const PostRecommendImage = styled.img`
  width: 80px;
  height: 80px;

  ${mobile`{
    width: 60px;
    height: 60px;
  }`}

  ${xMobile`{
    width: 50px;
    height: 50px;
  }`}
`;

export const PostRecommendCount = styled.span`
  font-size: 1.2rem;
  font-weight: 700;

  ${mobile`{
    font-size: 1rem;
  }`}

  ${mobile`{
    font-size: 0.9rem;
  }`}
`;
