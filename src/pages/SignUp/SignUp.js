import * as React from "react";
import SignUpFields from "./../../shared/SignUp";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { useGetregisterMutation } from "../../services/employee";
import { Stack } from "@mui/material";

const defaultTheme = createTheme();

export default function SignUp() {
    const [registernew] = useGetregisterMutation();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (formData.password === formData.confirmPassword) {
                const { confirmPassword, ...data } = formData;
                const response = await registernew(data);
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    password: "",
                    confirmPassword: "",
                });
                navigate("/");
            } else {
                alert("Password and Confirm Password does not match!");
            }
        } catch (error) {
            console.log(error);
        }
    };
    const handleChange = (event) => {
        setFormData((formData) => {
            return { ...formData, [event.target.name]: event.target.value };
        });
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    {/* To Map Input Fields of SignUp Form */}
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        sx={{ mt: 3 }}
                    >
                        <Stack spacing={1} sx={{ width: "350px" }}>
                            {SignUpFields.map((obj) => {
                                return (
                                    <TextField
                                        required
                                        key={obj.name}
                                        autoFocus
                                        fullWidth
                                        autoComplete={obj.autoComplete}
                                        name={obj.name}
                                        id={obj.id}
                                        label={obj.label}
                                        value={formData[obj.value]}
                                        onChange={(e) => handleChange(e)}
                                    />
                                );
                            })}
                        </Stack>

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>

                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="/" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}
