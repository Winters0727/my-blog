import styled from "styled-components";

import { tablet, mobile, xMobile } from "@/app/utils/style.utils";

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

  ${tablet`{
    row-gap: 10px;
  }`}

  ${mobile`{
    row-gap: 8px;
  }`}
`;

export const MobileTagListWrapper = styled.ol`
  display: none;
  color: ${COLORS.white};
  list-style-type: none;

  ${xMobile`{
    display: flex;
    align-items: center;
    padding: 8px;
    column-gap: 16px;
    overflow-x: auto;
  }`}
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

  ${tablet`{
    padding: 14px 20px;
  }`}

  ${mobile`{
    border-radius: 4px;
    padding: 8px;
  }`}

  ${xMobile`{
    min-width: 100px;
    padding: 16px;
    border-radius: 8px;
  }`}
`;

export const SubTagListWrapper = styled.ol`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  margin-bottom: 8px;
  row-gap: 12px;
  list-style-type: none;

  ${tablet`{
    margin-top: 14px;
    margin-bottom: 6px;
    row-gap: 10px;
  }`}

  ${mobile`{
    margin-top: 12px;
    margin-bottom: 4px;
    row-gap: 8px;
  }`}
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

  ${tablet`{
    padding: 10px;
  }`}

  ${mobile`{
    padding: 8px;
  }`}
`;

export const TagText = styled.span`
  font-size: 1.5rem;

  ${tablet`{
    font-size: 1.4rem;
  }`}

  ${mobile`{
    font-size: 1.2rem;
  }`}

  ${xMobile`{
    font-size: 1.3rem;
  }`}
`;

export const TagCount = styled.span`
  margin-left: auto;
  font-size: 1.2rem;

  ${tablet`{
    font-size: 1.1rem;
  }`}

  ${mobile`{
    font-size: 0.9rem;
  }`}

  ${xMobile`{
    font-size: 1.1rem;  
  }`}
`;

export const SubTagText = styled.span`
  font-size: 1.3rem;

  ${tablet`{
    font-size: 1.2rem;
  }`}

  ${mobile`{
    font-size: 1rem;
  }`}
`;

export const SubTagCount = styled.span`
  margin-left: auto;
  font-size: 1.1rem;

  ${tablet`{
    font-size. 1rem;
  }`}

  ${mobile`{
    font-size: 0.9rem;
  }`}
`;
