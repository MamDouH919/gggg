import Image from 'next/image'
import React from 'react'

function Banner_test() {
    return (
        <div style={{ marginBottom: 40, width: "100%", height: "250px" }}>
            {/* <img src={'/bg.png'} alt='bg' width={"100%"} height={400} /> */}
            {/* <Image src={'/bg.png'} alt='bg' layout='cover' objectFit='fill' /> */}
        </div>
    )
}

export default Banner_test