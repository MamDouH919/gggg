"use client"
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Avatar, Button, Paper, Stack } from '@mui/material';
import CustomTabs from '../customComponent/CustomTabs';
import { styled } from "@mui/material/styles";
import { hexToRgb } from '../helperFunctions/hexToRgb';
import BannerSwiper from '../Swipers/BannerSwiper';
import Grid from '@mui/material/Unstable_Grid2/Grid2';

const PREFIX = "Banner";
const classes = {
    tabs: `${PREFIX}-tabs`,
    category: `${PREFIX}-category`,
};
const Root = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    [`& .${classes.category}`]: {
        padding: theme.spacing(1),
        fontWeight: 300,
        [`&:hover`]: {
            backgroundColor: `rgba(${hexToRgb(theme.palette.info.main)}, 0.3)`,
            border: 0,
            fontWeight: 500,
            color: theme.palette.text.primary,
            borderRadius: "4px"
        },
    },
}));

export default function Banner() {

    const categoriesList = ["Automobiles", "Clothes and wear", "Computer and tech", "Tools, equipments", "Tools, equipments", "Tools, equipments", "Tools, equipments"]

    const categories = (category: String, index: number) => {
        return <Stack className={classes.category} key={index}>{category}</Stack>
    }

    return (
        <Root>
            <Grid container spacing={1} margin={1}>
                <Grid xs={12} md={2}>
                    <Stack direction={"column"}>
                        {categoriesList.map((category: String, index: number) => categories(category, index))}
                    </Stack>
                </Grid>
                <Grid xs={12} md={7}>
                    <BannerSwiper />
                </Grid>
                <Grid xs={12} md={3}>
                    <Stack direction={"column"} spacing={1} useFlexGap>
                        <Stack
                            sx={{
                                borderRadius: "6px",
                                background: "#E3F0FF",
                                padding: 2
                            }}
                            direction={"column"}
                            useFlexGap
                            spacing={1}
                        >
                            <Stack direction={"row"} spacing={1} useFlexGap alignItems={"center"}>
                                <Avatar></Avatar>
                                <Typography>Hi, user <br />let’s get stated</Typography>
                            </Stack>
                            <Button variant="contained">Join now</Button>
                            <Button variant="contained">Log in</Button>
                        </Stack>
                        <Stack
                            sx={{
                                borderRadius: "6px",
                                background: "#F38332",
                                padding: 2
                            }}
                            direction={"column"}
                            useFlexGap
                            spacing={1}
                        >
                            <Typography whiteSpace={"break-spaces"}>
                                Get US $10 off <br />with a new<br /> supplier
                            </Typography>
                        </Stack>
                        <Stack
                            sx={{
                                borderRadius: "6px",
                                background: "#55BDC3",
                                padding: 2
                            }}
                            direction={"column"}
                            useFlexGap
                            spacing={1}
                        >
                            <Typography>
                                Send quotes with <br /> supplier<br /> preferences
                            </Typography>
                        </Stack>
                    </Stack>
                </Grid>
            </Grid>
        </Root>
    );
}
