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
import getEmployees from "../../endpoints/getEmployees";
import { Button } from "@mui/material";

// const rows = [
//   createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
//   createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
//   createData("Eclair", 262, 16.0, 24, 6.0),
//   createData("Cupcake", 305, 3.7, 67, 4.3),
//   createData("Gingerbread", 356, 16.0, 49, 3.9),
// ];

export default function BasicTable() {
  const [allEmployees, setAllEmployees] = useState({});
  useEffect(() => {
    getEmployees(setAllEmployees);
  }, []);

  //     const rows = [   {
  //         "id": 1,
  //         "firstName": "Satyam",
  //         "lastName": "kandoi",
  //         "email": "satyam@gmail.com",
  //         "password": "satyam",
  //         "dob": "2023-07-05T00:00:00.000Z",
  //         "doj": "2023-07-05T00:00:00.000Z",
  //         "gender": "Male",
  //         "phone": 12,
  //         "deptId": 3,
  //         "wstId": 1,
  //         "roleId": 2,
  //         "createdAt": "2023-07-05T00:00:00.000Z",
  //         "updatedAt": "2023-07-07T07:30:51.000Z",
  //         "workStatus": {
  //             "id": 1,
  //             "workState": "WFO",
  //             "createdAt": "2023-07-05T08:40:16.000Z",
  //             "updatedAt": "2023-07-05T08:40:16.000Z"
  //         },
  //         "department": {
  //             "id": 3,
  //             "departmentName": "IT",
  //             "createdAt": "2023-07-05T08:40:16.000Z",
  //             "updatedAt": "2023-07-05T08:40:16.000Z"
  //         },

  //     },
  //    ]

  const rows = allEmployees?.Employees?.data;

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
                <Button  key={row.id}>Edit</Button>
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
