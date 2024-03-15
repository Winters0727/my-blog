"use client";

import { useRef, memo } from "react";

import { useThemeContext } from "@/app/context/ThemeContext";

import {
  SearchBarWrapper,
  SearchBarInput,
  SearchBarButton,
} from "@/app/styles/index/search.style";

import type { Dispatch, FC } from "react";
import type { MainAction } from "@/app/reducers/MainReducer";

interface SearchBarProps {
  dispatch: Dispatch<MainAction>;
}

const SearchBar: FC<SearchBarProps> = ({ dispatch }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const theme = useThemeContext();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const input = inputRef.current;

    if (input) {
      const keyword = input.value;

      dispatch({
        type: "SEARCH_BY_KEYWORD",
        payload: { keyword },
      });
    }
  };

  return (
    <SearchBarWrapper onSubmit={onSubmit}>
      <SearchBarInput
        ref={inputRef}
        type="text"
        name="keyword"
        placeholder="검색어를 입력"
        maxLength={20}
        autoCorrect="false"
        autoComplete="false"
      />
      <SearchBarButton className={theme?.mode} type="submit">
        검색
      </SearchBarButton>
    </SearchBarWrapper>
  );
};

export default memo(SearchBar);
