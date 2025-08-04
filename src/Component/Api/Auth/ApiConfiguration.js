const SecureFetch = async (url, method = "GET", headers = {}, body = null) => {
  try {
    const response = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      body: body ? JSON.stringify(body) : undefined,
    });

    const contentType = response.headers.get("Content-Type");
    const isJson = contentType && contentType.includes("application/json");
    const data = isJson ? await response.json() : await response.text();

    return {
      status: response.status,
      ok: response.ok,
      data,
    };
  } catch (error) {
    console.error("SecureFetch error:", error);
    throw error;
  }
};

export default SecureFetch;
