import React from "react";
import {
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
} from "@mui/material";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

const PersonalDetails = ({ formData, setFormData }) => {
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };
    const handleDateChange = (name, event) => {
        const selectedDate = event["$d"];
        const timezoneOffset = selectedDate.getTimezoneOffset() * 60000; // Convert minutes to milliseconds
        const adjustedDate = new Date(selectedDate - timezoneOffset);
        const adjustedDateString = adjustedDate.toISOString().split("T")[0];
        console.log(adjustedDateString);
        setFormData((prevData) => ({
            ...prevData,
            [name]: adjustedDateString,
        }));
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        // Add your logic here to handle the form submission
    };

    const personalData = ["firstName", "lastName", "email", "phone"];

    return (
        <form onSubmit={handleSubmit} style={{ height: "65vh" }}>
            <div style={{ gap: 10 }} className="formstyle">
                {/* For mapping personal Data*/}
                {personalData.map((data) => {
                    return (
                        <TextField
                            label={data}
                            name={data}
                            value={formData[data]}
                            onChange={handleInputChange}
                            required
                        />
                    );
                })}

                {/* For Date of Birth and Date Of joining*/}
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        name="dob"
                        label="Date of birth"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={dayjs(formData?.dob)}
                        onChange={(e) => {
                            handleDateChange("dob", e);
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
                            handleDateChange("doj", e);
                        }}
                    />
                </LocalizationProvider>

                {/* For Gender Change*/}
                <FormControl>
                    <InputLabel>Gender</InputLabel>
                    <Select
                        name="gender"
                        label="gender"
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

export default PersonalDetails;
