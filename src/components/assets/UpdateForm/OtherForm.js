import React, { useState } from "react";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
const OtherForm = ({ formData, setFormData }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "67.5vh" }}>
      <h2>Other Details</h2>

      <FormControl variant="filled" sx={{ m: 1, width: 200 }}>
        <InputLabel id="demo-simple-select-filled-label">
          Change Department
        </InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          name="department"
            value={formData.deptId}
            // onChange={(e) => handleChange(e)}
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
      <FormControl variant="filled" sx={{ m: 1, width: 200 }}>
        <InputLabel id="demo-simple-select-filled-label">
          Change Role
        </InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          name="department"
            value={formData.roleId}
          //   onChange={(e) => handleChange(e)}
        >
          <MenuItem value={0}>
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>Employee</MenuItem>
          <MenuItem value={2}>Admin</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default OtherForm;
