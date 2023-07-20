import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { useUpdateMutation } from "../../../../services/employee";

export default function Update() {
  const { currentUser } = useSelector((state) => state.Employee);
  const address = currentUser.address;

  const [Department, setDepartment] = useState(currentUser.deptId);
  const [updateUser] = useUpdateMutation();

  // Get Current Address Form Store
  const {
    empId: emp,
    id: eid,
    createdAt: ceat,
    updatedAt: upat,
    ...current
  } = address?.find((address) => address.type === "current");
  const [currentAddress, setCurrentAddress] = useState(current);
  console.log(currentAddress);

  // GET Permenant Address From Store
  const { empId, id, createdAt, updatedAt, ...permanent } = address?.find(
    (address) => address?.type === "permenant"
  );
  const [permanentAddress, setPermanentAddress] = useState(permanent);

  const handleAddressChange = (event, type) => {
    console.log(type);
    if (type === "current")
      setCurrentAddress((prev) => {
        return { ...prev, [event.target.name]: event.target.value };
      });
    else {
      setPermanentAddress((prev) => {
        return { ...prev, [event.target.name]: event.target.value };
      });
    }
  };

  const handleSubmit = () => {
    formdata.dob = new Date(formdata.dob).toISOString();
    formdata.doj = new Date(formdata.doj).toISOString();
    var current = currentAddress;
    var permenant = permanentAddress;
    var obj = {
      ...formdata,
      current,
      permenant,
    };
    updateUser(obj);
  };

  const handleChange = (event) => {
    setFormdata((formdata) => {
      return { ...formdata, [event.target.name]: event.target.value };
    });
  };
  const [formdata, setFormdata] = useState({
    firstName: currentUser?.firstName,
    lastName: currentUser?.lastName,
    email: currentUser?.email,
    dob: currentUser?.dob
      ? new Date(currentUser?.dob).toISOString().split("T")[0]
      : "",
    doj: new Date(currentUser?.doj).toISOString().split("T")[0],
    deptId: currentUser?.department.id,
    workStatus: currentUser?.workStatus,
  });
  console.log(formdata);

  useEffect(() => {
    setFormdata(formdata);
    if (current) {
      setCurrentAddress(current);
      setPermanentAddress(permanent);
    }
  }, []);
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div className="profile">
        <h1>Update Profile</h1>
        <div className="grid-container">
          <TextField
            required
            id="outlined-required"
            label="First Name"
            name="firstName"
            InputLabelProps={{
              shrink: true,
            }}
            value={formdata?.firstName}
            onChange={(e) => handleChange(e)}
          />
          <TextField
            required
            id="outlined-required"
            label="Last Name"
            InputLabelProps={{
              shrink: true,
            }}
            name="lastName"
            onChange={(e) => handleChange(e)}
            value={formdata?.lastName}
          />
          <TextField
            required
            id="outlined-required"
            InputLabelProps={{
              shrink: true,
            }}
            name="email"
            onChange={(e) => handleChange(e)}
            label="Email"
            value={formdata?.email}
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              name="dob"
              label="Date of birth"
              InputLabelProps={{
                shrink: true,
              }}
              value={dayjs(formdata?.dob)}
              onChange={(e) => {
                const selectedDate = e["$d"];
                const timezoneOffset = selectedDate.getTimezoneOffset() * 60000; // Convert minutes to milliseconds
                const adjustedDate = new Date(selectedDate - timezoneOffset);
                const adjustedDateString = adjustedDate
                  .toISOString()
                  .split("T")[0];
                console.log(adjustedDateString);
                setFormdata((formdata) => {
                  return { ...formdata, dob: adjustedDateString };
                });
              }}
            />
            <DatePicker
              name="doj"
              label="Date of Joining"
              InputLabelProps={{
                shrink: true,
              }}
              value={dayjs(formdata?.doj)}
              onChange={(e) => {
                const selectedDate = e["$d"];
                const timezoneOffset = selectedDate.getTimezoneOffset() * 60000; // Convert minutes to milliseconds
                const adjustedDate = new Date(selectedDate - timezoneOffset);
                const adjustedDateString = adjustedDate
                  .toISOString()
                  .split("T")[0];
                console.log(adjustedDateString);
                setFormdata((formdata) => {
                  return { ...formdata, dob: adjustedDateString };
                });
              }}
            />
          </LocalizationProvider>
          <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-filled-label">
              Department
            </InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              name="deptId"
              value={formdata?.deptId}
              onChange={(e) => handleChange(e)}
            >
              <MenuItem value={0}>
                <em>None</em>
              </MenuItem>
              <MenuItem value={1}>HR</MenuItem>
              <MenuItem value={2}>Account</MenuItem>
              <MenuItem value={3}>IT</MenuItem>
              <MenuItem value={4}>Maintenance</MenuItem>
              <MenuItem value={5}>Sales</MenuItem>
              <MenuItem value={6}>R&D</MenuItem>
              <MenuItem value={7}>None</MenuItem>
            </Select>
          </FormControl>
          <TextField
            required
            name="workStatus"
            id="outlined-required"
            label="Work Status"
            InputLabelProps={{
              shrink: true,
            }}
            value={formdata?.workStatus?.workState}
          />
          <TextField
            required
            name="street"
            id="outlined-required"
            InputLabelProps={{
              shrink: true,
            }}
            label="Current Street"
            value={currentAddress?.street}
            onChange={(e) => handleAddressChange(e, "current")}
          />
          <TextField
            required
            name="city"
            id="outlined-required"
            label="Current City"
            InputLabelProps={{
              shrink: true,
            }}
            value={currentAddress.city}
            onChange={(e) => handleAddressChange(e, "current")}
          />
          <TextField
            required
            name="pincode"
            id="outlined-required"
            label="Current Pincode"
            InputLabelProps={{
              shrink: true,
            }}
            value={currentAddress.pincode}
            onChange={(e) => handleAddressChange(e, "current")}
          />
          <TextField
            required
            name="state"
            id="outlined-required"
            label="Current State"
            InputLabelProps={{
              shrink: true,
            }}
            value={currentAddress.state}
            onChange={(e) => handleAddressChange(e, "current")}
          />
          <TextField
            required
            id="outlined-required"
            name="street"
            label="Permenant Street"
            InputLabelProps={{
              shrink: true,
            }}
            value={permanentAddress.street}
            onChange={(e) => handleAddressChange(e, "permenant")}
          />
          <TextField
            required
            InputLabelProps={{
              shrink: true,
            }}
            name="city"
            id="outlined-required"
            label="Permenant City"
            value={permanentAddress.city}
            onChange={(e) => handleAddressChange(e, "permenant")}
          />
          <TextField
            required
            id="outlined-required"
            InputLabelProps={{
              shrink: true,
            }}
            name="pincode"
            label="Permenant Pincode"
            value={permanentAddress.pincode}
            onChange={(e) => handleAddressChange(e, "permenant")}
          />
          <TextField
            required
            id="outlined-required"
            name="state"
            label="Permanent State"
            InputLabelProps={{
              shrink: true,
            }}
            value={permanentAddress.state}
            onChange={(e) => handleAddressChange(e, "permenant")}
          />
          <Button variant="contained" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </div>
    </Box>
  );
}
