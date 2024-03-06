import styled from "styled-components";

import { tablet, mobile } from "../utils/style.utils";

export const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 32px;
  padding: 16px 0;
  row-gap: 24px;
  justify-content: center;
  align-items: center;

  ${tablet`{
    margin-top: 24px;
    padding: 12px 0;
    row-gap: 20px;
  }`}

  ${mobile`{
    margin-top: 16px;
    padding: 8px 0;
    row-gap: 16px;
  }`}
`;

export const IconContainer = styled.div`
  display: flex;
  column-gap: 16px;
`;

export const IconImage = styled.img`
  width: 48px;
  height: 48px;
  cursor: pointer;

  ${tablet`{
    width: 44px;
    height: 44px;
  }`}

  ${mobile`{
    width: 40px;
    height: 40px;
  }`}
`;

export const FooterText = styled.div`
  font-size: 1.2rem;
  text-align: center;

  ${tablet`{
    font-size: 1.1rem;
  }`}

  ${mobile`{
    font-size: 1rem;
  }`}
`;
