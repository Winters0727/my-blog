"use client";

import { useEffect } from "react";

import { getVisitCount } from "@/app/services/index.service";

import type { FC } from "react";

const VisitCount: FC = () => {
  useEffect(() => {
    getVisitCount();
  }, []);

  return <></>;
};

export default VisitCount;
