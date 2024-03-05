"use client";

import { useGlobalContext } from "@/app/context/GlobalContext";
import { useThemeContext } from "@/app/context/ThemeContext";

import { VisitWrapper } from "@/app/styles/index/visit.style";

import type { FC } from "react";

const VisitComponent: FC = () => {
  const { visit } = useGlobalContext();
  const theme = useThemeContext();

  return (
    <VisitWrapper className={theme?.mode}>
      <span>today : {visit.today}</span>
      <span>/</span>
      <span>total : {visit.total}</span>
    </VisitWrapper>
  );
};

export default VisitComponent;
