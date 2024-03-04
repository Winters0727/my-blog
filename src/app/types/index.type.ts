export interface FetchResponse<T> {
  result: "success" | "fail";
  data?: T;
  error?: any;
}

export interface VisitData {
  today: number;
  total: number;
}
