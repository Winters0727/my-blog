"use client";

import Link from "next/link";

import { useThemeContext } from "@/app/context/ThemeContext";

import { TitleWrapper, TitleText } from "@/app/styles/title.style";

import { TITLE, BACKGROUND_IMAGE } from "@/app/constant/index";

import type { FC } from "react";

const Title: FC = () => {
  const theme = useThemeContext();

  return (
    <TitleWrapper
      className={theme?.mode}
      style={{
        backgroundImage: (BACKGROUND_IMAGE && `url(${BACKGROUND_IMAGE})`) || "",
      }}
    >
      <Link href="/">
        <TitleText>{TITLE}</TitleText>
      </Link>
    </TitleWrapper>
  );
};

export default Title;
