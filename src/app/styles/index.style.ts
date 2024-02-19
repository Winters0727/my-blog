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
  justify-content: space-around;
  margin: 64px 0;
  font-family: "BaeminJua";
`;

export const PostListWrapper = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 32px;
`;
