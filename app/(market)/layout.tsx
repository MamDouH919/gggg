import React, { Suspense } from 'react'
import Navbar from '../../component/front/Navbar'
import Box from '@mui/material/Box'
// import { getClient } from '@/lib/client';
import { CategoriesDocument } from '@/graphql/categories.generated';
import Loading from './loading';
import Footer from '@/component/front/Footer';
const Layout = async (
    {
        children,
    }: {
        children: React.ReactNode
    }
) => {
    // const { data, networkStatus } = await getClient().query({
    //     query: CategoriesDocument,
    //     variables: {
    //         "limit": 20,
    //         "page": 1
    //     }
    // });

    return (
        <Box display={"flex"} flexDirection={"column"} height={"100%"}>
            <Navbar />
            <Box
                sx={{ marginTop: 5, marginBottom: 5, flexGrow: 1 }}
            >
                <Suspense fallback={<Loading />}>
                    {children}
                </Suspense>
            </Box>
            <Footer />
        </Box>
    )
}

export default Layout