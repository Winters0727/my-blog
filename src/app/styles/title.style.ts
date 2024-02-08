import styled from "styled-components";

import COLORS from "../constant/colors";

export const TitleWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 10vh;
  justify-content: center;
  align-items: center;
  border-radius: 25px;

  .light {
    background-color: ${COLORS.theme.light};
  }

  .dark {
    background-color: ${COLORS.theme.dark};
  }
`;

export const TitleText = styled.div`
  font-family: "BaeminJua";
  font-size: 5rem;
  text-align: center;
  word-break: keep-all;
`;
