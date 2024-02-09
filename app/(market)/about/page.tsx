"use client"
import NextBreadcrumb from '@/component/customComponent/BreadCrumb'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import React from 'react'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import Image from 'next/image'
import { Box, Divider, Paper, styled } from '@mui/material'
import { Login } from '@mui/icons-material'

const PREFIX = "AboutPage";
const classes = {
    imageWrapper: `${PREFIX}-imageWrapper`,
    paper: `${PREFIX}-paper`,
    icon: `${PREFIX}-icon`,
};
const Root = styled(Container)(({ theme }) => ({
    [`& .${classes.imageWrapper}`]: {
        padding: theme.spacing(1),
        border: `1px solid ${theme.palette.divider}`,
        borderRadius: "8px"
    },
    [`& .${classes.paper}`]: {
        background: theme.palette.primary.light,
        borderRadius: "14px"
    },
    [`& .${classes.icon}`]: {
        background: theme.palette.primary.dark,
        height: "50px",
        width: "50px",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white"

    },
}));

const ourServices = [
    {
        title: "Themeable",
        desc: "Customize any part of our components to match your design needs.",
        icon: Login
    },
    {
        title: "Light and Dark UI",
        desc: "Optimized for multiple color modes. Use light or dark, your choice.",
        icon: Login
    },
    {
        title: "Composable",
        desc: "Designed with composition in mind. Compose new components with ease.",
        icon: Login
    },
    {
        title: "Developer Experience",
        desc: "Guaranteed to boost your productivity when building your app or website.",
        icon: Login
    },
    {
        title: "Continuous Updates",
        desc: "We continually deploy improvements and new updates to Webbee.",
        icon: Login
    },
    {
        title: "Free support",
        desc: "6 months of free technical support to help you build your website faster.",
        icon: Login
    },
]

function AboutPage() {
    return (
        <Root maxWidth={"xl"}>
            <NextBreadcrumb />
            <Stack spacing={5}>
                <Divider textAlign="center" sx={{ mb: 3 }}>
                    <Typography textAlign={"center"} variant='h4' color={"primary.main"}>About Sin Print</Typography>
                </Divider>
                <Grid container spacing={3}>
                    <Grid md={4} className={classes.imageWrapper}>
                        <Image
                            src={'/ddd.png'}
                            alt='ff'
                            height={0}
                            width={0}
                            sizes='100vw'
                            style={{
                                width: "100%",
                                height: "100%"
                            }}
                        />
                    </Grid>
                    <Grid md={8}>
                        <Typography fontSize={"18px"} p={2}>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, necessitatibus cumque?
                            Quas sequi voluptatem recusandae soluta veniam ratione facere impedit quis eligendi quo. Iure est ipsum odit voluptatem animi similique!
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, necessitatibus cumque?
                            Quas sequi voluptatem recusandae soluta veniam ratione facere impedit quis eligendi quo. Iure est ipsum odit voluptatem animi similique!
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, necessitatibus cumque?
                            Quas sequi voluptatem recusandae soluta veniam ratione facere impedit quis eligendi quo. Iure est ipsum odit voluptatem animi similique!
                        </Typography>
                    </Grid>
                </Grid>
                <Divider textAlign="center" sx={{ mb: 3 }}>
                    <Typography textAlign={"center"} variant='h4' color={"primary.main"}>Our Services</Typography>
                </Divider>
                <Grid container spacing={3}>
                    {ourServices.map((e, i) =>
                        <Grid xs={12} sm={6} md={4} key={i} display={"grid"}>
                            <Paper elevation={4} component={Stack} spacing={1} p={3} className={classes.paper}>
                                <Box className={classes.icon}>
                                    <e.icon />
                                </Box>
                                <Typography color={"white"} variant='h5'>{e.title}</Typography>
                                <Typography color={"white"}>{e.desc}</Typography>
                            </Paper>
                        </Grid>
                    )}
                </Grid>
            </Stack>
        </Root>
    )
}

export default AboutPage