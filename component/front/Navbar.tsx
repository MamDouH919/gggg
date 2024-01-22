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
import useWidth, { isWidthDown } from '../helperFunctions/width';
import { Tab, Tabs } from '@mui/material';
import Link from 'next/link';
import { NavLink } from '../customComponent/NavLink';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const PREFIX = "Navbar";
const classes = {
    topHeader: `${PREFIX}-topHeader`,
    searchWrapper: `${PREFIX}-searchWrapper`,
    taps: `${PREFIX}-taps`,
};
const Root = styled(AppBar)(({ theme }) => ({
    background: theme.palette.background.default,
    borderBottom: `1px solid #E0E0E0`,
    boxShadow: "none",
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
}));

function Navbar() {
    const width = useWidth()
    const isScreenSmall = isWidthDown("sm", width);

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <>
            <Root position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters sx={{ flexDirection: "column", py: 1 }}>
                        <Stack direction={"row"} spacing={2} width={"100%"} alignItems={"center"} justifyContent={"space-between"}>
                            <Link href='/'>
                                <Image src='/logo.png' alt='logo' width={"80"} height={"80"} />
                            </Link>
                            <Box className={classes.searchWrapper} sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
                                <Search />
                            </Box>
                            <Stack direction={"row"} useFlexGap spacing={1}>
                                <Stack direction={"column"} alignItems={"center"}>
                                    <IconButton aria-label="Profile">
                                        <AdbIcon />
                                    </IconButton>
                                </Stack>
                                <Stack direction={"column"} alignItems={"center"}>
                                    <IconButton aria-label="Profile">
                                        <AdbIcon />
                                    </IconButton>
                                </Stack>
                                <Stack direction={"column"} alignItems={"center"}>
                                    <IconButton aria-label="Profile">
                                        <AdbIcon />
                                    </IconButton>
                                </Stack>
                                <Stack direction={"column"} alignItems={"center"}>
                                    <IconButton aria-label="Profile">
                                        <AdbIcon />
                                    </IconButton>
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
                        <Tabs
                            value={1}
                            variant="scrollable"
                            scrollButtons={false}
                            aria-label="scrollable prevent tabs example"
                            className={classes.taps}
                            TabIndicatorProps={{
                                sx: {
                                    height: 0
                                }
                            }}
                        >
                            <NavLink href="/" exact>
                                home
                            </NavLink>
                            <NavLink href="/products" >
                                products
                            </NavLink>
                            <NavLink href="/about" >
                                About
                            </NavLink>
                        </Tabs>
                    </Box>

                </Container>
            </Root>
        </>
    );
}
export default Navbar;
