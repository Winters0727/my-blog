import styled from "styled-components";

import COLORS from "@/app/constant/colors";

export const VisitWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  column-gap: 8px;
  font-size: 1.2rem;

  &.light {
    color: ${COLORS.black};
  }

  &.dark {
    color: ${COLORS.darkRed};
  }
`;
