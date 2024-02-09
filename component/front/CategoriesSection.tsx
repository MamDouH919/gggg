"use client"
import { Box, Card, CardContent, CardMedia, Divider, Paper, Skeleton, Typography } from '@mui/material'
import React, { useState } from 'react'
import { styled } from "@mui/material/styles";
import SwiperStyle from '../Swipers/SwiperStyle';
import Link from 'next/link';
import Image from 'next/image';
import { useCategoriesQuery } from '@/graphql/categories.generated';
import Grid from '@mui/material/Unstable_Grid2/Grid2';

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

function CategoriesSection() {
    const [categories, setCategories] = useState<Array<{}> | undefined>([])
    const categoriesLoading = [
        {
            slide: <Skeleton variant="rounded" width={"100%"} height={300} />
        },
        {
            slide: <Skeleton variant="rounded" width={"100%"} height={300} />
        },
        {
            slide: <Skeleton variant="rounded" width={"100%"} height={300} />
        },
    ]
    const { data, error, loading } = useCategoriesQuery({
        fetchPolicy: "network-only",
        variables: {
            limit: 6,
            page: 1
        },
        onCompleted: (data) => {
            const categories = data.categories.data
            // const slides: React.SetStateAction<{ slide: React.JSX.Element; }[]> = []
            // categories.map((e: any) => slides.push(
            //     {
            //         slide:
            //             <div style={{ position: "relative" }}>
            //                 <Link href={'/products/1'}>
            //                     <img
            //                         alt="Mountains"
            //                         src={e.image?.filePath}
            //                         sizes="100vw"
            //                         width={0}
            //                         height={0}
            //                         style={{
            //                             height: "250px",// cover, contain, none
            //                             width: "100%",
            //                             objectFit: "contain"
            //                         }}
            //                     />
            //                 </Link>
            //                 <Paper className={classes.imageTitle}>
            //                     {e.name}
            //                 </Paper>
            //             </div>
            //     }
            // ))
            setCategories(categories)
        }
    })

    return (
        <Root>
            <Divider textAlign="left" sx={{ mb: 3 }}>
                <Typography variant='h4' className={classes.title}>
                    All Categories
                </Typography>
            </Divider>
            <Grid container spacing={2}>
                {loading ? categoriesLoading.map((e, i) =>
                    <Grid xs={12} sm={6} md={4} key={i}>
                        {e.slide}
                    </Grid>
                ) :
                    categories?.map((e: any, i) =>
                        <Grid xs={12} sm={6} md={4} key={i}>
                            <Card sx={{ maxWidth: "100%" }}>
                                <CardMedia
                                    sx={{ height: 350, backgroundSize: "contain" }}
                                    image={e.image?.filePath ? e.image.filePath : '/product-not-available.png'}
                                    title={e.name}

                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {e.name}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    )
                }
            </Grid>
        </Root>
    )
}

export default CategoriesSection