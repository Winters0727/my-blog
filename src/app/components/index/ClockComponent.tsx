"use client";

import { useState, useEffect, useMemo } from "react";
import dayjs from "dayjs";
import "dayjs/locale/ko";

import { useThemeContext } from "@/app/context/ThemeContext";

import { DAYS } from "@/app/constant/time";

import {
  ClockWrapper,
  TimeContainer,
  TimeFormatWrapper,
  TimeCharWrapper,
  TimeCharacter,
  DateContainer,
  YearWrapper,
  MonthWrapper,
  DateWrapper,
  DayWrapper,
  DateCharacter,
} from "@/app/styles/index/clock.style";

import type { FC } from "react";

const ClockComponent: FC = () => {
  const [currentTime, setCurrentTime] = useState(Date.now());
  const [hourFormat, setHourFormat] = useState(true);

  const theme = useThemeContext();

  const timer = useMemo(() => {
    const time = dayjs(currentTime);

    const paddingDatetime = (time: number) => time.toString().padStart(2, "0");

    const timeData = {
      year: time.year().toString(),
      month: paddingDatetime(time.month() + 1),
      date: paddingDatetime(time.date()),
      hour: paddingDatetime(
        time.hour() > 12 && hourFormat ? time.hour() % 12 : time.hour()
      ),
      minute: paddingDatetime(time.minute()),
      second: paddingDatetime(time.second()),
      day: DAYS[time.day()],
      meridiem: time.hour() < 12 ? "AM" : "PM",
    };

    return timeData;
  }, [currentTime, hourFormat]);

  const handleClickClock = (e: React.MouseEvent) =>
    setHourFormat((prevValue) => !prevValue);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(Date.now());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <ClockWrapper className={theme?.mode} onClick={handleClickClock}>
      <TimeContainer>
        {hourFormat && (
          <TimeFormatWrapper>
            {Array.from(timer.meridiem).map((char, index) => (
              <TimeCharacter key={`${char}-${index}-${currentTime}`}>
                {char}
              </TimeCharacter>
            ))}
          </TimeFormatWrapper>
        )}
        <TimeCharWrapper>
          {Array.from([timer.hour, timer.minute, timer.second].join(":")).map(
            (char, index) => (
              <TimeCharacter key={`${char}-${index}-${currentTime}`}>
                {char}
              </TimeCharacter>
            )
          )}
        </TimeCharWrapper>
      </TimeContainer>
      <DateContainer className={theme?.mode}>
        <YearWrapper>
          {Array.from(timer.year).map((char, index) => (
            <DateCharacter key={`${char}-${index}-${currentTime}`}>
              {char}
            </DateCharacter>
          ))}
        </YearWrapper>
        <DateCharacter>/</DateCharacter>
        <MonthWrapper>
          {Array.from(timer.month).map((char, index) => (
            <DateCharacter key={`${char}-${index}-${currentTime}`}>
              {char}
            </DateCharacter>
          ))}
        </MonthWrapper>
        <DateCharacter>/</DateCharacter>
        <DateWrapper>
          {Array.from(timer.date).map((char, index) => (
            <DateCharacter key={`${char}-${index}-${currentTime}`}>
              {char}
            </DateCharacter>
          ))}
        </DateWrapper>
        <DateCharacter>/</DateCharacter>
        <DayWrapper>
          {Array.from(timer.day).map((char, index) => (
            <DateCharacter key={`${char}-${index}-${currentTime}`}>
              {char}
            </DateCharacter>
          ))}
        </DayWrapper>
      </DateContainer>
    </ClockWrapper>
  );
};

export default ClockComponent;
