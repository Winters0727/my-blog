"use client";

import styled from "styled-components";

import { tablet, mobile, xMobile } from "@/app/utils/style.utils";

export const BackgroundWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
`;

export const PageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
  height: 100%;
  min-height: 100vh;

  a,
  a:link,
  a:active,
  a:hover,
  a:visited {
    color: inherit;
    text-decoration: none;
  }
`;

export const MainWrapper = styled.section`
  display: flex;
  width: 100%;
  max-width: 1280px;
  height: 100%;
  justify-content: space-around;
  margin-top: 64px;
  margin-bottom: auto;
  padding: 0 24px;
  column-gap: 32px;
  font-family: "BaeminJua";

  ${tablet`{
    max-width: 920px;
    margin-top: 48px;
    padding: 0 20px;
    column-gap: 28px;
  }`}

  ${mobile`{
    max-width: 680px;
    margin-top: 32px;
    padding: 0 16px;
    column-gap: 16px;
  }`}

  ${xMobile`{
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    row-gap: 16px;
  }`}
`;

const StyledSection = styled.section`
  display: flex;
`;

export const TopSection = styled(StyledSection)`
  display: none;

  ${xMobile`{
  display: flex;
  width: 100%;
 }`}
`;

export const LeftSection = styled(StyledSection)`
  justify-content: center;
  min-width: 140px;

  ${tablet`{
    min-width: 120px;
  }`}

  ${mobile`{
    min-width: 80px;
  }`}

  ${xMobile`{
    display: none;
  }`}
`;

export const MiddleSection = styled(StyledSection)`
  justify-content: center;
  width: 100%;
`;

export const RightSection = styled(StyledSection)`
  min-width: 300px;

  ${tablet`{
    min-width: 200px;
  }`}

  ${mobile`{
    min-width: 100px;
  }`}

  ${xMobile`{
    display: none;
  }`}
`;

export const RightSectionWrapper = styled.aside`
  display: flex;
  max-width: inherit;
  flex-direction: column;
  align-items: center;
  row-gap: 16px;

  ${tablet`{
    row-gap: 14px;
  }`}

  ${mobile`{
    row-gap: 12px;
  }`}
`;

export const PostListWrapper = styled.main`
  display: flex;
  width: 100%;
  flex-direction: column;
  height: fit-content;
  row-gap: 32px;

  ${tablet`{
    row-gap: 24px;
  }`}

  ${mobile`{
    row-gap: 16px;
  }`}

  ${xMobile`{
    width: 300px;
    row-gap: 32px;
  }
  `}
`;
