"use client";
import { createContext, useContext, useState, useEffect } from "react";

import { getVisitCount } from "@/app/services/index.service";

import type { VisitData } from "@/app/types/index.type";

interface GlobalContext {
  visit: VisitData;
}

const GlobalContext = createContext<GlobalContext>({
  visit: {
    today: 0,
    total: 0,
  },
});

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [today, setToday] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchVisitCount = async () => {
      const { data } = await getVisitCount();

      if (data) {
        const { today, total } = data;

        setToday(today);
        setTotal(total);
      }
    };

    fetchVisitCount();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        visit: {
          today,
          total,
        },
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
