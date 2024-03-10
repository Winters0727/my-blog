"use client";

import styled from "styled-components";

import { tablet, mobile, xMobile } from "../utils/style.utils";

export const NotFoundWrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1280px;
  height: 100%;
  margin-top: 64px;
  margin-bottom: auto;
  row-gap: 16px;
  font-size: 4.5rem;

  ${tablet`{
    margin-top: 48px;
    font-size: 3.5rem;
  }`}

  ${mobile`{
    margin-top: 32px;
    font-size: 2.5rem;
  }`}

  ${xMobile`{
    margin-top: 24px;
    font-size: 1.5rem;
  }`}
`;

export const NotFoundTitle = styled.div`
  font-weight: 700;
`;

export const NotFoundText = styled.div`
  font-weight: 500;
`;

export const NotFoundCanvas = styled.canvas`
  width: 500px;
  height: 500px;

  ${tablet`{
    width: 400px;
    height: 400px;
  }`}

  ${mobile`{
    width: 300px;
    height: 300px;
  }`}

  ${xMobile`{
    width: 200px;
    height: 200px;
  }`}
`;

export const NotFoundImage = styled.img`
  display: none;
`;
