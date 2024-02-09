import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardMedia from '@mui/material/CardMedia'
import Stack from '@mui/material/Stack'
import React from 'react'
import Image from 'next/image'

function Similar() {
    return (
        <Stack direction={"column"} spacing={3} p={3} useFlexGap sx={{ border: "1px solid #dee2e6" }}>
            <Typography>Similar items</Typography>
            <Stack direction={"row"} spacing={1}>

                <Image src={"/9.jpg"} alt="Live from space album cover" height={90} width={250} />

                <Stack direction={"column"} spacing={2} useFlexGap>
                    <Typography>Wired Gaming Headset Headphone</Typography>
                    <Typography>$45.50</Typography>
                </Stack>
            </Stack>
            <Stack direction={"row"} spacing={1}>
                <Card sx={{ display: 'flex', boxShadow: "none", borderRadius: "4px", border: "1px solid #dee2e6", background: "transparent" }}>
                    <CardMedia
                        component="img"
                        image="/9.jpg"
                        alt="Live from space album cover"
                    />
                </Card>
                <Stack direction={"column"} spacing={2} useFlexGap>
                    <Typography>Wired Gaming Headset Headphone</Typography>
                    <Typography>$45.50</Typography>
                </Stack>
            </Stack>
            <Stack direction={"row"} spacing={1}>
                <Card sx={{ display: 'flex', boxShadow: "none", borderRadius: "4px", border: "1px solid #dee2e6", background: "transparent" }}>
                    <CardMedia
                        component="img"
                        image="/9.jpg"
                        alt="Live from space album cover"
                    />
                </Card>
                <Stack direction={"column"} spacing={2} useFlexGap>
                    <Typography>Wired Gaming Headset Headphone</Typography>
                    <Typography>$45.50</Typography>
                </Stack>
            </Stack>
            <Stack direction={"row"} spacing={1}>
                <Card sx={{ display: 'flex', boxShadow: "none", borderRadius: "4px", border: "1px solid #dee2e6", background: "transparent" }}>
                    <CardMedia
                        component="img"
                        image="/9.jpg"
                        alt="Live from space album cover"
                    />
                </Card>
                <Stack direction={"column"} spacing={2} useFlexGap>
                    <Typography>Wired Gaming Headset Headphone</Typography>
                    <Typography>$45.50</Typography>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default Similar