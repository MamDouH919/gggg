'use client'

/*

NavLink: by default the active class is added when the href matches the start of the URL pathname.
Use the exact property to change it to an exact match with the whole URL pathname.

*/
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { styled } from "@mui/material/styles";
import { Typography } from '@mui/material';

const PREFIX = "NavLink";
const classes = {
    active: `${PREFIX}-active`,
};

const Root = styled(Link)(({ theme }) => ({
    // background: theme.palette.background.default,
    textDecoration: "none",
    color: theme.palette.text.secondary,
    opacity: 0.8,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "16px",
    textTransform: "capitalize",
    margin: theme.spacing(0, 1),
    [`&.${classes.active}`]: {
        color: theme.palette.primary.dark
    },
}));


export const NavLink = ({ href, exact, children }: any) => {
    const pathname = usePathname()
    const isActive = exact ? pathname === href : pathname.startsWith(href)

    return (
        <Root href={href} className={isActive ? classes.active : " "}>
            {/* <Typography color={"text.primary"}> */}
            {children}
            {/* </Typography> */}
        </Root>
    )
}