import { https } from "./https";

import type { GameResponse } from "@/app/types/post.type";

export const getGameData = async (gameId: number) => {
  const data = (await https.get<GameResponse>(`/blog/game/${gameId}`)).data;

  return data;
};
