import axios from "axios";

export default async function login(payload){
    const response = await axios.post("/api/login",payload)
    return response
}