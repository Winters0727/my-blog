"use client";

import styled from "styled-components";

import COLORS from "@/app/constant/colors";

export const ClockWrapper = styled.div<{ $hourFormat: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px 16px;
  width: ${(props) => (props.$hourFormat ? "260px" : "240px")};
  height: fit-content;
  font-family: "DSDigital";
  font-weight: 700;
  border-radius: 16px;
  cursor: pointer;

  &.light {
    color: ${COLORS.black};
    border: 5px solid ${COLORS.black};
    box-shadow: 5px 5px 10px ${COLORS.black};
  }

  &.dark {
    color: ${COLORS.darkRed};
    border: 5px solid ${COLORS.darkRed};
    box-shadow: 5px 5px 10px ${COLORS.darkRed};
  }
`;

export const TimeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 4px;
  column-gap: 12px;
  font-size: 3.5rem;
`;

export const TimeFormatWrapper = styled.div`
  display: flex;
  font-size: 2rem;
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
  font-size: 1.5rem;

  &.light {
    border-top: 5px solid ${COLORS.black};
  }

  &.dark {
    border-top: 5px solid ${COLORS.darkRed};
  }
`;

export const YearWrapper = styled.span``;

export const MonthWrapper = styled.span``;

export const DateWrapper = styled.span``;

export const DayWrapper = styled.span``;

export const DateCharacter = styled.span``;
