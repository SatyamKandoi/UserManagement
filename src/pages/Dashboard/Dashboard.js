import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import ListItem from "@mui/material/ListItem";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import BadgeIcon from "@mui/icons-material/Badge";
import { Outlet, useNavigate } from "react-router-dom";
import Person2Icon from "@mui/icons-material/Person2";
import { useDispatch } from "react-redux";
import { setCurrentUser, setLogout } from "../../redux/employeeSlice";
import { getAllRTKEmployees } from "../../services/employee";
import { useLogoutMutation } from "../../services/employee";
import SecurityIcon from "@mui/icons-material/Security";
import FormatPaintIcon from "@mui/icons-material/FormatPaint";
const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    "& .MuiDrawer-paper": {
        position: "relative",
        whiteSpace: "nowrap",
        width: drawerWidth,
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        boxSizing: "border-box",
        ...(!open && {
            overflowX: "hidden",
            transition: theme.transitions.create("width", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            width: theme.spacing(7),
            [theme.breakpoints.up("sm")]: {
                width: theme.spacing(9),
            },
        }),
    },
}));

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Dashboard() {
    const navigate = useNavigate();
    const [logoutnew] = useLogoutMutation();
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    const Logout = async () => {
        try {
            const result = await logoutnew();
            dispatch(setLogout());
            dispatch(getAllRTKEmployees.util.resetApiState());
            navigate("/signin");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Box sx={{ display: "flex" }}>
                <CssBaseline />

                {/*App Bar For Top Header */}
                <AppBar position="absolute" open={open}>
                    <Toolbar
                        sx={{
                            pr: "24px", // keep right padding when drawer closed
                        }}
                    >
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={toggleDrawer}
                            sx={{
                                marginRight: "36px",
                                ...(open && { display: "none" }),
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            component="h1"
                            variant="h6"
                            color="inherit"
                            noWrap
                            sx={{ flexGrow: 1 }}
                        ></Typography>

                        <FormatPaintIcon sx={{ marginRight: "20px" }} />
                        <Badge badgeContent={0} color="secondary">
                            <Button
                                sx={{
                                    backgroundColor: "#FFFFFF",
                                    "&:hover": {
                                        color: "white",
                                        background: "grey",
                                    },
                                }}
                                onClick={Logout}
                            >
                                LogOut
                            </Button>
                        </Badge>
                    </Toolbar>
                </AppBar>

                <Drawer variant="permanent" open={open}>
                    {/* Appbar For Top Header and MenuIcon */}
                    <Toolbar
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            backgroundColor: "#1976d2",
                        }}
                    >
                        <div style={{ display: "flex" }}>
                            <MenuIcon
                                onClick={toggleDrawer}
                                style={{ color: "white" }}
                            />
                            <SecurityIcon
                                style={{ color: "white", marginLeft: "12px" }}
                            />
                            <Typography
                                component="h1"
                                variant="h6"
                                color="white"
                                noWrap
                                marginLeft="10px"
                                sx={{ flexGrow: 1 }}
                            >
                                {" "}
                                Jury
                            </Typography>
                        </div>
                    </Toolbar>

                    <Divider />
                    <div
                        style={{
                            height: "100vh",
                            backgroundColor: "#333333",
                            color: "white",
                        }}
                    >
                        <ListItem
                            disablePadding
                            sx={{ display: "block" }}
                            onClick={() => {
                                navigate("/dashboard/stats");
                            }}
                        >
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? "initial" : "center",
                                    px: 2.5,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : "auto",
                                        justifyContent: "center",
                                    }}
                                >
                                    <QueryStatsIcon
                                        style={{ color: "white" }}
                                    />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Stats"
                                    sx={{ opacity: open ? 1 : 0 }}
                                />
                            </ListItemButton>
                        </ListItem>
                        <ListItem
                            disablePadding
                            sx={{ display: "block" }}
                            onClick={() => {
                                navigate("/dashboard/employees");
                            }}
                        >
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? "initial" : "center",
                                    px: 2.5,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : "auto",
                                        justifyContent: "center",
                                    }}
                                >
                                    <BadgeIcon style={{ color: "white" }} />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Employees"
                                    sx={{ opacity: open ? 1 : 0 }}
                                />
                            </ListItemButton>
                        </ListItem>
                        <ListItem
                            disablePadding
                            sx={{ display: "block" }}
                            onClick={() => {
                                navigate("/dashboard/update");
                            }}
                        >
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? "initial" : "center",
                                    px: 2.5,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : "auto",
                                        justifyContent: "center",
                                    }}
                                >
                                    <Person2Icon style={{ color: "white" }} />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Update Profile"
                                    sx={{ opacity: open ? 1 : 0 }}
                                />
                            </ListItemButton>
                        </ListItem>
                    </div>
                </Drawer>

                <Box
                    component="main"
                    sx={{
                        backgroundColor: (theme) =>
                            theme.palette.mode === "light"
                                ? theme.palette.grey[100]
                                : theme.palette.grey[900],
                        flexGrow: 1,
                        height: "100vh",
                        overflow: "auto",
                    }}
                >
                    <div style={{ marginTop: 100 }}>
                        <Outlet />
                    </div>
                </Box>
            </Box>
        </ThemeProvider>
    );
}
