"use client";

import styled from "styled-components";

import { tablet, mobile, xMobile } from "@/app/utils/style.utils";

import COLORS from "@/app/constant/colors";

const { light, dark } = COLORS.theme;

export const SearchBarWrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 32px;
  row-gap: 16px;

  ${mobile`{
    margin-top: 24px;
    row-gap: 12px;
  }`}
`;

export const SearchBarInput = styled.input`
  height: 20px;
  padding: 8px;
  font-size: 1rem;
  border-radius: 4px;
  outline: none;

  ${mobile`{
    height: 16px;
    font-size: 0.9rem;
  }`}
`;

export const SearchBarButton = styled.button`
  padding: 8px;
  color: ${COLORS.white};
  font-size: 1.2rem;
  font-weight: 700;
  border-radius: 8px;
  border-color: transparent;
  cursor: pointer;

  ${mobile`{
    border-radius: 4px;
    font-size: 1rem;
  }`}

  &.light {
    background-color: ${COLORS.success};
  }

  &.dark {
    background-color: ${COLORS.info};
  }
`;
