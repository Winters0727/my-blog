import styled from "styled-components";

export const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 32px;
  padding: 16px 32px;
  row-gap: 24px;
  min-width: 320px;
  max-width: 1280px;
  justify-content: center;
  align-items: center;
`;

export const IconContainer = styled.div`
  display: flex;
  column-gap: 16px;
`;

export const IconImage = styled.img`
  width: 48px;
  height: 48px;
  cursor: pointer;
`;

export const FooterText = styled.div`
  font-size: 1.2rem;
  text-align: center;
`;
