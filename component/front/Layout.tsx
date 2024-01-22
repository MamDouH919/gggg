import React from 'react'
import Navbar from './Navbar'
import Box from '@mui/material/Box'

const Layout = (
    {
        children,
    }: {
        children: React.ReactNode
    }
) => {
    return (
        <>
            <Navbar />
            <Box
                // sx={{ marginTop: 5 }}
            >
                {children}
            </Box>
        </>
    )
}

export default Layout