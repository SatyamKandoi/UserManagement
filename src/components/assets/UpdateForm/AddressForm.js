import React, { useState } from "react";
import { TextField } from "@mui/material";

const AddressForm = ({ formData, setFormData }) => {
  const address = formData?.address;
  const { ...current } =
    address?.find((address) => address.type === "current") || "";
  const [currentAddress, setCurrentAddress] = useState(current);
  const { id, createdAt, updatedAt, ...permanent } =
    address?.find((address) => address?.type === "permenant") || "";
  const [permanentAddress, setPermanentAddress] = useState(permanent);

  const handleAddressChange = (event,type) => {
    console.log(permanentAddress);
    console.log(event.target.name)
    if (type === "current")
      setCurrentAddress((currentAdd) => {
        return { ...currentAdd, [event.target.name]: event.target.value };
      });
    else {
      setPermanentAddress((permenantAdd) => {
        return { ...permenantAdd, [event.target.name]: event.target.value };
      });
    }
  };

  return (
    <div style={{ height: "65vh" }}>
      <h2>Current Address</h2>
      <div
        style={{ display: "grid", rowGap: 10, gridTemplateColumns: "1fr 1fr" }}
      >
        <TextField
          label="Street"
          name="street"
          InputLabelProps={{
            shrink: true,
          }}
          value={currentAddress?.street}
          required
        />
        <TextField
          label="City"
          name="city"
          InputLabelProps={{
            shrink: true,
          }}
          value={currentAddress?.city}
          required
        />
        <TextField
          label="State"
          name="state"
          InputLabelProps={{
            shrink: true,
          }}
          value={currentAddress?.state}
          required
        />
        <TextField
          label="Pincode"
          name="pincode"
          InputLabelProps={{
            shrink: true,
          }}
          value={currentAddress?.pincode}
          required
        />
      </div>
      <h2>Permanent Address</h2>
      <div
        style={{ display: "grid", rowGap: 10, gridTemplateColumns: "1fr 1fr" }}
      >
        <TextField
          label="Street"
          name="street"
          InputLabelProps={{
            shrink: true,
          }}
          value={permanentAddress?.street}
          onChange={(e) =>
            handleAddressChange(e,"permanentAddress")
          }
          required
        />
        <TextField
          label="City"
          name="city"
          value={permanentAddress?.city}
          // onChange={(e) =>
          //   handleAddressChange("permanentAddress", "city", e.target.value)
          // }
          InputLabelProps={{
            shrink: true,
          }}
          required
        />
        <TextField
          label="State"
          name="state"
          value={permanentAddress?.state}
          // onChange={(e) =>
          //   handleAddressChange("permanentAddress", "state", e.target.value)
          // }
          InputLabelProps={{
            shrink: true,
          }}
          required
        />
        <TextField
          label="Pincode"
          name="pincode"
          value={permanentAddress?.pincode}
          // onChange={(e) =>
          //   handleAddressChange("permanentAddress", "pincode", e.target.value)
          // }
          InputLabelProps={{
            shrink: true,
          }}
          required
        />
      </div>
    </div>
  );
};

export default AddressForm;
