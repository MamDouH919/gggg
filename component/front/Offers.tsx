"use client"
import { Divider, Paper, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { styled } from "@mui/material/styles";

const PREFIX = "Offers";
const classes = {
    offerWrapper: `${PREFIX}-offerWrapper`,
    time: `${PREFIX}-time`,
};
const Root = styled(Paper)(({ theme }) => ({
    [`& .${classes.offerWrapper}`]: {
        border: `1px solid #E0E0E0`,
    },
    [`& .${classes.time}`]: {
        padding: theme.spacing(1),
        background: theme.palette.grey[700],
        borderRadius: 4,
        color: "#fff",
    },
}));

function Offers() {
    return (
        <Root>
            <Stack
                // className={classes.offerWrapper}
                direction="row"
                flexWrap={"wrap"}
            >
                <Stack direction={"column"} spacing={2} useFlexGap p={2} alignItems={"center"}>
                    <Typography variant='h6'>Deals and offers</Typography>
                    <Typography>Hygiene equipments</Typography>
                    <Stack direction={"row"} spacing={1} useFlexGap>
                        <Stack direction={"column"} spacing={0.5} alignItems={"center"} useFlexGap className={classes.time}>
                            <Typography variant='h6'>04</Typography>
                            <Typography>days</Typography>
                        </Stack>
                        <Stack direction={"column"} spacing={0.5} alignItems={"center"} useFlexGap className={classes.time}>
                            <Typography variant='h6'>04</Typography>
                            <Typography>days</Typography>
                        </Stack>
                        <Stack direction={"column"} spacing={0.5} alignItems={"center"} useFlexGap className={classes.time}>
                            <Typography variant='h6'>04</Typography>
                            <Typography>days</Typography>
                        </Stack>
                        <Stack direction={"column"} spacing={0.5} alignItems={"center"} useFlexGap className={classes.time} >
                            <Typography variant='h6'>04</Typography>
                            <Typography>days</Typography>
                        </Stack>
                    </Stack>
                </Stack>
                <Stack
                    flexGrow={1}
                    direction="row"
                    divider={<Divider orientation="vertical" flexItem />}
                    justifyContent={"space-between"}
                    flexWrap={"wrap"}
                    className={classes.offerWrapper}
                >
                    <Stack direction={"column"} spacing={2} useFlexGap padding={5} alignItems={"center"}>
                        <Image src='/clock.png' alt='product' width={"100"} height={"100"} />
                        <Typography>Hygiene equipments</Typography>
                    </Stack>
                    <Stack direction={"column"} spacing={2} useFlexGap padding={5} alignItems={"center"}>
                        <Image src='/clock.png' alt='product' width={"100"} height={"100"} />
                        <Typography>Hygiene equipments</Typography>
                    </Stack>
                    <Stack direction={"column"} spacing={2} useFlexGap padding={5} alignItems={"center"}>
                        <Image src='/clock.png' alt='product' width={"100"} height={"100"} />
                        <Typography>Hygiene equipments</Typography>
                    </Stack>
                    <Stack direction={"column"} spacing={2} useFlexGap padding={5} alignItems={"center"}>
                        <Image src='/clock.png' alt='product' width={"100"} height={"100"} />
                        <Typography>Hygiene equipments</Typography>
                    </Stack>
                    <Stack direction={"column"} spacing={2} useFlexGap padding={5} alignItems={"center"}>
                        <Image src='/clock.png' alt='product' width={"100"} height={"100"} />
                        <Typography>Hygiene equipments</Typography>
                    </Stack>
                </Stack>
            </Stack>
        </Root>
    )
}

export default Offers