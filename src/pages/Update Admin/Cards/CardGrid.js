import React from "react";
import Grid from "@mui/material/Grid";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Paper from "@mui/material/Paper";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import HomeIcon from "@mui/icons-material/Home";
import UpdateIcon from "@mui/icons-material/Update";
// CardGrid Maps The Data With Cards Component

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  width: "270px",
  marginTop: "20px",
  color: theme.palette.text.secondary,
  height: 70,
  lineHeight: "60px",
}));
const employeeDetails = [
  { title: "Personal Details", icon: <ManageAccountsIcon /> },
  { title: "Address Details", icon: <HomeIcon /> },
  { title: "Other Details", icon: <UpdateIcon /> },
  // "Address Details",
  // "Other Details",
];
 
const lightTheme = createTheme({ palette: { mode: "light" } });

const CardGrid = ({ setFormtype }) => {
  return (
    <div>
      <Grid container spacing={3}>
        {[lightTheme].map((theme, index) => (
          <Grid item xs={3} key={index}>
            <ThemeProvider theme={theme}>
              {employeeDetails.map((employeeDetail, index) => (
                // const icons = icon[index]

                <Item
                  sx={{
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                  }}
                  elevation={3}
                  onClick={() => {
                    setFormtype(employeeDetail.title);
                  }}
                >
                  {employeeDetail.icon}
                  <h3
                  // style={{
                  //   display: "flex",
                  //   alignItems: "center",
                  //   justifyContent: "space-around",
                  // }}
                  >
                    {`${employeeDetail.title}`}
                  </h3>
                  <ArrowForwardIosIcon />
                </Item>
              ))}
            </ThemeProvider>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default CardGrid;
