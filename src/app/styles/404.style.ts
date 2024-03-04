"use client";

import styled from "styled-components";

export const NotFoundWrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-width: 1280px;
  height: 100%;
  margin: 64px 0 auto 0;
  row-gap: 16px;
`;

export const NotFoundTitle = styled.div`
  font-size: 5rem;
  font-weight: 700;
`;

export const NotFoundImage = styled.img`
  display: none;
`;
