"use client"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
// import logo from '../../assets/images/logo.png'
import { styled } from "@mui/material/styles";
// import Image from 'next/image';
import Link from 'next/link';

const PREFIX = "Header";

const classes = {
    appBar: `${PREFIX}-appBar`,
    stickyHeader: `${PREFIX}-stickyHeader`,
    logo: `${PREFIX}-logo`,
    link: `${PREFIX}-link`,
    trackingPopover: `${PREFIX}-trackingPopover`,
    tracking: `${PREFIX}-tracking`,
    trackTypography: `${PREFIX}-trackTypography`,
    activeLink: `${PREFIX}-activeLink`,
    img: `${PREFIX}-img`,
    loginButton: `${PREFIX}-loginButton`,
    overridesLoginButton: `${PREFIX}-overridesLoginButton`,
    lang: `${PREFIX}-lang`,
    iconsWrapper: `${PREFIX}-iconsWrapper`,
    loginButtonNoPadding: `${PREFIX}-loginButtonNoPadding`,
};

const Root = styled("div")(({ theme }) => ({
    [`& .${classes.appBar}`]: {
        background: theme.palette.background.paper
    },
    [`& .${classes.loginButton}`]: {
        borderRadius: 30,
        border: "2px solid",
        borderColor: theme.palette.primary.main,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: theme.spacing(4),
        minWidth: theme.spacing(14),
        color: theme.palette.primary.main,
        "&:hover": {
            background: theme.palette.primary.main,
            color: theme.palette.common.white,
            cursor: "pointer",
        },
    },
    [`& .${classes.loginButtonNoPadding}`]: {
        padding: theme.spacing(0),
        borderBottom: `none`,
    },
}))

interface propsInput {
    MenuButton: any
}

function DashboardHeader(props: propsInput) {
    const {
        MenuButton
    } = props
    return (
        <Root>
            <AppBar className={classes.appBar} position="fixed" sx={{ boxShadow: 'none' }} >
                <Toolbar>
                    <Box sx={{ flexGrow: 1, display: "flex" }}>
                        <Box>
                            {MenuButton()}
                        </Box>
                        <Link href={'/'}>
                            {/* <Image src={"/logo.png"} alt='logo' width={"50"} height={"50"} /> */}
                        </Link>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                        kdfjksd
                    </Box>
                </Toolbar>
            </AppBar>
        </Root>
    );
}
export default DashboardHeader;