import React, { useEffect, useState } from "react";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { useSelector } from "react-redux";

const MyForm = ({ formData, setFormData }) => {
  // const { selectedUser } = useSelector((state) => state.Employee);
  // const obj = {
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   dob: null,
  //   doj: null,
  //   phone: "",
  //   gender: "",
  // };

  // const [formData, setFormData] = useState(obj);
  // useEffect(() => {
  //     setFormData(selectedUser);
  // }, []);

  // console.log(obj);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleDateChange = (name, date) => {
    setFormData((prevData) => ({ ...prevData, [name]: date }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    // Add your logic here to handle the form submission
  };

  return (
    <form onSubmit={handleSubmit} style={{ height: "65vh" }}>
      <div style={{ gap: 10 }} className="formstyle">
        <TextField
          label="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          required
        />
        <TextField
          label="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          required
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            name="dob"
            label="Date of birth"
            InputLabelProps={{
              shrink: true,
            }}
            value={dayjs(formData?.dob)}
            onChange={(e) => {
              const selectedDate = e["$d"];
              const timezoneOffset = selectedDate.getTimezoneOffset() * 60000; // Convert minutes to milliseconds
              const adjustedDate = new Date(selectedDate - timezoneOffset);
              const adjustedDateString = adjustedDate
                .toISOString()
                .split("T")[0];
              console.log(adjustedDateString);
            }}
          />
          <DatePicker
            name="doj"
            label="Date of Joining"
            InputLabelProps={{
              shrink: true,
            }}
            value={dayjs(formData?.doj)}
            onChange={(e) => {
              const selectedDate = e["$d"];
              const timezoneOffset = selectedDate.getTimezoneOffset() * 60000; // Convert minutes to milliseconds
              const adjustedDate = new Date(selectedDate - timezoneOffset);
              const adjustedDateString = adjustedDate
                .toISOString()
                .split("T")[0];
              console.log(adjustedDateString);
            }}
          />
        </LocalizationProvider>
        <TextField
          label="Phone"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          required
        />
        <FormControl>
          <InputLabel>Gender</InputLabel>
          <Select
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
            required
          >
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
          </Select>
        </FormControl>
      </div>
    </form>
  );
};

export default MyForm;
