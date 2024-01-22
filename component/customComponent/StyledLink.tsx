'use client'

/*

NavLink: by default the active class is added when the href matches the start of the URL pathname.
Use the exact property to change it to an exact match with the whole URL pathname.

*/
import Link from 'next/link'
import { styled } from "@mui/material/styles";

const Root = styled(Link)(({ theme }) => ({
    // background: theme.palette.background.default,
    textDecoration: "none",
    color: theme.palette.text.primary,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "16px",
    textTransform: "capitalize",
    margin: theme.spacing(0, 1),
    transition: "all 0.2s",
    [`&:hover`]: {
        textDecoration: "underline",
        color: theme.palette.primary.dark
    },
}));


const StyledLink = ({ href, children }: any) => {
    return (
        <Root href={href}>
            {children}
        </Root>
    )
}

export default StyledLink;