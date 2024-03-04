"use client";

import styled from "styled-components";

export const BackgroundWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
`;

export const PageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
  min-width: 320px;
  max-width: 1280px;
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
  min-width: 1280px;
  height: 100%;
  justify-content: space-around;
  margin: 64px 0 auto 0;
  font-family: "BaeminJua";
`;

const StyledSection = styled.section`
  display: flex;
`;

export const LeftSection = styled(StyledSection)`
  justify-content: center;
  width: 160px;
`;

export const MiddleSection = styled(StyledSection)`
  width: 680px;
`;

export const RightSection = styled(StyledSection)`
  flex-direction: column;
  align-items: center;
  width: 300px;
  row-gap: 16px;
`;

export const PostListWrapper = styled.main`
  display: flex;
  flex-direction: column;
  height: fit-content;
  row-gap: 32px;
`;
