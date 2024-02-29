"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

import { useThemeContext } from "@/app/context/ThemeContext";

import {
  SeriesWrapper,
  SeriesTitle,
  SeriesLink,
  SeriesLinkContainer,
} from "@/app/styles/post/series.style";

import type { FC } from "react";
import type { Series } from "@/app/types/post.type";

interface SeriesListProps {
  title: string;
  series: Series[];
}

const SeriesList: FC<SeriesListProps> = ({ title, series }) => {
  const [isClient, setIsClient] = useState(false);

  const theme = useThemeContext();

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <SeriesWrapper className={theme && theme.mode}>
      <SeriesTitle>{title} 관련 포스트</SeriesTitle>
      <SeriesLinkContainer>
        {series.map((data, index) => (
          <Link key={data.title} href={data.path}>
            <SeriesLink
              className={location.pathname === data.path ? "current" : ""}
            >
              {`${index + 1}. ${data.title}`}
            </SeriesLink>
          </Link>
        ))}
      </SeriesLinkContainer>
    </SeriesWrapper>
  );
};

export default SeriesList;
