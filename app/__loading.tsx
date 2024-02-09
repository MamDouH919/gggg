"use client"
import { useTheme } from '@mui/material'
import React from 'react'
import { Bars } from 'react-loader-spinner'

function Loading() {
    const theme = useTheme()
    return (
        <div style={{ height: "100dvh", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Bars
                height="60"
                width="60"
                color={theme.palette.primary.main}
                ariaLabel="bars-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    )
}

export default Loading