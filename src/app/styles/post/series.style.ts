import styled from "styled-components";

import { tablet, mobile, xMobile, sMobile } from "@/app/utils/style.utils";

import COLORS from "@/app/constant/colors";

export const SeriesWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  padding: 32px 0;
  row-gap: 32px;
  border-radius: 8px;

  ${tablet`{
    padding: 24px 0;
    row-gap: 24px;
  }`}

  ${mobile`{
    padding: 16px 0;
    row-gap: 16px;
  }`}

  & > div {
    margin-left: 16px;
  }

  &.light {
    background-color: ${COLORS.primary};

    & > div > a > span {
      color: ${COLORS.white};

      &.current {
        color: ${COLORS.danger};
      }

      &.current:hover {
        color: ${COLORS.red};
      }

      &:not(.current):hover {
        color: ${COLORS.gray};
      }
    }
  }

  &.dark {
    background-color: ${COLORS.danger};

    & > div > a > span {
      color: ${COLORS.white};

      &.current {
        color: ${COLORS.primary};
      }

      &.current:hover {
        color: ${COLORS.blue};
      }

      &:not(.current):hover {
        color: ${COLORS.gray};
      }
    }
  }
`;

export const SeriesTitle = styled.span`
  color: ${COLORS.white};
  padding: 0 32px;
  font-size: 1.6rem;

  ${tablet`{
    font-size: 1.5rem;
  }`}

  ${mobile`{
    font-size: 1.3rem;
  }`}

  ${xMobile`{
    font-size: 1.1rem;
  }`}

  ${sMobile`{
    font-size: 0.9rem;
  }`}
`;

export const SeriesLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  padding: 0 32px;
  font-size: 1.2rem;

  & > a {
    width: fit-content;
    height: fit-content;
  }

  ${tablet`{
    row-gap: 6px;
    padding: 0 28px;
    font-size: 1.1rem;
  }`}

  ${xMobile`{
    row-gap: 4px;
    padding: 0 24px;
    font-size: 0.9rem;
  }`}

  ${sMobile`{
    row-gap: 2px;
    font-size: 0.7rem;
  }`}
`;

export const SeriesLink = styled.span``;
