import { Typography } from '@mui/material'
import Stack from '@mui/material/Stack'
import React from 'react'
import { TbDeviceDesktopSearch } from 'react-icons/tb';

function NoData() {
    return (
        <Stack spacing={3} alignItems={"center"}>
            <Stack>
                <Typography>
                    No Data Found
                </Typography>
            </Stack>
            <Stack>
                <TbDeviceDesktopSearch size={70} color="gray" />
            </Stack>
        </Stack>
    )
}

export default NoData