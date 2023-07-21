import React, { useState } from "react";
import { TextField } from "@mui/material";

const AddressForm = ({ current, setCurrent, permenant, setPermenant }) => {
    // To handle Current and Permenant Address Change
    const address = ["street", "city", "state", "pincode"];
    const handleAddressChange = (event, type) => {
        if (type === "current")
            setCurrent((current) => {
                return {
                    ...current,
                    [event.target.name]: event.target.value,
                };
            });
        else {
            setPermenant((permenant) => {
                return {
                    ...permenant,
                    [event.target.name]: event.target.value,
                };
            });
        }
    };

    return (
        <div style={{ height: "65vh" }}>
            {/* For Mapping Current Address*/}
            <h2>Current Address</h2>
            <div
                style={{
                    display: "grid",
                    rowGap: 10,
                    gridTemplateColumns: "1fr 1fr",
                }}
            >
                {address.map((add) => {
                    return (
                        <TextField
                            label={add}
                            name={add}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            value={current[add]}
                            required
                            onChange={(e) => handleAddressChange(e, "current")}
                        />
                    );
                })}
            </div>

            {/* For Mapping Current Address*/}
            <h2>Permanent Address</h2>
            <div
                style={{
                    display: "grid",
                    rowGap: 10,
                    gridTemplateColumns: "1fr 1fr",
                }}
            >
                {address.map((add) => {
                    return (
                        <TextField
                            label={add}
                            name={add}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            value={permenant[add]}
                            required
                            onChange={(e) =>
                                handleAddressChange(e, "permenant")
                            }
                        />
                    );
                })}
            </div>
        </div>
    );
};
export default AddressForm;
