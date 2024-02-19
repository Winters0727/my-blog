"use client";

import { useThemeContext } from "@/app/context/ThemeContext";

import {
  FooterWrapper,
  FooterText,
  IconContainer,
  IconImage,
} from "@/app/styles/footer.style";

import type { FC } from "react";

const Footer: FC = () => {
  const FOOTER_TEXT = "Copyright 2024. Winters0727. All rights reserved.";

  const THEME_DATA = {
    github: {
      light: "/images/icons/github-light.svg",
      dark: "/images/icons/github-dark.svg",
    },
    email: {
      light: "/images/icons/email-light.svg",
      dark: "/images/icons/email-dark.svg",
    },
  };

  const theme = useThemeContext();

  return (
    <FooterWrapper>
      {theme && (
        <IconContainer>
          <a href="mailto:winters0727@gmail.com">
            <IconImage
              src={THEME_DATA["email"][theme.mode]}
              alt="email 아이콘"
            />
          </a>
          <a href="https://github.com/winters0727">
            <IconImage
              src={THEME_DATA["github"][theme.mode]}
              alt="github 아이콘"
            />
          </a>
        </IconContainer>
      )}
      <FooterText>{FOOTER_TEXT}</FooterText>
    </FooterWrapper>
  );
};

export default Footer;
