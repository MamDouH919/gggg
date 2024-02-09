import Banner from '@/component/front/Banner';
import Offers from '@/component/front/Offers';
import Services from '@/component/front/Services';
import CategoriesSection from '@/component/front/CategoriesSection';

import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import React from 'react'
import ProductsSection from '@/component/front/ProductsSection';

async function Page() {
    return (
        <Container maxWidth="lg">
            <Stack direction={"column"} spacing={10}>
                <Banner />
                {/* <Stack direction={"row"} spacing={3} useFlexGap flexWrap={"wrap"} justifyContent={"space-around"}>
                    {categories.map((e, i) => <Categories name={e.name} alt={e.alt} image={e.image} key={i} />)}
                </Stack> */}
                {/* <Offers /> */}
                <Services />
                <CategoriesSection />
                {/* <ProductsSection /> */}
                <div style={{
                    height: 200
                }}>

                </div>
            </Stack>
        </Container>
    )
}

export default Page