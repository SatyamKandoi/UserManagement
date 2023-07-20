import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";
import { useEffect } from "react";
import { useState } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  getAllRTKEmployees,
  useGetAllRTKEmployeesQuery,
} from "../../services/employee";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedUser } from "../../redux/employeeSlice";

export default function BasicTable() {
  const [pg, setpg] = React.useState(0);
  const [rpg, setrpg] = React.useState(5);

  function handleChangePage(event, newpage) {
    setpg(newpage);
  }

  function handleChangeRowsPerPage(event) {
    setrpg(parseInt(event.target.value, 10));
    setpg(0);
  }

  const navigate = useNavigate();
  const [rows, setRows] = useState([]);
  // const handleclick = () => {
  //   navigate("/dashboard/updateemp");
  // };
  const responseInfo = useGetAllRTKEmployeesQuery();
  const data = responseInfo?.currentData?.data;
  console.log(data);
  const { currentUser } = useSelector((state) => state.Employee);
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      setRows(data);
    }
  }, [data]);
  // const [selectedUser, setselectedUser] = useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   dob: currentUser?.dob
  //     ? new Date(currentUser?.dob).toISOString().split("T")[0]
  //     : "",
  //   doj: new Date(currentUser?.doj).toISOString().split("T")[0],
  //   department: "",
  //   workStatus: "",
  // });

  // console.log(selectedUser);

  return (
    <TableContainer
      component={Paper}
      sx={{ marginTop: 10, marginLeft: 5, width: 1200 }}
    >
      <Table
        sx={{ minWidth: 500 }}
        // exportButton={true}
        aria-label="simple table"
      >
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
            {currentUser.roleId === 2 && (
              <>
                <TableCell align="right">Edit</TableCell>
                <TableCell align="right">Delete</TableCell>
              </>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.slice(pg * rpg, pg * rpg + rpg)?.map((row) => (
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
              <TableCell align="right">
                {new Date(currentUser?.dob).toISOString().split("T")[0]}
              </TableCell>
              <TableCell align="right">
                {row?.department?.departmentName}
              </TableCell>
              <TableCell align="right">{row?.workStatus?.workState}</TableCell>

              <TableCell align="right">{row?.roleId}</TableCell>

              {currentUser.roleId === 2 && (
                <>
                  <TableCell align="right">
                    <Button
                      key={row.id}
                      onClick={() => {
                        // setselectedUser(row);
                        dispatch(setSelectedUser(row));
                        navigate("/dashboard/updateemp");
                      }}
                    >
                      Edit
                    </Button>
                  </TableCell>
                  <TableCell align="right">
                    <Button key={row.id}>Delete</Button>
                  </TableCell>
                </>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rpg}
        page={pg}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />

    </TableContainer>
  );
}
