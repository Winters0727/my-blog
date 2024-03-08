"use client";

import styled from "styled-components";

import { tablet, mobile } from "@/app/utils/style.utils";

import COLORS from "@/app/constant/colors";

export const ClockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px 16px;
  width: 100%;
  height: fit-content;
  font-family: "DSDigital";
  font-weight: 700;
  border-radius: 16px;
  cursor: pointer;
  border-width: 5px;
  border-style: solid;
  box-shadow: 5px 5px 10px;

  &.light {
    color: ${COLORS.black};
    border-color: ${COLORS.black};
  }

  &.dark {
    color: ${COLORS.darkRed};
    border-color: ${COLORS.darkRed};
  }

  ${tablet`{
    padding: 4px 10px;
    border-width: 4px;
    border-radius: 12px;
    box-shadow: 3px 3px 7px;
  }`}

  ${mobile`{
    padding: 4px;
    border-width: 3px;
    border-radius: 8px;
    box-shadow: 1px 1px 4px;
  }`}
`;

export const TimeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 4px;
  column-gap: 12px;
  font-size: 3.5rem;

  ${tablet`{
    column-gap: 10px;
    font-size: 2.2rem;
  }`}

  ${mobile`{
    column-gap: 8px;
    font-size: 1rem;
  }`}
`;

export const TimeFormatWrapper = styled.div`
  display: flex;
  font-size: 3rem;

  ${tablet`{
    font-size: 1.8rem;
  }`}

  ${mobile`{
    font-size: 1rem;
  }`}
`;

export const TimeCharWrapper = styled.div`
  display: flex;
`;

export const TimeCharacter = styled.span``;

export const DateContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 8px;
  width: 100%;
  font-size: 2rem;
  border-top-width: 5px;
  border-style: solid;

  &.light {
    border-color: ${COLORS.black};
  }

  &.dark {
    border-color: ${COLORS.darkRed};
  }

  ${tablet`{
    padding-top: 6px;
    font-size: 1.4rem;
    border-top-width: 4px;
  }`}

  ${mobile`{
    padding-top: 4px;
    font-size: 0.7rem;
    border-top-width: 3px;
  }`}
`;

export const YearWrapper = styled.span``;

export const MonthWrapper = styled.span``;

export const DateWrapper = styled.span``;

export const DayWrapper = styled.span``;

export const DateCharacter = styled.span``;
