"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import ProfileComponent from "@/app/components/index/ProfileComponent";
import ClockComponent from "@/app/components/index/ClockComponent";
import VisitComponent from "@/app/components/index/VisitComponent";

import {
  MainWrapper,
  LeftSection,
  MiddleSection,
  RightSection,
  RightSectionWrapper,
} from "@/app/styles/index.style";

import type { NextPage } from "next";

const Home: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/posts");
  }, []);

  return (
    <MainWrapper>
      <LeftSection></LeftSection>
      <MiddleSection></MiddleSection>
      <RightSection>
        <RightSectionWrapper>
          <ProfileComponent />
          <ClockComponent />
          <VisitComponent />
        </RightSectionWrapper>
      </RightSection>
    </MainWrapper>
  );
};

export default Home;
