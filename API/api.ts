const api = {
  get: async function (url: string): Promise<any> {
    console.log("get", url);

    return new Promise((resolve, reject) => {
      fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}${url}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        cache: "no-store",
      })
        .then((response) => response.json())
        .then((json) => {
          console.log("Response:", json);

          resolve(json);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  post: async function (url: string, data: any): Promise<any> {
    console.log("post", url, data);

    return new Promise((resolve, reject) => {
      fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}${url}`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          console.log("Response:", json);

          resolve(json);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  patch: async function (url: string, data: any): Promise<any> {
    console.log("patch", url, data);

    return new Promise((resolve, reject) => {
      fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}${url}`, {
        method: "PATCH",
        body: JSON.stringify(data),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          console.log("Response:", json);

          resolve(json);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};

export default api;
