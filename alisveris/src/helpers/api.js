import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://192.168.202.128:1337/api/",
  headers: {
    Authorization: `Bearer 14a8bdb716b1c0d809664ad2da23271700f172442213be8050eb41ce4bf223254643d50d2094779b20bdb584a90fdddfcf3773611349e742d9024d9f611638150de4e28db4081390cb6ba7b6bd8696ba920206fdc16c34700090e125aad6e84899739309d58facf287c36097f76c1cdcacfe842b7d8008e46632c5fe67331be7`,
  },
});

export default axiosInstance;
