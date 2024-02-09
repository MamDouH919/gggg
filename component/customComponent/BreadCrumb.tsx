// /components/NextBreadcrumb.tsx
'use client'

import React from 'react'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Breadcrumbs, Typography } from '@mui/material'
import { NavigateNext } from '@mui/icons-material'
import StyledLink from './StyledLink'
import { styled } from "@mui/material/styles";

interface BreadCrumbNames {
    products?: string;
}

const BreadCrumbNames = {
    products: "products"
}

const PREFIX = "NavLink";
const classes = {
    list: `${PREFIX}-list`,
};

const Root = styled("div")(({ theme }) => ({
    marginBottom: theme.spacing(2),
    [`& .${classes.list}`]: {
        [`& ol`]: {
            height: "100%"
        },
    },
}));

const NextBreadcrumb = () => {
    const paths = usePathname()
    const pathNames = paths.split('/').filter(path => path)

    return (
        <Root>
            <Breadcrumbs
                separator={<NavigateNext fontSize="small" />}
                aria-label="breadcrumb"
                sx={{ height: "48px" }}
                className={classes.list}
            >
                <StyledLink href={'/'}>home page</StyledLink>
                {
                    pathNames.map((link: string, index) => {
                        return index !== pathNames.length - 1 ? (
                            <StyledLink key={index} color="inherit" href={`/${link}`} >
                                Products
                            </StyledLink>
                        ) : (
                            <Typography key={index} color="text.primary" fontSize="16px">
                                {Number(link) ? "details" : link}
                            </Typography>
                        )
                    })
                }
            </Breadcrumbs>
        </Root>

    )
}

export default NextBreadcrumb