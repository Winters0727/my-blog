"use client";

import { useEffect } from "react";

import type { FC } from "react";

const BlockContextMenu: FC = () => {
  useEffect(() => {
    document.body.addEventListener("contextmenu", (e) => e.preventDefault());
  }, []);

  return <></>;
};

export default BlockContextMenu;
