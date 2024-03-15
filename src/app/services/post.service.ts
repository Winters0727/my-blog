import { https } from "./https";

import type { FetchResponse } from "@/app/types/index.type";
import type { PostData, GameData } from "@/app/types/post.type";

export const getGameData = async (gameId: number) => {
  const data = (
    await https.get<FetchResponse<GameData>>(`/blog/game/${gameId}`)
  ).data;

  return data;
};

export const getPostData = async (slug: string) => {
  const data = (await https.get<FetchResponse<PostData>>(`/blog/post/${slug}`))
    .data;

  return data;
};

export const updatePostLikes = async (slug: string) => {
  const data = (
    await https.put<FetchResponse<Pick<PostData, "likes" | "isLike">>>(
      `/blog/post/${slug}/likes`
    )
  ).data;

  return data;
};
