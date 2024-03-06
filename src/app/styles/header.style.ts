import styled from "styled-components";

import { tablet, mobile } from "../utils/style.utils";

export const HeaderWrapper = styled.header`
  display: flex;
  position: sticky;
  top: 0;
  width: 100%;
  margin-bottom: 32px;
  padding: 16px 0;
  justify-content: center;
  align-items: center;

  ${tablet`{
    margin-bottom: 28px;
  }`}

  ${mobile`{
    margin-bottom: 24px;
  }`}
`;

export const HeaderBlur = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(8px);
  z-index: 2;
`;

export const HeaderMainWrapper = styled.div`
  display: flex;
  width: 200px;
  z-index: 3;
`;

export const HeaderSpace = styled.div`
  display: flex;
  width: 100%;
  max-width: 1060px;
`;

export const ModeContainer = styled.div`
  display: flex;
  z-index: 3;
  margin-right: 48px;
`;

export const ModeChangeImage = styled.img`
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
