import styled from "styled-components";

import COLORS from "@/app/constant/colors";

const { light, dark } = COLORS.theme;

export const TagListWrapper = styled.ol`
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 10vh;
  width: 100%;
  height: fit-content;
  row-gap: 12px;
  color: ${COLORS.white};
  list-style-type: none;
`;

export const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TagWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 24px;
  font-weight: 500;
  border-radius: 8px;
  cursor: pointer;

  &.light {
    background-color: ${light.tag};

    &.selected {
      background-color: ${light.tagSelected};
    }
  }

  &.dark {
    background-color: ${dark.tag};

    &.selected {
      background-color: ${dark.tagSelected};
    }
  }

  &:hover {
    font-weight: 700;

    &.light {
      background-color: ${light.tagHover};
    }

    &.dark {
      background-color: ${dark.tagHover};
    }
  }
`;

export const SubTagListWrapper = styled.ol`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  margin-bottom: 8px;
  row-gap: 12px;
  list-style-type: none;
`;

export const SubTagWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  font-weight: 500;
  border-radius: 4px;
  cursor: pointer;

  &.light {
    background-color: ${light.subTag};

    &.selected {
      background-color: ${light.subTagSelected};
    }
  }

  &.dark {
    background-color: ${dark.subTag};

    &.selected {
      background-color: ${dark.subTagSelected};
    }
  }

  &:hover {
    font-weight: 700;

    &.light {
      background-color: ${light.subTagHover};
    }

    &.dark {
      background-color: ${dark.subTagHover};
    }
  }
`;

export const TagText = styled.span`
  font-size: 1.5rem;
`;

export const TagCount = styled.span`
  margin-left: auto;
  font-size: 1.2rem;
`;

export const SubTagText = styled.span`
  font-size: 1.3rem;
`;

export const SubTagCount = styled.span`
  margin-left: auto;
  font-size: 1.1rem;
`;
