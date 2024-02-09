"use client"
import { useTheme } from '@mui/material'
import React from 'react'
import { Bars } from 'react-loader-spinner'

function Loading() {
    const theme = useTheme();
    // type User = { name: string, age: number }
    // type Re <T>= {[key:string]: T}

    // type Ha = Record<string, string | number>


    // const user: User&Re = {
    //     name: "HAS",
    //     age: 121,

    // }

    // user.height = 120

    return (
        <div style={{ height: "100%", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <h1>Loading .. .. . . . .. . . . ....... </h1>
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





