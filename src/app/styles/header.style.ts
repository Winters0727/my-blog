import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  position: sticky;
  top: 0;
  width: 100%;
  margin-bottom: 32px;
  padding: 16px 32px;
  min-width: 320px;
  max-width: 1280px;
  justify-content: center;
  align-items: center;
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
  width: 120px;
  z-index: 3;
`;

export const ModeChangeImage = styled.img`
  width: 48px;
  height: 48px;
  cursor: pointer;
`;
