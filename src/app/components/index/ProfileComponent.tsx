"use client";

import { useThemeContext } from "@/app/context/ThemeContext";

import {
  ProfileWrapper,
  ProfileImage,
  ProfileContainer,
  ProfileName,
  ProfileDesciption,
} from "@/app/styles/index/profile.style";

import {
  PROFILE_DEFAULT_IMAGE,
  PROFILE_IMAGE,
  PROFILE_NAME,
  PROFILE_DESCRIPTION,
} from "@/app/constant/index";

import type { FC } from "react";

const ProfileComponent: FC = () => {
  const theme = useThemeContext();

  return (
    <ProfileWrapper className={theme?.mode}>
      <ProfileImage
        src={PROFILE_IMAGE || PROFILE_DEFAULT_IMAGE}
        alt="프로필 이미지"
      />
      <ProfileContainer>
        <ProfileName>{PROFILE_NAME}</ProfileName>
        <ProfileDesciption>
          {PROFILE_DESCRIPTION.split("\n").map((text, index) => (
            <p key={`${index}-${text}`}>{text}</p>
          ))}
        </ProfileDesciption>
      </ProfileContainer>
    </ProfileWrapper>
  );
};

export default ProfileComponent;
