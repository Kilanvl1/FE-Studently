type ApiMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

async function apiClient<TResponse, TRequest = undefined>(
  url: string,
  method: ApiMethod,
  data?: TRequest
): Promise<TResponse> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}${url}`,
    {
      method,
      headers: {
        "Content-Type": "application/json",
        // Add any other headers you need, like authorization
      },
      body: data ? JSON.stringify(data) : undefined,
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}

export default apiClient;
