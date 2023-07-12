import axios from "axios";
import { useDispatch } from "react-redux";

export default async function login(payload) {
  const response = await axios.post("/api/login", payload);
  console.log(response);
  return response;
}
