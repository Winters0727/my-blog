import styled from "styled-components";

import { tablet, mobile } from "@/app/utils/style.utils";

import COLORS from "@/app/constant/colors";

export const ProfileWrapper = styled.div`
  display: flex;
  width: inherit;
  flex-direction: column;
  border-width: 5px;
  border-style: solid;
  border-radius: 8px;

  .light {
    border-color: ${COLORS.white};
  }

  .dark {
    border-color: ${COLORS.black};
  }

  ${tablet`{
    border-width: 4px;
  }`}

  ${mobile`{
    border-width: 3px;
  }`}
`;

export const ProfileImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 300px;

  ${tablet`{
    max-height: 200px;
  }`}

  ${mobile`{
    max-height: 100px;
  }`}
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  row-gap: 12px;

  ${tablet`{
    padding: 10px;
    font-size: 1rem;
    row-gap: 10px;
  }`}

  ${mobile`{
    padding: 4px;
    font-size: 0.6rem;
    row-gap: 8px;
  }`}
`;

export const ProfileName = styled.div`
  font-size: 2rem;

  ${tablet`{
    font-size: 1.6rem;
  }`}

  ${mobile`{
    font-size: 1rem;
  }`}
`;

export const ProfileDesciption = styled.div`
  font-size: 1.2rem;
  word-break: break-all;

  & > p {
    line-height: 24px;

    ${tablet`{
      line-height: 20px;
    }`}

    ${mobile`{
      line-height: 10px;
    }`}
  }

  ${tablet`{
    font-size: 1rem;
  }`}

  ${mobile`{
    font-size: 0.5rem;
  }`}
`;
