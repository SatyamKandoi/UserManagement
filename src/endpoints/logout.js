import axios from "axios";

export default async function logout() {
  const response = await axios.post("/api/logout");
  return response;
}
