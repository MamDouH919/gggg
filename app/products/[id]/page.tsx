"use client"
import Layout from '@/component/front/Layout';
import { CloudUpload, NavigateNext } from '@mui/icons-material';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Rating from '@mui/material/Rating';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import Image from 'next/image';
import React, { useState } from 'react'
import CustomTab from '@/component/customComponent/CustomTab';
import NextBreadcrumb from '@/component/customComponent/BreadCrumb';
import { styled } from "@mui/material/styles";
import Similar from '@/component/usageWidget/Similar';
import { useProductQuery } from '@/graphql/products.generated';
import { Skeleton } from '@mui/material';
import CustomTabImages from '@/component/customComponent/CustomTabImages';

const PREFIX = "Offers";
const classes = {
    imageWrapper: `${PREFIX}-imageWrapper`,
    time: `${PREFIX}-time`,
    text: `${PREFIX}-text`,
};
const Root = styled(Container)(({ theme }) => ({
    [`& .${classes.imageWrapper}`]: {
        display: 'grid',
        gridGap: '8px',
        gridTemplateColumns: 'repeat(auto-fit, minmax(100%, auto))',
        border: "1px solid #dee2e6",
        padding: "5px",
        borderRadius: "6px",
    },
    [`& .${classes.time}`]: {
        padding: theme.spacing(1),
        background: theme.palette.grey[700],
        borderRadius: 4,
        color: "#fff",
    },
    [`& .${classes.text}`]: {
        color: theme.palette.primary.main
    },
}));
const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}



function Page(props: any) {
    const id = props.params.id
    const { data, loading, error } = useProductQuery({
        skip: !Boolean(id),
        variables: {
            id: parseInt(id)
        },
    });
    const loadingData = !data && loading

    let description = (
        <Grid container spacing={2} margin={2}>
            <Grid xs={12}>
                <Typography>
                    With supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </Typography>
            </Grid>
            <Grid xs={12} md={6}>
                Some great feature name here
            </Grid>
            <Grid xs={12} md={6}>
                Some great feature name here
            </Grid>
            <Grid xs={12} md={6}>
                Some great feature name here
            </Grid>
            <Grid xs={12} md={6}>
                Some great feature name here
            </Grid>
            <Grid xs={12} md={6}>
                Some great feature name here
            </Grid>
            <Grid xs={12} md={6}>
                Some great feature name here
            </Grid>
            <Grid xs={12} md={6}>
                Some great feature name here
            </Grid>
            <Grid xs={12} md={6}>
                Some great feature name here
            </Grid>
            <Grid xs={12} md={6}>
                Some great feature name here
            </Grid>
        </Grid>
    )
    let priceTable = (
        <Grid container spacing={2} margin={2}>
            <Grid xs={12}>
                <Typography>
                    With supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </Typography>
            </Grid>
            <Grid xs={12} md={6}>
                Some great feature name here
            </Grid>
            <Grid xs={12} md={6}>
                Some great feature name here
            </Grid>
            <Grid xs={12} md={6}>
                Some great feature name here
            </Grid>
            <Grid xs={12} md={6}>
                Some great feature name here
            </Grid>
            <Grid xs={12} md={6}>
                Some great feature name here
            </Grid>
            <Grid xs={12} md={6}>
                Some great feature name here
            </Grid>
            <Grid xs={12} md={6}>
                Some great feature name here
            </Grid>
            <Grid xs={12} md={6}>
                Some great feature name here
            </Grid>
            <Grid xs={12} md={6}>
                Some great feature name here
            </Grid>
        </Grid>
    )
    const tapsArray = [
        {
            tabHead: "description",
            panel: description,
        },
        {
            tabHead: "price",
            panel: priceTable,
        },
    ];

    let imageOne = (
        <div className={classes.imageWrapper}>
            <div style={{ position: 'relative', height: '400px' }}>
                {loadingData ? <Skeleton variant="rectangular" width={"100%"} height={"100%"} /> :
                    <Image
                        alt="Mountains"
                        src={'/big1.jpg'}
                        fill
                        sizes="(min-width: 808px) 50vw, 100vw"
                        style={{
                            transition: "all 0.8s",
                            objectFit: 'fill', // cover, contain, none
                        }}
                    />}
            </div>
        </div>
    )
    let imageTwo = (
        <div className={classes.imageWrapper}>
            <div style={{ position: 'relative', height: '400px' }}>
                {loadingData ? <Skeleton variant="rectangular" width={"100%"} height={"100%"} /> :
                    <Image
                        alt="Mountains"
                        src={'/clock.png'}
                        fill
                        sizes="(min-width: 808px) 50vw, 100vw"
                        style={{
                            transition: "all 0.8s",
                            objectFit: 'fill', // cover, contain, none
                        }}
                    />
                }
            </div>
        </div>
    )
    const imagesArray = [
        {
            tabHead: <Image
                alt="Mountains"
                src={'/big1.jpg'}
                width={90}
                height={90}
            />,
            panel: imageOne,
        },
        {
            tabHead: <Image
                alt="Mountains"
                src={'/clock.png'}
                width={90}
                height={90}
            />,
            panel: imageTwo,
        },
        {
            tabHead: <Image
                alt="Mountains"
                src={'/clock.png'}
                width={90}
                height={90}
            />,
            panel: imageTwo,
        },
        {
            tabHead: <Image
                alt="Mountains"
                src={'/clock.png'}
                width={90}
                height={90}
            />,
            panel: imageTwo,
        },
        {
            tabHead: <Image
                alt="Mountains"
                src={'/clock.png'}
                width={90}
                height={90}
            />,
            panel: imageTwo,
        },
    ];

    return (
        <Layout>
            <NextBreadcrumb />
            <Root maxWidth="xl">
                <Stack direction={"column"} spacing={5} useFlexGap>
                    <Grid container spacing={3}>
                        <Grid xs={12} md={6}>
                            <CustomTabImages tapDetails={imagesArray} />
                        </Grid>
                        <Grid xs={12} md={6}>
                            <Box>
                                <Grid container spacing={2}>
                                    <Grid xs={12}>
                                        <Typography variant='h5'>{data?.product.name}</Typography>
                                    </Grid>

                                    <Grid xs={12} md={6}>
                                        <FormControl size="small" fullWidth>
                                            <InputLabel id="demo-select-small-label">Age</InputLabel>
                                            <Select
                                                labelId="demo-select-small-label"
                                                id="demo-select-small"
                                                value={10}
                                                label="Age"
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
                                    </Grid>
                                    <Grid xs={12} md={6}>
                                        <FormControl size="small" fullWidth>
                                            <InputLabel id="demo-select-small-label">Age</InputLabel>
                                            <Select
                                                labelId="demo-select-small-label"
                                                id="demo-select-small"
                                                value={10}
                                                label="Age"
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
                                    </Grid>
                                    <Grid xs={12} md={6}>
                                        <FormControl size="small" fullWidth>
                                            <InputLabel id="demo-select-small-label">Age</InputLabel>
                                            <Select
                                                labelId="demo-select-small-label"
                                                id="demo-select-small"
                                                value={10}
                                                label="Age"
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
                                    </Grid>
                                    <Grid xs={12} md={6}>
                                        <FormControl size="small" fullWidth>
                                            <InputLabel id="demo-select-small-label">Age</InputLabel>
                                            <Select
                                                labelId="demo-select-small-label"
                                                id="demo-select-small"
                                                value={10}
                                                label="Age"
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
                                    </Grid>
                                    <Grid xs={12} md={6}>
                                        <FormControl size="small" fullWidth>
                                            <InputLabel id="demo-select-small-label">Age</InputLabel>
                                            <Select
                                                labelId="demo-select-small-label"
                                                id="demo-select-small"
                                                value={10}
                                                label="Age"
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
                                    </Grid>
                                    <Grid xs={12} md={6}>
                                        <FormControl size="small" fullWidth>
                                            <InputLabel id="demo-select-small-label">Age</InputLabel>
                                            <Select
                                                labelId="demo-select-small-label"
                                                id="demo-select-small"
                                                value={10}
                                                label="Age"
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
                                    </Grid>

                                </Grid>
                            </Box>
                            <Divider variant="middle" sx={{ my: 2 }} />
                            <Stack direction={"row"} spacing={2} useFlexGap>
                                <Typography variant='h5' className={classes.text}>Total :</Typography>
                                <Typography variant='h5'>450</Typography>
                            </Stack>
                            <Stack direction={"row"} spacing={2} useFlexGap>
                                <Button component="label" variant="contained" startIcon={<CloudUpload />}>
                                    Upload file
                                    <VisuallyHiddenInput type="file" />
                                </Button>
                                <Typography variant='h5'>450</Typography>
                            </Stack>
                        </Grid>
                    </Grid>

                    <Grid container spacing={3}>
                        <Grid xs={12} md={9}>
                            <Box sx={{ width: '100%' }}>
                                <CustomTab tapDetails={tapsArray} />
                            </Box>
                        </Grid>
                        <Grid xs={12} md={3}>
                            <Similar />
                        </Grid>
                    </Grid>
                </Stack>
            </Root>
        </Layout>
    )
}

export default Page


// <Stack Stack direction = { "column"} spacing = { 2} useFlexGap >
//                             <Typography variant='h5' color={"text.primary"}>
//                                 Smart Watch for Men Women, 2022 Fitness Tracker 1.69 Touch Screen and Waterproof, Android OS
//                             </Typography>
//                             <Stack
//                                 direction="row"
//                                 divider={<Divider orientation="vertical" flexItem />}
//                                 spacing={2}
//                             >
//                                 <Rating name="size-small" defaultValue={2} />
//                                 <Typography>154 orders</Typography>
//                                 <Typography>In stock</Typography>
//                             </Stack>
//                             <Typography variant='h5' color={"text.primary"}>
//                                 $75.00 /per box
//                             </Typography>
//                             <Typography>Modern look and quality demo item Smartwatch Fitness
//                                 Watch 25 Sports IP68 is a streetwear-inspired collection that
//                                 continues to break away from the conventions of mainstream fashion.
//                                 Made in Italy, these black and brown for men.
//                             </Typography>
//                             <Grid container spacing={1}>
//                                 <Grid xs={4}>Type:</Grid>
//                                 <Grid xs={8}>Regular</Grid>
//                                 <Grid xs={4}>Type:</Grid>
//                                 <Grid xs={8}>Regular</Grid>
//                                 <Grid xs={4}>Type:</Grid>
//                                 <Grid xs={8}>Regular</Grid>
//                                 <Grid xs={4}>Type:</Grid>
//                                 <Grid xs={8}>Regular</Grid>
//                                 <Grid xs={4}>Type:</Grid>
//                                 <Grid xs={8}>Regular</Grid>
//                             </Grid>
//                             <Divider />
//                             <Stack direction={"row"} spacing={2} useFlexGap>
//                                 <FormControl sx={{ minWidth: 120 }} size="small">
//                                     <InputLabel id="demo-select-small-label">Age</InputLabel>
//                                     <Select
//                                         labelId="demo-select-small-label"
//                                         id="demo-select-small"
//                                         // value={age}
//                                         label="Age"
//                                         variant='outlined'
//                                     // onChange={handleChange}
//                                     >
//                                         <MenuItem value="">
//                                             <em>None</em>
//                                         </MenuItem>
//                                         <MenuItem value={10}>Ten</MenuItem>
//                                         <MenuItem value={20}>Twenty</MenuItem>
//                                         <MenuItem value={30}>Thirty</MenuItem>
//                                     </Select>
//                                 </FormControl>
//                                 <TextField
//                                     label="Size"
//                                     id="outlined-size-small"
//                                     defaultValue="Small"
//                                     size="small"
//                                 />
//                             </Stack>
//                             <Stack direction={"row"} spacing={2} useFlexGap>
//                                 <Button variant="contained">Buy now</Button>
//                                 <Button variant="contained">Contained</Button>
//                                 <Button variant="outlined">Outlined</Button>
//                             </Stack>
//                         </Stack >