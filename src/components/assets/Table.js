import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect } from "react";
import { useState } from "react";
import { Button } from "@mui/material";
import {
  getAllRTKEmployees,
  useGetAllRTKEmployeesQuery,
} from "../../services/employee";

export default function BasicTable() {
  const [rows, setRows] = useState([]);
  const responseInfo = useGetAllRTKEmployeesQuery();
  console.log(responseInfo);
  const data = responseInfo?.currentData?.data;
  console.log(data);
  useEffect(() => {
    if (data) {
      setRows(data);
    }
  }, [data]);

  return (
    <TableContainer
      component={Paper}
      sx={{ marginTop: 20, marginLeft: 5, width: 1500 }}
    >
      <Table sx={{ minWidth: 500 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">FirstName</TableCell>
            <TableCell align="right">LastName</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Gender</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">Date of birth</TableCell>
            <TableCell align="right">Department</TableCell>
            <TableCell align="right">wstId</TableCell>
            <TableCell align="right">RoleId</TableCell>
            <TableCell align="right">Edit</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows?.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.firstName}</TableCell>
              <TableCell align="right">{row.lastName}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.gender}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              <TableCell align="right">{row.dob}</TableCell>
              <TableCell align="right">{row.dob}</TableCell>
              <TableCell align="right">{row.wstId}</TableCell>
              <TableCell align="right">{row.roleId}</TableCell>
              <TableCell align="right">
                <Button key={row.id}>Edit</Button>
              </TableCell>
              <TableCell align="right">
                <Button key={row.id}>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
