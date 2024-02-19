"use client";

import Link from "next/link";

import { useThemeContext } from "@/app/context/ThemeContext";

import { TitleWrapper, TitleText } from "@/app/styles/title.style";

import type { FC } from "react";

interface TitleProps {
  title: string;
  backgroundImage?: string;
}

const Title: FC<TitleProps> = ({
  title,
  backgroundImage,
}: {
  title: string;
  backgroundImage?: string;
}) => {
  const theme = useThemeContext();

  return (
    <TitleWrapper
      className={theme?.mode}
      style={{
        backgroundImage: (backgroundImage && `url(${backgroundImage})`) || "",
      }}
    >
      <Link href="/">
        <TitleText>{title}</TitleText>
      </Link>
    </TitleWrapper>
  );
};

export default Title;
