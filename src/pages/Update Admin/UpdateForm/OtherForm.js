import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const OtherForm = ({ formData, setFormData }) => {
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                height: "67.5vh",
            }}
        >
            {/* For Changing Department And Role*/}
            <h2>Other Details</h2>

            <FormControl variant="filled" sx={{ m: 1, width: 200 }}>
                <InputLabel>Change Department</InputLabel>
                <Select
                    name="deptId"
                    value={formData.deptId}
                    onChange={(e) => handleInputChange(e)}
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
                <InputLabel>Change Role</InputLabel>
                <Select
                    name=" roleId"
                    value={formData.roleId}
                    onChange={(e) => handleInputChange(e)}
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
