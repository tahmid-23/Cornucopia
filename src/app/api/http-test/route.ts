import { HttpTestAPIResponse } from "./http-test-api-response";

export async function POST(request: Request) {
  const details = await request.json();

  const options: RequestInit = {
    method: details.method,
  };

  const headers = details.headers;
  if (details.body !== "") {
    options.body = details.body;
    headers["Content-Type"] = details.contentType;
  }

  options.headers = headers;

  const response = await fetch(details.url, options);

  const parsedHeaders: Record<string, string> = {};
  response.headers.forEach((headeValue, headerName) => {
    parsedHeaders[headerName] = headeValue;
  });

  if (response.status === 200) {
    const text = await response.text();
    const result: HttpTestAPIResponse = {
      status: response.status,
      headers: parsedHeaders,
      body: text,
    };

    return Response.json(result);
  }

  const result: HttpTestAPIResponse = {
    status: response.status,
    headers: parsedHeaders,
  };
  return Response.json(result);
}
