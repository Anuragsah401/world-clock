import axios from "axios";

const instance = axios.create({
  baseURL: "http://worldtimeapi.org/api/",
});

instance.interceptors.request.use(
  (request) => {
    // console.log(request);
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    // console.log(response);
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
