import * as React from 'react';

import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { Box, Button, Card, CardContent, Typography, styled, useTheme } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

interface InputProps {
    img: string | undefined,
    name: string,
    id: number,
}


const PREFIX = "ProductItem";
const classes = {
    imageWrapper: `${PREFIX}-imageWrapper`,
    time: `${PREFIX}-time`,
    text: `${PREFIX}-text`,
};
const Root = styled(Card)(({ theme }) => ({
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

export default function ProductCard(props: InputProps) {
    const { img, name, id } = props
    const theme = useTheme()

    return (
        <Card sx={{ width: "100%", boxShadow: 'lg' }}>

            <div >
                {/* <Image
                        alt='product'
                        sizes='100vh'
                        height={0}
                        width={0}
                        style={{
                            height: "100%",
                            width: "100%"
                        }}
                        /> */}
                <img
                    src={img ? img : '/public/product-not-available.png'}
                    srcSet={img ? img : '/public/product-not-available.png'}
                    // src="https://images.unsplash.com/photo-1593121925328-369cc8459c08?auto=format&fit=crop&w=286"
                    // srcSet="https://images.unsplash.com/photo-1593121925328-369cc8459c08?auto=format&fit=crop&w=286&dpr=2 2x"
                    loading="lazy"
                    alt=""
                />
            </div>

            <CardContent>
                <Typography>{name}</Typography>
                <Link
                    href={`/products/${id}`}
                >
                    Super Rockez A400
                </Link>

                <Typography

                    sx={{ mt: 1, fontWeight: 'xl' }}

                >
                    2,900 THB
                </Typography>
                <Typography >
                    (Only <b>7</b> left in stock!)
                </Typography>
            </CardContent>

            <Button>add to cart</Button>
        </Card>
    );
}