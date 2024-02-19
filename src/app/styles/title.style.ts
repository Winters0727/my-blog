import styled from "styled-components";

import COLORS from "@/app/constant/colors";

const { light, dark } = COLORS.theme;

export const TitleWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 20vh;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  background-size: cover;

  .light {
    background-color: ${light.background};
  }

  .dark {
    background-color: ${dark.background};
  }

  & > {
    a {
      display: flex;
      width: 100%;
      height: 100%;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const TitleText = styled.div`
  font-family: "BaeminJua";
  font-size: 5rem;
  text-align: center;
  word-break: keep-all;
`;
