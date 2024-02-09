"use client"
import { Box, Divider, Paper, Rating, Skeleton, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { styled } from "@mui/material/styles";
import SwiperStyle from '../Swipers/SwiperStyle';
import Link from 'next/link';
import Image from 'next/image';
import { useCategoriesQuery } from '@/graphql/categories.generated';

const PREFIX = "SwipearSection";
const classes = {
    title: `${PREFIX}-title`,
    imageTitle: `${PREFIX}-imageTitle`,
};
const Root = styled("div")(({ theme }) => ({
    [`& .${classes.title}`]: {
        color: theme.palette.primary.main
    },
    [`& .${classes.imageTitle}`]: {

        position: "absolute",
        bottom: 20,
        width: "100%",
        padding: theme.spacing(1, 0),
        color: theme.palette.primary.main,
        textTransform: "capitalize"
    },
}));

function ProductsSection() {
    const [categories, setCategories] = useState([
        {
            slide: <Skeleton variant="rounded" width={250} height={300} />
        },
        {
            slide: <Skeleton variant="rounded" width={250} height={300} />
        },
        {
            slide: <Skeleton variant="rounded" width={250} height={300} />
        },
        {
            slide: <Skeleton variant="rounded" width={250} height={300} />
        },
    ])
    const { data, error, loading } = useCategoriesQuery({
        fetchPolicy: "network-only",
        variables: {
            limit: 6,
            page: 1
        },
        onCompleted: (data) => {
            const categories = data.categories.data
            const slides: React.SetStateAction<{ slide: React.JSX.Element; }[]> = []
            categories.map((e: any) => slides.push(
                {
                    slide:
                        <Stack alignItems={"flex-start"}>
                            <img
                                alt="Mountains"
                                src={e.image?.filePath}
                                sizes="100vw"
                                width={0}
                                height={0}
                                style={{
                                    height: "250px",// cover, contain, none
                                    width: "100%",
                                    objectFit: "contain"
                                }}
                            />
                            <Rating />
                            <Typography>Sujata SuperMix SM Mixer</Typography>
                            <Typography>$82.00</Typography>
                        </Stack>
                }
            ))
            setCategories(slides)
        }
    })



    return (
        <Root>
            <Divider textAlign="left" sx={{ mb: 3 }}>
                <Typography variant='h4' className={classes.title}>
                    LATEST PRODUCTS
                </Typography>
            </Divider>
            <SwiperStyle
                className=''
                swipearData={categories}
                slidesPerView={4}
                breakpoints={{
                    350: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 0,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 0,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 0,
                    },
                }}
            />
        </Root>
    )
}

export default ProductsSection