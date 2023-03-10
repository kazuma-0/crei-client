import axios from "axios";

const client = axios.create({
  baseURL:
    process.env.NODE_ENV === "development" ? "http://localhost:3001/api/" : "",
});
export default client;
