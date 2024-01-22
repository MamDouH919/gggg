import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './stylesBanner.css';

// import required modules
import { Navigation } from 'swiper/modules';
import Image from 'next/image';

export default function BannerSwiper() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div style={{ width: "100%", height: "400px" }}>
                        <Image
                            alt='Mountains'
                            src='/ddd.png'
                            layout='fill'
                            objectFit='fill'
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{ width: "100%", height: "400px" }}>
                        <Image
                            alt='Mountains'
                            src='/ddd.png'
                            layout='fill'
                            objectFit='fill'
                        />
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
