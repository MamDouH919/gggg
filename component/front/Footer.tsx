"use client"
import { Container, Typography, styled } from '@mui/material';
import Stack from '@mui/material/Stack';
import Image from 'next/image';
import React from 'react'

const PREFIX = "Footer";
const classes = {
    tabs: `${PREFIX}-tabs`,
    category: `${PREFIX}-category`,
    slide: `${PREFIX}-slide`,
    slider: `${PREFIX}-slider`,
    button: `${PREFIX}-button`,
};
const Root = styled("div")(({ theme }) => ({
    background: theme.palette.primary.main,
    [`& .${classes.category}`]: {
        padding: theme.spacing(1),
        fontWeight: 300,
        [`&:hover`]: {
            border: 0,
            fontWeight: 500,
            color: theme.palette.text.primary,
            borderRadius: "4px"
        },
    },
}));

function Footer() {
    return (
        <Root>
            <Container maxWidth="xl">
                <Stack spacing={2} py={3}>
                    <Stack
                        direction={"row"}
                        justifyContent={"center"}
                        flexWrap={"wrap"}
                        alignItems={"center"}
                        useFlexGap>
                        <Image
                            alt='logo'
                            src='/footerLogo.png'
                            width="0"
                            height="0"
                            sizes="100vw"
                            style={{ width: "80px", height: "auto" }}
                        />
                        {/* <Stack direction={"row"} spacing={2}>
                            <Typography>home</Typography>
                            <Typography>products</Typography>
                        </Stack> */}
                    </Stack>
                    <Typography textAlign={"center"} color={"white"}>© Webbee. 2021, Maccarian. All rights reserved</Typography>
                    <Typography textAlign={"center"} color={"white"}>When you visit or interact with our sites, services or tools, we or our authorised service providers may use cookies
                        for storing information to help provide you with a better, faster and safer experience and for marketing purposes.</Typography>
                </Stack>
            </Container>
        </Root>
    )
}

export default Footer