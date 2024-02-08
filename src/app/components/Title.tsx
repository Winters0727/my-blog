"use client";

import { useThemeContext } from "../context/ThemeContext";

import { TitleWrapper, TitleText } from "../styles/title.style";

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
      style={{ backgroundImage: backgroundImage || "" }}
    >
      <TitleText>{title}</TitleText>
    </TitleWrapper>
  );
};

export default Title;
