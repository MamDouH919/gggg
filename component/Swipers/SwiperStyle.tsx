import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import { styled } from "@mui/material/styles";
import { Navigation } from 'swiper/modules';
import Image from 'next/image';

interface InputProps {
    swipearData: any,
    slidesPerView: number,
    breakpoints: any,
    className: string
}


const PREFIX = "Banner";
const classes = {
    tabs: `${PREFIX}-tabs`,
    category: `${PREFIX}-category`,
    slide: `${PREFIX}-slide`,
};
const Root = styled("div")(({ theme }) => ({
    height: "100%",
    [`& .swiper`]: {
        width: "100%",
        height: "100%",
        marginLeft: "auto",
        marginRight: "auto",
    },
    [`& .swiper-slide`]: {
        textAlign: "center",
        fontSize: "18px",
        background: "transparent !important",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    [`& .swiper-button-prev`]: {
        [`&::after`]: {
            color: theme.palette.primary.main
        },
    },
    [`& .swiper-button-next`]: {
        [`&::after`]: {
            color: theme.palette.primary.main
        },
    },
}));

export default function SwiperStyle(props: InputProps) {
    const { swipearData, slidesPerView, breakpoints, className } = props
    return (
        <Root className={className}>
            <Swiper
                slidesPerView={slidesPerView ? slidesPerView : 1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={swipearData && swipearData.length > 1 ? true : false}
                modules={[Navigation]}
                className="mySwiper"
                breakpoints={breakpoints}
            >
                {swipearData.map((e: any, i: any) =>
                    <SwiperSlide key={i}>
                        {e.slide}
                    </SwiperSlide>
                )}
            </Swiper>
        </Root>
    );
}
