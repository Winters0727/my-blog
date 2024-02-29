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

export const LeftSection = styled.section`
  display: flex;
  justify-content: center;
  min-width: 160px;
`;

export const MiddleSection = styled.section`
  display: flex;
`;

export const RightSection = styled.section`
  display: flex;
  justify-content: center;
  min-width: 300px;
`;

export const PostListWrapper = styled.main`
  display: flex;
  flex-direction: column;
  height: fit-content;
  row-gap: 32px;
`;
