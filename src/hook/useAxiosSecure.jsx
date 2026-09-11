import axios from "axios";
import { useEffect } from "react";

const axiosInstance = axios.create({
  baseURL: "http://localhost:4001",
  withCredentials: true,
});

const useAxiosSecure = () => {
  useEffect(() => {
    const responseInterceptor = axiosInstance.interceptors.response.use(
      (response) => {
        return response;
      },

      async (error) => {
        const originalRequest = error.config;

        // Access token expired
        if (
          error.response?.status === 401 &&
          !originalRequest._retry
        ) {
          originalRequest._retry = true;

          try {
            // Refresh token cookie automatically যাবে
            await axios.post(
              "http://localhost:4001/signin/refresh",
              {},
              {
                withCredentials: true,
              }
            );

            // নতুন accessToken cookie set হয়ে গেছে
            // এখন আগের request আবার পাঠাবে
            return axiosInstance(originalRequest);
          } catch (refreshError) {
            console.log("Refresh token expired");

            // চাইলে এখানে logout করতে পারো
            return Promise.reject(refreshError);
          }
        }

        return Promise.reject(error);
      }
    );

    // Component unmount হলে interceptor remove
    return () => {
      axiosInstance.interceptors.response.eject(responseInterceptor);
    };
  }, []);

  return axiosInstance;
};

export default useAxiosSecure;