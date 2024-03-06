"use client";

import styled from "styled-components";

import { tablet, mobile } from "@/app/utils/style.utils";

import COLORS from "@/app/constant/colors";

export const VisitWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: inherit;
  column-gap: 8px;
  font-size: 1.2rem;

  &.light {
    color: ${COLORS.black};
  }

  &.dark {
    color: ${COLORS.darkRed};
  }

  ${tablet`{
    font-size: 1rem;
  }`}

  ${mobile`{
    font-size: 0.8rem;
  }`}
`;
