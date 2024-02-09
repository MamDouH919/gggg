"use client"

import React, { useEffect, useState } from 'react'
import { Box, IconButton, useTheme } from '@mui/material'
import { styled } from "@mui/material/styles";
import Menu from '@mui/icons-material/Menu';
import clsx from 'clsx';
import Grid from '@mui/material/Unstable_Grid2';
import useWidth, { isWidthDown, isWidthUp } from '@/component/helperFunctions/width';
import DashboardHeader from '@/component/dashboard/Navbar';
// import Navdrawer from '@/component/dashboard/Navdrawer';


const PREFIX = "HomeLayout";

const classes = {
    body: `${PREFIX}-body`,
    headerPosition: `${PREFIX}-headerPosition`,
    contentShift: `${PREFIX}-contentShift`,
    main: `${PREFIX}-main`,
};

const drawerWidth = 248;

const Root = styled("div")(({ theme }) => ({
    height: "100dvh",
    display: "flex",
    flexDirection: "column",
    [`& .${classes.body}`]: {
        flexGrow: 1,
        display: "flex",
        position: "relative",
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        [theme.breakpoints.up("sm")]: {
            marginLeft: -drawerWidth,
            height: "calc(100dvh - (64px))",
        },
        height: "calc(100dvh - (56px))",
        flexDirection: "column",
        overflow: "hidden"
    },
    [`& .${classes.headerPosition}`]: {
        ...theme.mixins.toolbar
    },
    [`& .${classes.contentShift}`]: {
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        [theme.breakpoints.up("sm")]: {
            marginLeft: 0,
        },
    },
    [`& .${classes.main}`]: {
        height: "calc(100% - (80px))",
        overflowY: "scroll"
    },

}));

function HomeLayout({
    children,
}: {
    children: React.ReactNode
}) {

    const screenWidth = useWidth();
    const isScreenSmall = isWidthDown("xs", screenWidth);
    const isScreenLarge = isWidthUp("lg", screenWidth);
    const navDrawerOpen = localStorage.getItem("navDrawerOpen");

    const isNavDrawerOpen = isScreenSmall
        ? false
        : navDrawerOpen !== null
            ? navDrawerOpen === "true"
            : isScreenLarge;
    const [navDrawer, setNavDrawer] = useState({
        top: isNavDrawerOpen,
        left: isNavDrawerOpen,
        bottom: isNavDrawerOpen,
        right: isNavDrawerOpen,
    });


    const drawerAnchor = isScreenSmall ? "bottom" : "left";

    const toggleDrawer = (anchor: any, open: any) => {
        setNavDrawer((prev) => ({ ...prev, [anchor]: open }));
    };

    const drawerToggleButton = () => {
        toggleDrawer(drawerAnchor, !navDrawer[drawerAnchor]);
        // localStorage.setItem("navDrawerOpen", !navDrawer[drawerAnchor]);
    };
    const handleDrawerClose = () => {
        toggleDrawer(drawerAnchor, false);
    };

    const MenuButton = () => {
        return (
            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={drawerToggleButton}
                edge="start"
                size={isScreenSmall ? "small" : "medium"}
                sx={{ p: 1 }}
            >
                <Menu fontSize="large" color="primary" />
            </IconButton>
        );
    };

    return (
        <Root>
            <DashboardHeader MenuButton={MenuButton} />
            <div className={classes.headerPosition}></div>
            <Box sx={{ display: "flex", height: "100%" }}>
                {/* <Navdrawer
                    navDrawer={navDrawer}
                    drawerAnchor={drawerAnchor}
                    handleDrawerClose={handleDrawerClose}
                /> */}
                <main className={clsx(classes.body, {
                    [classes.contentShift]: navDrawer[drawerAnchor],
                })} >
                    {/* <div style={{width:"248px"}}>j</div> */}
                    <Grid container height={"100%"}>
                        <Grid xs={12} sx={{ height: "40px", background: "gray" }}>
                            <div>breadCrumb</div>
                        </Grid>
                        <Grid xs={12} flexGrow={10} overflow={"hidden"} className={classes.main} >
                            <Box sx={{ flexGrow: 1 }}>
                                {children}
                            </Box>
                        </Grid>
                        <Grid xs={12} sx={{ height: "40px", background: "gray" }}>
                            <div>
                                footer
                            </div>
                        </Grid>
                    </Grid>
                </main>
            </Box>
        </Root>
    )
}

export default HomeLayout