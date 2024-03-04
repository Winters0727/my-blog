import { https } from "./https";

import type { FetchResponse, VisitData } from "@/app/types/index.type";

export const getVisitCount = async () => {
  const data = (await https.get<FetchResponse<VisitData>>(`/blog/visit`)).data;
  return data;
};
