"use client";

import { useMemo } from "react";
import dayjs from "dayjs";

import GrassComponent from "@/app/components/index/lawn/GrassComponent";

import { useThemeContext } from "@/app/context/ThemeContext";

import { LAWN_DAY_DIFF } from "@/app/constant/time";

import { LawnWrapper, LawnRow } from "@/app/styles/index/lawn.style";

import type { Dispatch, FC } from "react";
import type { MainState, MainAction } from "@/app/reducers/MainReducer";

interface LawnProps {
  state: MainState;
  dispatch: Dispatch<MainAction>;
}

const LawnComponent: FC<LawnProps> = ({ state, dispatch }) => {
  const theme = useThemeContext();

  const [keyArray, countByDate] = useMemo(() => {
    const currentDate = dayjs(new Date());
    const standardDate = currentDate.subtract(LAWN_DAY_DIFF, "day");

    const dateArray: string[][] = [];
    const postCount: { [date: string]: number } = {};
    const recentPosts = state.totalPosts.filter(
      (post) => currentDate.diff(dayjs(post.createdAt), "day") <= LAWN_DAY_DIFF
    );

    let tempDateArray: string[] = [];

    for (let i = LAWN_DAY_DIFF; i > 0; i--) {
      const date = standardDate.add(i, "day").format("YYYY-MM-DD");

      if (tempDateArray.length > 0 && i % 6 === 0) {
        dateArray.push(tempDateArray);
        tempDateArray = [];
      }

      tempDateArray.push(date);

      postCount[date] = recentPosts.filter(
        (post) => dayjs(post.createdAt).format("YYYY-MM-DD") === date
      ).length;
    }

    if (tempDateArray.length) dateArray.push(tempDateArray);

    return [dateArray, postCount];
  }, []);

  return (
    <LawnWrapper className={theme?.mode}>
      {keyArray.map((dateArr) => (
        <LawnRow key={dateArr.join(",")}>
          {dateArr.map((date) => (
            <GrassComponent
              key={date}
              theme={theme.mode}
              date={date}
              count={countByDate[date]}
            />
          ))}
        </LawnRow>
      ))}
    </LawnWrapper>
  );
};

export default LawnComponent;
