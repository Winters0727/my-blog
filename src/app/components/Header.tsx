"use client";

import { useThemeContext } from "../context/ThemeContext";

import {
  HeaderWrapper,
  HeaderMainWrapper,
  HeaderSpace,
  ModeContainer,
  ModeChangeImage,
} from "../styles/header.style";

import COLORS from "../constant/colors";

const Header = () => {
  const THEME_IMAGES = {
    dark: "/images/icons/light-mode.svg",
    light: "/images/icons/dark-mode.svg",
  };

  const theme = useThemeContext();

  return (
    <HeaderWrapper>
      <HeaderMainWrapper></HeaderMainWrapper>
      <HeaderSpace />
      <ModeContainer>
        {theme && (
          <ModeChangeImage
            src={THEME_IMAGES[theme.mode]}
            alt="theme-change-image"
            onClick={theme.toggleMode}
          />
        )}
      </ModeContainer>
    </HeaderWrapper>
  );
};

export default Header;
