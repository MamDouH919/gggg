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
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "16px",
    textTransform: "capitalize",
    opacity: 0.7,
    margin: theme.spacing(0, 1),
    transition: "all 0.5s",
    [`&:hover`]: {
        opacity: 1,
        color: `${theme.palette.primary.main}!Important`,
        // font: "bold",
        // textDecoration: "underline",
    },
    [`&.${classes.active}`]: {
        opacity: 1,
        color: `${theme.palette.primary.main}!Important`,
    },
}));


export const NavLink = ({ href, exact, children }: any) => {
    const pathname = usePathname()
    const isActive = exact ? pathname === href : pathname.startsWith(href)

    return (
        <Root href={href} className={isActive ? classes.active : " "}>
            <Typography variant='h6'>
                {children}
            </Typography>
        </Root>
    )
}