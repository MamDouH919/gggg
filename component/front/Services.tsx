"use client"
import { Avatar, Divider, Paper, Stack, Typography, useTheme } from '@mui/material'
import React from 'react'
import { MdOutlineSupportAgent } from "react-icons/md";
import { styled } from "@mui/material/styles";

const PREFIX = "Services";
const classes = {
    title: `${PREFIX}-title`,
};
const Root = styled("div")(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: "4px",
    padding: theme.spacing(2),
    [`& .${classes.title}`]: {
        color: theme.palette.primary.main
    },
}));

function Services() {
    const theme = useTheme()
    return (
        <Root>
            <Stack
                direction={"row"}
                spacing={3}
                useFlexGap
                justifyContent={"space-evenly"}
                divider={<Divider orientation="vertical" flexItem />}
                flexWrap={"wrap"}
            >
                <Stack spacing={2} direction="row" alignItems="center">
                    <Avatar sx={{ height: 60, width: 60 }}>
                        <MdOutlineSupportAgent size={40} fill={theme.palette.primary.main} />
                    </Avatar>
                    <Stack>
                        <Typography noWrap className={classes.title}>{"24/7 Support"}</Typography>
                        <Typography color={"text.secondary"} noWrap>{"Online Support 24/7"}</Typography>
                    </Stack>
                </Stack>
                <Stack spacing={2} direction="row" alignItems="center">
                    <Avatar sx={{ height: 60, width: 60 }}>
                        <MdOutlineSupportAgent size={40} fill={theme.palette.primary.main} />
                    </Avatar>
                    <Stack>
                        <Typography noWrap className={classes.title}>{"Money Back Guarantee"}</Typography>
                        <Typography color={"text.secondary"} noWrap>{"100% Secure Payment"}</Typography>
                    </Stack>
                </Stack>
                <Stack spacing={2} direction="row" alignItems="center">
                    <Avatar sx={{ height: 60, width: 60 }}>
                        <MdOutlineSupportAgent size={40} fill={theme.palette.primary.main} />
                    </Avatar>
                    <Stack>
                        <Typography noWrap className={classes.title}>{"Special Gift Cards"}</Typography>
                        <Typography color={"text.secondary"} noWrap>{"Give The Perfect Gift"}</Typography>
                    </Stack>
                </Stack>
                <Stack spacing={2} direction="row" alignItems="center">
                    <Avatar sx={{ height: 60, width: 60 }}>
                        <MdOutlineSupportAgent size={40} fill={theme.palette.primary.main} />
                    </Avatar>
                    <Stack>
                        <Typography noWrap className={classes.title}>{"Free Shipping"}</Typography>
                        <Typography color={"text.secondary"} noWrap>{"On Order Over $99"}</Typography>
                    </Stack>
                </Stack>

            </Stack>
        </Root>
    )
}

export default Services