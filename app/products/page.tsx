"use client"
import {
    Box, Card, CardContent,
    CardMedia, Checkbox, FormControl, FormControlLabel
    , InputLabel, MenuItem, Paper, Rating, Skeleton, Stack, ToggleButton, ToggleButtonGroup, Typography
} from "@mui/material"
import Select, { SelectChangeEvent } from '@mui/material/Select';
import React, { Suspense } from 'react'
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { ViewList, ViewModule } from "@mui/icons-material";
import { Breadcrumbs, Container } from '@mui/material'
import Link from 'next/link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Layout from '@/component/front/Layout';
import NextBreadcrumb from "@/component/customComponent/BreadCrumb";
import { useProductsQuery } from "@/graphql/products.generated";

function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

const Page = () => {
    const [age, setAge] = React.useState('');
    const [dir, setDir] = React.useState("list");

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    };

    const [view, setView] = React.useState("list");

    const handleChangeView = (event: React.MouseEvent<HTMLElement>, nextView: string) => {
        setView(nextView);
    };

    const { data, error, loading } = useProductsQuery({
        fetchPolicy: "network-only",
        variables: {
            limit: 100,
            page: 1
        }
    })

    const breadcrumbs = [
        <Link key="1" color="inherit" href="/" onClick={handleClick}>
            MUI
        </Link>,
        <Link
            key="2"
            color="inherit"
            href="/material-ui/getting-started/installation/"
            onClick={handleClick}
        >
            Core
        </Link>,
        <Typography key="3" color="text.primary">
            Breadcrumb
        </Typography>,
    ];

    return (
        <Layout>
            <NextBreadcrumb />
            <Container maxWidth="xl">

                <Stack direction={"row"} spacing={4} useFlexGap pt={5}>
                    <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                        <Accordion >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                <Typography whiteSpace={"nowrap"}>Accordion 1</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet,
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2-content"
                                id="panel2-header"
                            >
                                <Typography whiteSpace={"nowrap"}>Accordion 2</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet,
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel3-content"
                                id="panel3-header"
                            >
                                <Typography whiteSpace={"nowrap"}>Disabled Accordion</Typography>
                            </AccordionSummary>
                        </Accordion>
                    </Box>
                    <Stack direction={"column"} spacing={4} useFlexGap flexGrow={1}>
                        <Suspense fallback={""}>
                            <Paper sx={{ padding: 1 }}>
                                <Stack direction={{ xs: "column", sm: "row" }} justifyContent={"space-between"} alignItems={"center"}>
                                    {data && !loading ? <Typography>
                                        {data?.products.data.length} items in Mobile accessory
                                    </Typography> : <Skeleton animation="wave" width={100} />}
                                    <Stack direction={{ xs: "column", sm: "row" }} spacing={1} useFlexGap alignItems={"center"}>
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Verified only" />
                                        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                                            <InputLabel id="demo-select-small-label">Featured</InputLabel>
                                            <Select
                                                labelId="demo-select-small-label"
                                                id="demo-select-small"
                                                value={age}
                                                label="Featured"
                                                onChange={handleChange}
                                                variant='outlined'
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
                            <Grid container spacing={3} alignItems={"stretch"}>
                                {data && !loading ? data?.products.data.map((e: any, i) =>
                                    <Grid md={view === "list" ? 12 : 3} xs={12} key={i} display={"flex"}>
                                        <Card sx={{
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
                                                    image={e?.media?.[0]?.image?.[0]?.filePath ?? "/product-not-available.png"}
                                                    alt="Live from space album cover"
                                                />
                                            </Link>
                                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                                <CardContent sx={{ flex: '1 0 auto' }}>
                                                    <Typography component="div" variant="h5">
                                                        {e.name}
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
                                                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                                                    {/* <ToggleButtonGroup
                                        orientation="vertical"
                                        value={view}
                                        exclusive
                                        onChange={handleChange}
                                    >
                                        <ToggleButton value={true} aria-label="list">
                                            <ViewList />
                                        </ToggleButton>
                                        <ToggleButton value={false} aria-label="module">
                                            <ViewModule />
                                        </ToggleButton>
                                    </ToggleButtonGroup> */}
                                                </Box>
                                            </Box>
                                        </Card>
                                    </Grid>)
                                    :
                                    <Grid xs={12} sx={{ pt: 0.5 }}>
                                        <Skeleton variant="rectangular" width="100%">
                                            <div style={{ paddingTop: '15%', marginBottom: 8 }} />
                                        </Skeleton>
                                        <Skeleton variant="rectangular" width="100%">
                                            <div style={{ paddingTop: '15%', marginBottom: 8 }} />
                                        </Skeleton>
                                        <Skeleton variant="rectangular" width="100%">
                                            <div style={{ paddingTop: '15%', marginBottom: 8 }} />
                                        </Skeleton>
                                        <Skeleton variant="rectangular" width="100%">
                                            <div style={{ paddingTop: '15%', marginBottom: 8 }} />
                                        </Skeleton>
                                    </Grid>
                                }
                            </Grid>
                        </Suspense>
                    </Stack>
                </Stack>
            </Container>
        </Layout>
    )
}

export default Page
