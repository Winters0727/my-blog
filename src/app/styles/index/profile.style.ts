import styled from "styled-components";

import COLORS from "@/app/constant/colors";

export const ProfileWrapper = styled.aside`
  display: flex;
  width: 100%;
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
`;

export const ProfileImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 300px;
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  row-gap: 12px;
`;

export const ProfileName = styled.div`
  font-size: 2rem;
`;

export const ProfileDesciption = styled.div`
  font-size: 1.2rem;
  word-break: break-all;

  & > p {
    line-height: 24px;
  }
`;
