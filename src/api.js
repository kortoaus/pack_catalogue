import axios from "axios";

export let baseUrl;

if (true) {
  baseUrl = "https://ktdportal.com";
} else {
  baseUrl = "http://127.0.0.1:8000";
}

// export const baseUrl = "http://192.168.1.144:8000";
export const bucketURL = () => {
  if (baseUrl === "https://ktdportal.com") {
    return "";
  } else {
    return baseUrl;
  }
};

const callApi = async (method, path, data, jwt) => {
  let headers = {};
  if (jwt) {
    headers = {
      Authorization: `Bearer ${jwt}`,
    };
  } else {
    headers = {
      // Authorization: `Bearer ${jwt}`,
      "Content-Type": "application/json",
    };
  }
  const apiUrl = "/api/v1";
  const fullUrl = `${baseUrl}${apiUrl}${path}`;

  if (method === "get" || method === "delete") {
    return axios[method](fullUrl, { headers });
  } else {
    return axios[method](fullUrl, data, { headers });
  }
};

const api = {
  Packs: {
    getPacks: () => callApi("post", "/packmeat/all/"),
  },
};

export default api;
