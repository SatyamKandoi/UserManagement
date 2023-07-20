import * as React from "react";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import Card from "@mui/material/Card";
import Paper from "@mui/material/Paper";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import Cards from "./Cards/Card";
import FormCard from "./UpdateForm/FormCard";
import { useSelector } from "react-redux";


//Contains All the Components of Admin Update Any Employee
// CardGrid
// Cards 
// formCard

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  marginTop: "35px",
  marginLeft: "20px",
  width: "300px",
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: "60px",
}));

const Employee = ["Employee Name"];
const lightTheme = createTheme({ palette: { mode: "light" } });
export default function FrameCard() {
  const [formtype, setFormtype] = useState("Personal Details");
  const { selectedUser } = useSelector((state) => state.Employee);

  return (
    <div className="three">
      <Grid container spacing={3}>
        {[lightTheme].map((theme, index) => (
          <Grid item xs={3} key={index}>
            <ThemeProvider theme={theme}>
              {Employee.map((employee) => (
                <Item elevation={8}>
                  
                  <h3>{`${selectedUser.firstName} ${selectedUser.lastName}`}</h3>
                </Item>
              ))}
            </ThemeProvider>
          </Grid>
        ))}
      </Grid>
      <Card sx={{display:"flex",flexDirection:"row"}}>
      <Cards setFormtype={setFormtype}  />
      <FormCard formtype={formtype} />
      </Card>
    </div>
  );
}
