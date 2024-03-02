import styled from "styled-components";

import COLORS from "@/app/constant/colors";

export const SeriesWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  padding: 32px 0;
  row-gap: 32px;
  border-radius: 8px;

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
`;

export const SeriesLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
  padding: 0 32px;
`;

export const SeriesLink = styled.span``;
