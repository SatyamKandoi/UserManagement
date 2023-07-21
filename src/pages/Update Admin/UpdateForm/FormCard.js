import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import PersonalDetails from "./PersonalForm";
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
        current: {
            street: "",
            city: "",
            state: "",
            pincode: "",
        },
    };
    const [formData, setFormData] = useState(obj);

    const [current, setCurrent] = useState({});
    const [permenant, setPermenant] = useState({});

    const alldata = { ...formData, current, permenant };

    useEffect(() => {
        setFormData({ ...selectedUser });
        const addresses = [...selectedUser?.address];
        console.log(addresses);
        setCurrent(addresses.find((add) => add.type === "current") || {});
        setPermenant(addresses.find((add) => add.type === "permenant"));
    }, [selectedUser]);

    const handleSubmit = () => {
        console.log(alldata);
    };

    return (
        <Card sx={{ width: 500, height: 600 }}>
            <CardContent>
                <div>
                    {(formtype === "Personal Details" && (
                        <PersonalDetails
                            formData={formData}
                            setFormData={setFormData}
                        />
                    )) ||
                        (formtype === "Address Details" && (
                            <AddressForm
                                current={current}
                                setCurrent={setCurrent}
                                permenant={permenant}
                                setPermenant={setPermenant}
                            />
                        )) ||
                        (formtype === "Other Details" && (
                            <OtherForm
                                formData={formData}
                                setFormData={setFormData}
                            />
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
                    <Button
                        onClick={handleSubmit}
                        type="submit"
                        variant="contained"
                        color="primary"
                    >
                        Submit
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}
