import {
    Collapse,
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    useTheme,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { memo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ExpandMore } from "@mui/icons-material";
import clsx from "clsx";
import { Fragment } from "react";
import HFWrapper from "./HFWrapper";
// import { MdOutlinePendingActions } from "react-icons/md";
// import { CiBarcode } from "react-icons/ci";
// import { VscPackage } from "react-icons/vsc";
// import { Globals } from "../Component/HOC/Classes/Globals";
// import { SecuredNavLink } from "../Component/HOC/CustomComponents/Secured";
// import CreateShipmentInDialog from "../Component/Shipments/CreateShipmentInDialog";
// import Profile from "./NavDrawerProfile";
// import HFWraper from "./WraperHeaderFooter";
// import FooterIcons from "./NavDrawerFooterIcons";

const PREFIX = "NavDrawer";

const classes = {
    root: `${PREFIX}-root`,
    bottomDrawer: `${PREFIX}-bottomDrawer`,
    dialog: `${PREFIX}-dialog`,
    drawer: `${PREFIX}-drawer`,
    drawerPaper: `${PREFIX}-drawerPaper`,
    profile: `${PREFIX}-profile`,
    topList: `${PREFIX}-topList`,
    navLink: `${PREFIX}-navLink`,
    listItemFocus: `${PREFIX}-listItemFocus`,
    outline: `${PREFIX}-outline`,
    nestedListItem: `${PREFIX}-nestedListItem`,
    navIcon: `${PREFIX}-navIcon`,
    navSubItem: `${PREFIX}-navSubItem`,
    renewalStyle: `${PREFIX}-renewalStyle`,
    FooterIcons: `${PREFIX}-FooterIcons`,
    child: `${PREFIX}-child`,
};

const drawerWidth = 248;

// TODO jss-to-styled codemod: The Fragment root was replaced by div. Change the tag if needed.
const Root = styled("div")(({ theme }) => ({
    [`& .${classes.root}`]: {
        display: "flex",
    },
    [`& .${classes.child}`]: {
        position: "relative",
        [`&::before`]: {
            content: "''",
            display: "block",
            position: "absolute",
            zIndex: 1,
            left: "0",
            height: "100%",
            width: "1px",
            opacity: 0.1,
            background: "rgb(229, 234, 242)",
        },
    },

    [`& .${classes.bottomDrawer}`]: {
        [theme.breakpoints.down("sm")]: {
            width: "auto !important",
            height: "100%",
        },
    },

    [`& .${classes.dialog}`]: {
        minWidth: "325px",
    },

    [`& .${classes.drawer}`]: {
        [theme.breakpoints.up("sm")]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },

    [`& .${classes.drawerPaper}`]: {
        zIndex: 1090,
        backgroundColor: theme.palette.background.paper,
        [theme.breakpoints.up("sm")]: {
            width: drawerWidth,
        },
        "& .MuiList-padding": {
            padding: 0,
        },
        // overflow: "hidden"
    },
    [`& .${classes.renewalStyle}`]: {
        top: 48,
        height: "calc(100% - 48px)",
    },

    [`& .${classes.profile}`]: {
        borderBottom: `1px solid ${theme.palette.divider}`,
        "& a": {
            color: theme.palette.text.secondary + "!important",
            textDecoration: "none",
        },
    },

    [`& .${classes.FooterIcons}`]: {
        borderTop: `1px solid ${theme.palette.divider}`,
    },

    [`& .${classes.topList}`]: {
        "&:hover": {
            overflowY: "auto",
        },
        overflow: "hidden",
        height: "100vh",
        "& .MuiListItemIcon-root": {
            minWidth: theme.spacing(4),
        },

        textTransform: "capitalize",
    },

    [`& .${classes.navLink}`]: {
        textDecoration: "none",
        color: theme.palette.text.primary + "!important",
        // fontWeight: "bold",
        // fontSize: "15px",
        // border: `1px solid ${theme.palette.primary.main}`,
        display: "flex",
        // margin: theme.spacing(2, 2, 0, 2),
        // borderRadius: "16px",
        "& svg": {
            color: theme.palette.text.primary + "!important",
        },
        "&:hover": {
            color: theme.palette.primary.main + "!important",
        },
        "& :hover svg": {
            color: theme.palette.primary.main + "!important",
        },
    },

    [`& .${classes.navLink}.active`]: {
        color: `${theme.palette.primary.main}!important`,
        background: theme.palette.background.paper,
        "& svg": {
            color: `${theme.palette.primary.main}!important`,
        },
    },

    [`& .${classes.outline}`]: {
        fontFamily: "Material Icons Outlined",
    },

    // [`& .${classes.nestedListItem}`]: {
    //     paddingLeft: theme.spacing(4),
    // },

    [`& .${classes.navIcon}`]: {
        fontSize: 20,
        color: "inherit",
    },

    [`& .${classes.navSubItem}`]: {
        minWidth: "20px !important",
    },
}));

interface propsInput {
    navDrawer: any,
    handleDrawerClose: any,
    drawerAnchor: any
}

const NavDrawer = (props: propsInput) => {
    const { navDrawer, handleDrawerClose, drawerAnchor } = props;
    let collapseOpened = useRef(true);
    const theme = useTheme();
    const storeNavLinkIndex = (index: any) =>
        localStorage.setItem("activeNavLink", index);

    const [nestedList, setNestedList] = useState({});
    const handleNestedNavLink = (type: any) => {
        storeNavLinkIndex(type);
        setNestedList((prev: any) => ({
            ...prev,
            [type]: !prev[type],
        }));
    };

    const linksList = [
        {
            pathname: "/dashboard",
            exact: true,
            icon: "kkk",
            primary: "dashboard",
        },
        {
            pathname: "/dashboard/alert",
            exact: true,
            icon: "dsk",
            primary: "adminAlert",
            permission: "core.alert.list",
        },

        {
            sectionName: "employees",
            icon: "sdlfk",
            primary: "employees",
            children: [
                {
                    pathname: "/dashboard/employees",
                    exact: true,
                    primary: "employees",
                    permission: "shipping.barcode_batch.create",
                },
                {
                    pathname: "/dashboard/employees/create",
                    exact: true,
                    primary: "createEmployee",
                    permission: "shipping.barcode_batch.create",
                },
            ],
        },
        {
            sectionName: "students",
            icon: "BiBarcodeReader",
            primary: "students",
            children: [
                {
                    pathname: "/dashboard/students",
                    exact: true,
                    primary: "students",
                    permission: "shipping.barcode_batch.create",
                },
                {
                    pathname: "/dashboard/students/create",
                    exact: true,
                    primary: "createStudents",
                    permission: "shipping.barcode_batch.create",
                },
            ],
        },
    ];

    return (
        <Root>

            <Drawer
                className={clsx(classes.drawer, {
                    [classes.bottomDrawer]: navDrawer[drawerAnchor],
                })}
                variant="persistent"
                anchor={drawerAnchor}
                open={navDrawer[drawerAnchor]}
                onClose={() => handleDrawerClose()}
                classes={{
                    paper: clsx(classes.drawerPaper, {
                        [classes.bottomDrawer]: navDrawer[drawerAnchor],
                    }),
                }}
            >
                <HFWrapper />
                <Divider />
                <List className={classes.topList}>
                    {linksList.map((link, index) => {
                        if (!link.children) {
                            return (

                                <ListItem
                                    key={index}
                                    button
                                    onClick={() => {
                                        drawerAnchor === "bottom" && handleDrawerClose();
                                    }}

                                >
                                    <ListItemIcon className={classes.navIcon}>
                                        <link.icon />
                                    </ListItemIcon>
                                    <ListItemText
                                        disableTypography={true}
                                        primary={link.primary}
                                    />
                                </ListItem>

                            );
                        } else {
                            if (
                                // +localStorage.getItem("activeNavLink") === index &&
                                collapseOpened.current
                            ) {
                                // nestedList[index] = true;
                                collapseOpened.current = false;
                            }
                            return (
                                <Fragment key={index}>
                                    <ListItemButton onClick={() => handleNestedNavLink(index)}>
                                        <ListItemIcon>
                                            {/* <link.icon className={classes.navIcon} /> */}
                                        </ListItemIcon>
                                        <ListItemText
                                            disableTypography={true}
                                            primary={link.primary}
                                        />
                                        {/* {nestedList[index] ? (
                                            <ExpandMore />
                                        ) : theme.direction === "ltr" ? (
                                            <ChevronRight />
                                        ) : (
                                            <ChevronLeft />
                                        )} */}
                                    </ListItemButton>
                                    <Collapse
                                        key={index}
                                        // in={nestedList[index] ?? false}
                                        timeout="auto"
                                        unmountOnExit
                                        sx={{ marginLeft: "28px" }}
                                    >
                                        {link.children.map((child, i) => {
                                            return (
                                                // <SecuredNavLink
                                                //     hideLink={child?.hideLink}
                                                //     show={child?.show}
                                                //     to={{ pathname: child.pathname }}
                                                //     activeclassname={classes.listItemFocus}
                                                //     // exact={child.exact}
                                                //     className={clsx(classes.navLink, classes.child)}
                                                //     permission={child.permission}
                                                // >
                                                <ListItem
                                                    className={classes.nestedListItem}
                                                    button
                                                    key={i}
                                                    onClick={() => {
                                                        // child?.action && child.action();
                                                        storeNavLinkIndex(index);
                                                        drawerAnchor === "bottom" &&
                                                            handleDrawerClose();
                                                    }}
                                                >
                                                    {/* <ListItemIcon className={classes.navSubItem}>
                                                        <GoDash />
                                                    </ListItemIcon> */}
                                                    <ListItemText
                                                        disableTypography={true}
                                                        primary={child.primary}
                                                    />
                                                </ListItem>
                                                // </SecuredNavLink>
                                            );
                                        })}
                                    </Collapse>
                                </Fragment>
                            )

                        }
                    })}
                </List>
            </Drawer>
        </Root>
    );
};

export default memo(NavDrawer);
