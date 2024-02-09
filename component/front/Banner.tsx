"use client"
import * as React from 'react';
import { Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Paper, Skeleton, Stack, Typography, useTheme } from '@mui/material';
import { styled } from "@mui/material/styles";
import { hexToRgb } from '../helperFunctions/hexToRgb';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { useCategoriesQuery } from '@/graphql/categories.generated';
import { Remove } from '@mui/icons-material';
import Link from 'next/link';
import StyledLink from '../customComponent/StyledLink';
import Image from 'next/image';
import SwiperStyle from '../Swipers/SwiperStyle';

const PREFIX = "Banner";
const classes = {
    tabs: `${PREFIX}-tabs`,
    category: `${PREFIX}-category`,
    slide: `${PREFIX}-slide`,
    slider: `${PREFIX}-slider`,
    button: `${PREFIX}-button`,
};
const Root = styled("div")(({ theme }) => ({
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
    [`& .${classes.slider}`]: {
        background: theme.palette.primary.light,
        borderRadius: "8px"
    },
    [`& .${classes.slide}`]: {
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        padding: theme.spacing(4),
        width: "100%"
    },
    [`& .${classes.button}`]: {
        width: "150px"
    },
}));


function Banner() {
    const [categories, setCategories] = React.useState([
        {
            slide:
                <Grid container spacing={2} className={classes.slide} >
                    <Grid md={6} xs={12}>
                        <Stack spacing={2} alignItems={"flex-start"} px={3}>
                            <Skeleton variant="rounded" width={250} height={20} />
                            <Stack spacing={1} alignItems={"flex-start"}>
                                <Skeleton variant="rounded" width={200} height={20} />
                                <Skeleton variant="rounded" width={200} height={20} />
                            </Stack>
                            <Skeleton variant="rounded" width={150} height={50} />
                        </Stack>
                    </Grid>
                    <Grid md={6} xs={12}>
                        <Stack spacing={2} alignItems={"flex-start"} px={3}>
                            <Skeleton variant="rounded" width={"100%"} height={300} />
                        </Stack>
                    </Grid>
                </Grid>
        },
    ])

    const { data, error, loading } = useCategoriesQuery({
        fetchPolicy: "network-only",
        variables: {
            limit: 7,
            page: 1
        },
        onCompleted: (data) => {
            const categories = data.categories.data
            const slides: React.SetStateAction<{ slide: React.JSX.Element; }[]> = []
            categories.map((e: any) => slides.push(
                {
                    slide:
                        <Grid container spacing={2} className={classes.slide}>
                            <Grid md={6} xs={12}>
                                <Stack spacing={2} alignItems={"flex-start"} px={3}>
                                    <Typography color={"white"} >
                                        mamdouh
                                    </Typography>
                                    <Typography color={"whitesmoke"}>
                                        ksdfj jskdf jskdf jskd f
                                    </Typography>
                                    <Button variant='contained' className={classes.button}>
                                        shop now
                                    </Button>
                                </Stack>
                            </Grid>
                            <Grid md={6} xs={12}>
                                <Image
                                    alt="Mountains"
                                    src={'/slide.png'}
                                    // src={e.image?.filePath}
                                    sizes="100vw"
                                    width={0}
                                    unoptimized
                                    height={0}
                                    style={{
                                        height: "100%",// cover, contain, none
                                        width: "100%",
                                        // objectFit: "none"
                                    }}
                                />
                            </Grid>
                        </Grid>
                }
            ))
            setCategories(slides)
        }
    })

    const theme = useTheme()

    return (
        <Root>
            <Grid container spacing={2}>
                <Grid xs={12} md={3}>
                    <List
                        sx={{
                            width: '100%',
                            maxHeight: "400px",
                            overflow: "auto",
                            border: `1px solid ${theme.palette.divider}`,
                            borderRadius: "4px",
                            "::-webkit-scrollbar": {
                                display: "none"
                            }
                        }}
                        component="nav"
                        aria-labelledby="nested-list-subheader"
                        subheader={
                            <ListSubheader component="div" id="nested-list-subheader" sx={{ fontSize: "22px" }}>
                                categories
                            </ListSubheader>
                        }
                    >
                        {data ? data?.categories?.data.map((e: any, i: number) => (
                            <StyledLink href={`/products?category=${e.id}`} key={i}>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <Remove />
                                    </ListItemIcon>
                                    <ListItemText primary={e.name} />
                                </ListItemButton>
                            </StyledLink>
                        )) :
                            [1, 2, 3, 4, 5].map((e: any, i: number) => (
                                <ListItem key={i}>
                                    <Skeleton variant="rounded" width={"100%"} height={40} />
                                </ListItem>
                            ))
                        }
                    </List>
                </Grid>
                <Grid xs={12} md={9} height={"100%"}>
                    <SwiperStyle
                        swipearData={categories}
                        slidesPerView={1}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 0,
                            },
                            768: {
                                slidesPerView: 1,
                                spaceBetween: 0,
                            },
                            1024: {
                                slidesPerView: 1,
                                spaceBetween: 0,
                            },
                        }}
                        className={classes.slider}
                    />
                </Grid>
            </Grid>
        </Root >
    );
}


export default Banner