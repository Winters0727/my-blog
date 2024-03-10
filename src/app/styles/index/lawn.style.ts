"use client";

import styled from "styled-components";

import { tablet, mobile, xMobile } from "@/app/utils/style.utils";

import COLORS from "@/app/constant/colors";

export const LawnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  row-gap: 5px;

  ${tablet`{
    width: 200px;
    row-gap: 4px;
  }`}

  ${mobile`{
    width: 100px;
    row-gap: 2px;
  }`}


  ${xMobile`{
    display: none;
  }`}

  &.light {
    border-color: ${COLORS.black};
  }

  &.dark {
    border-color: ${COLORS.white};
  }
`;

export const LawnRow = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 5px;

  ${tablet`{
    column-gap: 4px;
  }`}

  ${mobile`{
    column-gap: 2px;
  }`}
`;

export const GrassWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
`;

export const GrassTooltipWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: -40px;
  z-index: 3;

  ${tablet`{
  }`}

  ${mobile`{
  }`}
`;

export const GrassTooltip = styled.div`
  width: 200px;
  padding: 8px 12px;
  background-color: ${COLORS.black};
  color: ${COLORS.white};
  border-radius: 16px;
  font-size: 1rem;
  text-align: center;

  ${tablet`{
    width: 180px;
    font-size: 0.9rem;
  }`}

  ${mobile`{
    width: 160px;
    font-size: 0.8rem;
  }`}
`;

export const GrassTooltipTriangle = styled.div`
  border-top: 8px solid ${COLORS.black};
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
`;

export const Grass = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 4px;
  cursor: pointer;

  ${tablet`{
    width: 20px;
    height: 20px;
  }`}

  ${mobile`{
    width: 15px;
    height: 15px;
  }`}


  &.light {
    background-color: ${COLORS.lightGray};
  }

  &.dark {
    background-color: ${COLORS.gray};
  }
`;
