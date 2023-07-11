import axios from "axios";

export default async function getEmployees(setAllEmployees) {
  const data = await axios.get("/api/emp");
  setAllEmployees((stats) => {
    return { ...stats, Employees: data.data };
  });
  return data;
}
