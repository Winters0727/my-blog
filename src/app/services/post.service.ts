import { https } from "./https";

import type { FetchResponse } from "@/app/types/index.type";
import type { GameData } from "@/app/types/post.type";

export const getGameData = async (gameId: number) => {
  const data = (
    await https.get<FetchResponse<GameData>>(`/blog/game/${gameId}`)
  ).data;

  return data;
};
