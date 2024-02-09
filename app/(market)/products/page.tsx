"use client"
import {
    Box,
    CircularProgress, FormControl,
    InputLabel, MenuItem, Paper, Skeleton, Stack, ToggleButton, ToggleButtonGroup, Typography
} from "@mui/material"
import Select, { SelectChangeEvent } from '@mui/material/Select';
import React, { Fragment, Suspense, useState } from 'react'
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { ViewList, ViewModule } from "@mui/icons-material";
import { Container } from '@mui/material'
import NextBreadcrumb from "@/component/customComponent/BreadCrumb";
import { useProductsQuery } from "@/graphql/products.generated";
import Loading from "../loading";
import ListProduct from "./__component/ListProduct";
import { Waypoint } from "react-waypoint";
import { SubmitHandler, useForm } from "react-hook-form";
import ProductCard from "./__component/ProductItem";

interface IFormInput {
    name: string
    description: string
    vendor: string
}

const Page = (props: any) => {
    const [age, setAge] = React.useState('');
    const [page, setPage] = React.useState(1);
    // const [products, setProducts] = React.useState<any>([]);

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    };

    const [view, setView] = React.useState("column");

    const handleChangeView = (event: React.MouseEvent<HTMLElement>, nextView: string) => {
        setView(nextView);
    };

    const { data, loading, fetchMore, networkStatus } = useProductsQuery({
        fetchPolicy: "network-only",
        notifyOnNetworkStatusChange: true,
        variables: {
            page: 1,
            limit: 20,
            ...(Object.values(props.searchParams).length !== 0 && {
                categoryId: [parseInt(props.searchParams.category)]
            })
        },
        // onCompleted: (data) => {
        //     setProducts(data.products.data)
        // }
    })

    const { register, handleSubmit, control } = useForm<IFormInput>()
    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        console.log(data);
    }

    console.log(networkStatus);


    return (
        <Container maxWidth="lg">
            <NextBreadcrumb />
            <Stack direction={"row"} spacing={4} useFlexGap>
                <Stack direction={"column"} spacing={4} useFlexGap flexGrow={1}>
                    <Suspense fallback={<Loading />}>
                        <Paper sx={{ padding: 1 }}>
                            <Stack direction={{ xs: "column", sm: "row" }} justifyContent={"space-between"} alignItems={"center"}>
                                {data && !loading ? <Typography>
                                    {data?.products.total} items
                                </Typography> : <Skeleton animation="wave" width={100} />}
                                <Stack direction={{ xs: "column", sm: "row" }} spacing={1} useFlexGap alignItems={"center"}>
                                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                                        <InputLabel id="demo-select-small-label">Age</InputLabel>
                                        <Select
                                            labelId="demo-select-small-label"
                                            id="demo-select-small"
                                            value={age}
                                            label="Age"
                                            variant="outlined"
                                            onChange={handleChange}
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <ToggleButtonGroup
                                        orientation="horizontal"
                                        value={view}
                                        exclusive
                                        onChange={handleChangeView}
                                        sx={{ display: { xs: "none", md: "block" } }}
                                    >
                                        <ToggleButton value={"list"} aria-label="list">
                                            <ViewList />
                                        </ToggleButton>
                                        <ToggleButton value={"column"} aria-label="module">
                                            <ViewModule />
                                        </ToggleButton>
                                    </ToggleButtonGroup>
                                </Stack>
                            </Stack>
                        </Paper>
                        <Stack>
                            {loading && networkStatus !== 3 &&
                                <Grid container spacing={3} alignItems={"stretch"}>
                                    {[1, 2, 3, 4, 5, 6, 8, 9].map((e: any, index: number) => (
                                        <Grid lg={view === "list" ? 12 : 3} md={view === "list" ? 12 : 6} xs={12} display={"flex"} key={index}>
                                            <Box width={"100%"}>
                                                <Grid container spacing={2}>
                                                    <Grid md={view === "list" ? 2 : 12} xs={4} display={"flex"} justifyContent={"center"}>
                                                        <Skeleton variant="rounded" width={"100%"} height={150} />
                                                    </Grid>
                                                    <Grid md={view === "list" ? 10 : 12} xs={8}>
                                                        <Stack spacing={1}>
                                                            <Skeleton variant="rounded" width={250} height={20} />
                                                            <Skeleton variant="rounded" width={200} height={20} />
                                                            <Skeleton variant="rounded" width={200} height={20} />
                                                        </Stack>
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                        </Grid>
                                    ))}
                                </Grid>
                            }
                            {data && data.products.data.length > 0 &&
                                <Grid container spacing={3} alignItems={"stretch"}>
                                    {data.products.data.map((e: any, index) => (
                                        <Fragment key={index}>
                                            <Grid md={4} xs={12} lg={3} sm={6} display={"flex"}>
                                                <ProductCard img={e.media[0]?.image?.filePath} name={e.name} id={e.id} key={index} />
                                            </Grid>
                                            {
                                                data.products.has_more_pages && index === data.products.data.length - 4 && (
                                                    <Waypoint
                                                        onEnter={() => {
                                                            fetchMore({
                                                                variables: {
                                                                    page: page + 1,
                                                                    ...(Object.values(props.searchParams).length !== 0 && {
                                                                        categoryId: [parseInt(props.searchParams.category)]
                                                                    })
                                                                },
                                                                updateQuery: (pv, { fetchMoreResult }) => {
                                                                    if (!fetchMoreResult) {
                                                                        return pv;
                                                                    }
                                                                    return {
                                                                        __typename: "Query",
                                                                        products: {
                                                                            __typename: "ProductPagination",
                                                                            data: [
                                                                                ...pv.products.data,
                                                                                ...fetchMoreResult.products.data
                                                                            ],
                                                                            has_more_pages: fetchMoreResult.products.has_more_pages,
                                                                            current_page: fetchMoreResult.products.current_page,
                                                                            last_page: fetchMoreResult.products.last_page,
                                                                            per_page: fetchMoreResult.products.per_page,
                                                                            total: fetchMoreResult.products.total,
                                                                            from: fetchMoreResult.products.from,
                                                                            to: fetchMoreResult.products.to,
                                                                        },
                                                                    };
                                                                }
                                                            })
                                                            setPage(prev => prev + 1)
                                                        }}
                                                    />
                                                )
                                            }
                                        </Fragment>
                                    ))}
                                </Grid>
                            }
                            {networkStatus === 3 &&
                                <Stack p={2}>
                                    <CircularProgress />
                                </Stack>}
                        </Stack>
                    </Suspense>
                </Stack>
            </Stack>
        </Container>
    )
}

export default Page
