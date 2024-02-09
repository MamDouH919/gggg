import { Box, Card, CardContent, CardMedia, CircularProgress, Rating, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Waypoint } from "react-waypoint";

interface propsData {
    data: any,
    view: string,
}
const ListProduct = (props: propsData) => {
    const { data, view } = props
    return (
        <Grid lg={view === "list" ? 12 : 3} md={view === "list" ? 12 : 6} xs={12} display={"flex"} >
            {/* <Card sx={{
                display: 'flex',
                width: "100%",
                p: 2,
                justifyContent: view === "list" ? { xs: "space-between", md: "flex-start" } : { xs: "space-between", md: "flex-start" },
                flexDirection: view === "list" ? { xs: "column", md: "row" } : { xs: "column", md: "column" },
                alignItems: view === "list" ? { xs: "center", md: "start" } : { xs: "start", md: "center" }
            }}>
                <Link href={'/products/5'}>
                    <CardMedia
                        component="img"
                        sx={{ width: 151 }}
                        image={data?.media[0].image.filePath ?? "/product-not-available.png"}
                        alt="Live from space album cover"
                    />
                </Link>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">
                            {data.name}
                        </Typography>
                        <Stack direction={"row"} alignItems={"center"} spacing={1}>
                            <Typography variant="h6" color="text.primary" component="div" fontWeight={"bold"}>
                                $998.00
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary" component="div">
                                $1128.00
                            </Typography>
                        </Stack>
                        <Stack direction={"row"} alignItems={"center"} spacing={1}>
                            <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
                        </Stack>
                    </CardContent>
                </Box>
            </Card> */}
            <Box width={"100%"}>
                <Grid container spacing={2}>
                    <Grid md={view === "list" ? 2 : 12} xs={4} display={"flex"} justifyContent={"center"}>
                        <Link href={'/products/5'}  >
                            <Image
                                src={data?.media[0]?.image?.filePath ?? "/product-not-available.png"}
                                alt="mm"
                                width={0}
                                height={0}
                                sizes="100vh"
                                style={{
                                    width: "150px",
                                    height: "auto"
                                }}
                            />
                        </Link>
                    </Grid>
                    <Grid md={view === "list" ? 10 : 12} xs={8}>
                        <Stack>
                            <Typography component="div" variant="h5">
                                {data.name}
                            </Typography>
                            <Stack direction={"row"} alignItems={"center"} spacing={1}>
                                <Typography variant="h6" color="text.primary" component="div" fontWeight={"bold"}>
                                    $998.00
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                    $1128.00
                                </Typography>
                            </Stack>
                            <Stack direction={"row"} alignItems={"center"} spacing={1}>
                                <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
                            </Stack>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
        </Grid>
    );
};

export default ListProduct;