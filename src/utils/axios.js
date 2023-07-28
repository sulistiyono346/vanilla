import axios from "axios";

export function client() {
  const instance = axios.create();
  instance.defaults.baseURL = process.env.REACT_APP_BASEURL;
  instance.defaults.headers.common["Authorization"] =
    process.env.REACT_APP_API_KEY;
  instance.defaults.headers.common["X-GitHub-Api-Version"] = "2022-11-28";
  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return instance;
}
