import { https } from "./https";

export const getVisitCount = async () => await https.get(`/blog/visit`);
