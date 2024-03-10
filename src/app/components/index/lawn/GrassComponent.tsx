"use client";

import { useState } from "react";

import COLORS from "@/app/constant/colors";

import {
  GrassWrapper,
  GrassTooltipWrapper,
  GrassTooltipTriangle,
  GrassTooltip,
  Grass,
} from "@/app/styles/index/lawn.style";

import type { FC } from "react";
import type { ThemeMode } from "@/app/types/theme.type";

interface GrassProps {
  theme: ThemeMode;
  date: string;
  count: number;
}

const GrassComponent: FC<GrassProps> = ({ theme, date, count }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const getGrassColor = (theme: ThemeMode, count: number) => {
    if (count === 0) return theme === "light" ? COLORS.lightGray : COLORS.gray;

    const valueDiff = 255 - count * 48;
    const hexValue = valueDiff < 16 ? "00" : valueDiff.toString(16);

    return `#${
      theme === "light"
        ? `${hexValue}ff${hexValue}`
        : `ff${hexValue}${hexValue}`
    }`;
  };

  const handleMouseEnter = (e: React.MouseEvent) => setShowTooltip(true);
  const handleMouseOut = (e: React.MouseEvent) => setShowTooltip(false);

  return (
    <GrassWrapper>
      {showTooltip && (
        <GrassTooltipWrapper>
          <GrassTooltip>
            {date} : {count} {count === 1 ? "post" : "posts"}
          </GrassTooltip>
          <GrassTooltipTriangle />
        </GrassTooltipWrapper>
      )}
      <Grass
        key={date}
        data-tooltip={date}
        style={{
          backgroundColor: getGrassColor(theme, count),
        }}
        onMouseEnter={handleMouseEnter}
        onMouseOut={handleMouseOut}
      />
    </GrassWrapper>
  );
};

export default GrassComponent;
