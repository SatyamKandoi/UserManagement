import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import MyForm from "./PersonalForm";
import AddressForm from "./AddressForm";
import OtherForm from "./OtherForm";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function FormCard({ formtype }) {
  const navigate = useNavigate();
  const { selectedUser } = useSelector((state) => state.Employee);
  const obj = {
    firstName: "",
    lastName: "",
    email: "",
    dob: null,
    doj: null,
    phone: "",
    gender: "",
  };

  const [formData, setFormData] = useState(obj);
  
  useEffect(() => {
    setFormData(selectedUser);
  }, [selectedUser]);
  return (
    <Card sx={{ width: 500, height: 600 }}>
      <CardContent>
        <div>
          {(formtype === "Personal Details" && (
            <MyForm formData={formData} setFormData={setFormData} />
          )) ||
            (formtype === "Address Details" && (
              <AddressForm formData={formData} setFormData={setFormData} />
            )) ||
            (formtype === "Other Details" && (
              <OtherForm formData={formData} setFormData={setFormData} />
            ))}
        </div>
        <div
          style={{
            justifyContent: "space-between",
            display: "flex",
          }}
        >
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={() => navigate("/dashboard/employees")}
          >
            Cancel
          </Button>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
