export interface HttpTestAPIResponse {
  status: number;
  headers: Record<string, string>;
  body?: string;
}
