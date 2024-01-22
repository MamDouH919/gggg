import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Image from 'next/image';
import { Avatar, Button, Stack } from '@mui/material';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            style={{ position: 'relative', flexGrow: 1 }}
            {...other}
        >
            {value === index && (
                children
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const tabs = ["Automobiles", "Clothes and wear", "Computer and tech", "Tools, equipments", "Tools, equipments", "Tools, equipments", "Tools, equipments"]

export default function CustomTabs({ classes }: { classes: String }) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Stack direction={"row"} spacing={3} useFlexGap>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ mr: "8px" }}
            >
                {tabs.map((tab: String, index: number) => <Tab key={index} label={tab} {...a11yProps(index)} />)}
            </Tabs>
            <TabPanel value={value} index={0}>
                <Image
                    alt='Mountains'
                    src='/ddd.png'
                    layout='fill'
                    objectFit='fill'
                />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Image
                    alt='Mountains'
                    src='/ddd.png'
                    layout='fill'
                    objectFit='fill'
                />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Image
                    alt='Mountains'
                    src='/ddd.png'
                    layout='fill'
                    objectFit='fill'
                />
            </TabPanel>
            <TabPanel value={value} index={3}>
                <Image
                    alt='Mountains'
                    src='/ddd.png'
                    layout='fill'
                    objectFit='fill'
                />
            </TabPanel>
            <TabPanel value={value} index={4}>
                <Image
                    alt='Mountains'
                    src='/ddd.png'
                    layout='fill'
                    objectFit='fill'
                />
            </TabPanel>
            <TabPanel value={value} index={5}>
                <Image
                    alt='Mountains'
                    src='/ddd.png'
                    layout='fill'
                    objectFit='fill'
                />
            </TabPanel>
            <TabPanel value={value} index={6}>
                <Image
                    alt='Mountains'
                    src='/ddd.png'
                    layout='fill'
                    objectFit='fill'
                />
            </TabPanel>
            <Stack direction={"column"} spacing={1} useFlexGap display={{ xs: "none", md: "row" }}>
                <Stack
                    sx={{
                        borderRadius: "6px",
                        background: "#E3F0FF",
                        padding: 2
                    }}
                    direction={"column"}
                    useFlexGap
                    spacing={1}
                >
                    <Stack direction={"row"} spacing={1} useFlexGap alignItems={"center"}>
                        <Avatar></Avatar>
                        <Typography>Hi, user <br />let’s get stated</Typography>
                    </Stack>
                    <Button variant="contained">Join now</Button>
                    <Button variant="contained">Log in</Button>
                </Stack>
                <Stack
                    sx={{
                        borderRadius: "6px",
                        background: "#F38332",
                        padding: 2
                    }}
                    direction={"column"}
                    useFlexGap
                    spacing={1}
                >
                    <Typography whiteSpace={"break-spaces"}>
                        Get US $10 off <br />with a new<br /> supplier
                    </Typography>
                </Stack>
                <Stack
                    sx={{
                        borderRadius: "6px",
                        background: "#55BDC3",
                        padding: 2
                    }}
                    direction={"column"}
                    useFlexGap
                    spacing={1}
                >
                    <Typography>
                        Send quotes with <br /> supplier<br /> preferences
                    </Typography>
                </Stack>
            </Stack>
        </Stack>
    );
}
