"use client"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import AdbIcon from '@mui/icons-material/Adb';
import Image from 'next/image';
import { styled } from "@mui/material/styles";
import Search from './Search';
import Stack from '@mui/material/Stack';
import { Divider, Tab, Tabs, Typography } from '@mui/material';
import Link from 'next/link';
import { NavLink } from '../customComponent/NavLink';
import { FaFacebookF, FaInstagram, FaTwitter, FaPinterestP, FaLinkedinIn, FaGooglePlusG, FaWifi } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import { Login, ShoppingCart } from '@mui/icons-material';

const PREFIX = "Navbar";
const classes = {
    topHeader: `${PREFIX}-topHeader`,
    searchWrapper: `${PREFIX}-searchWrapper`,
    taps: `${PREFIX}-taps`,
    topAppBar: `${PREFIX}-topAppBar`,
};
const Root = styled(AppBar)(({ theme }) => ({
    background: theme.palette.background.default,
    borderBottom: `1px solid #E0E0E0`,
    // boxShadow: "none",
    [`& .${classes.topHeader}`]: {
        borderBottom: `1px solid #E0E0E0`,
    },
    [`& .${classes.searchWrapper}`]: {
        flexGrow: 1,
        justifyContent: "center",
    },
    [`& .${classes.taps}`]: {
        [`& .MuiTabs-flexContainer`]: {
            height: "100%"
        },
    },
    [`&.${classes.topAppBar}`]: {
        background: theme.palette.primary.main,
    },
}));

function Navbar() {
    return (
        <>
            <Root position="static" className={classes.topAppBar}>
                <Container maxWidth="xl">
                    <Box sx={{ maxWidth: "100%", py: 1 }}>
                        <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} flexWrap={"wrap"} spacing={2} useFlexGap>
                            <Stack direction={"row"} spacing={2}>
                                <BsTelephoneFill />
                                <Typography>01125454102</Typography>
                                <Divider orientation="vertical" flexItem />
                                <Typography>Login</Typography>
                            </Stack>
                            <Stack direction={"row"} spacing={3}>
                                <FaFacebookF />
                                <FaInstagram />
                                <FaTwitter />
                                <FaPinterestP />
                                <FaGooglePlusG />
                                <FaLinkedinIn />
                                <FaWifi />
                            </Stack>
                        </Stack>
                    </Box>
                </Container>
            </Root>
            <Root position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters sx={{ flexDirection: "column", py: 1 }}>
                        <Stack direction={"row"} spacing={2} width={"100%"} alignItems={"center"} justifyContent={"space-between"}>
                            <Link href='/'>
                                {/* <Image src='/logo.png' alt='logo' width={"80"} height={"80"} /> */}
                                <Image
                                    alt='logo'
                                    src='/logo.png'
                                    width="0"
                                    height="0"
                                    sizes="100vw"
                                    style={{ width: "80px", height: "auto" }}
                                // className="w-full h-auto"
                                />
                            </Link>
                            <Box className={classes.searchWrapper} sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
                                <Search />
                            </Box>
                            <Stack direction={"row"} useFlexGap spacing={2}>
                                <Stack alignItems={"center"}>
                                    <IconButton aria-label="Profile" size='large' color='primary'>
                                        <Login fontSize='inherit' />
                                    </IconButton>
                                    <Typography color={"primary"}>
                                        Login
                                    </Typography>
                                </Stack>
                                <Stack alignItems={"center"}>
                                    <Link href={'/my-cart'}>
                                        <IconButton aria-label="Profile" color='primary' size='large'>
                                            <ShoppingCart fontSize='inherit' />
                                        </IconButton>
                                    </Link>
                                    <Typography color={"primary"}>
                                        My cart
                                    </Typography>
                                </Stack>
                            </Stack>
                        </Stack>
                        <Box className={classes.searchWrapper} sx={{ display: { sm: "flex", md: "none" } }}>
                            <Search />
                        </Box>
                    </Toolbar>

                </Container>
            </Root>
            <Root position="static">
                <Container maxWidth="xl">
                    <Box sx={{ maxWidth: "100%" }}>
                        <Stack direction={"row"} overflow={"auto"} py={2}
                            sx={{
                                "::-webkit-scrollbar": {
                                    display: "none"
                                }
                            }}>
                            <NavLink href="/" exact>
                                home
                            </NavLink>
                            <NavLink href="/products" >
                                products
                            </NavLink>
                            <NavLink href="/about" >
                                About
                            </NavLink>
                        </Stack>
                    </Box>
                </Container>
            </Root>
        </>
    );
}
export default Navbar;
