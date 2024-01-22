import { getClient } from '@/lib/client';

import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Banner from '@/component/front/Banner';
import Offers from '@/component/front/Offers';
import Layout from '@/component/front/Layout';
import dynamic from 'next/dynamic';
import Banner_test from '@/component/front/Banner_test';
import Categories from '@/component/front/Categories';
import Box from '@mui/material/Box';
import { ProductsDocument } from '@/graphql/products.generated';

const categories = [
  {
    name: " Computers ",
    image: "/clock.png",
    alt: "clock"
  },
  {
    name: " Computers ",
    image: "/clock.png",
    alt: "clock"
  },
  {
    name: " Computers ",
    image: "/clock.png",
    alt: "clock"
  },
  {
    name: " Computers ",
    image: "/clock.png",
    alt: "clock"
  },
  {
    name: " Computers ",
    image: "/clock.png",
    alt: "clock"
  },
  {
    name: " Computers ",
    image: "/clock.png",
    alt: "clock"
  },
  {
    name: " Computers ",
    image: "/clock.png",
    alt: "clock"
  },
  {
    name: " Computers ",
    image: "/clock.png",
    alt: "clock"
  },
]
export default async function Home() {
  const data = await getClient().query({
    query: ProductsDocument,
    variables: {
      "limit": 20,
      "page": 1
    }
  });

  return (
    <Layout>
      {/* <Box mb={5}> */}
      <Banner_test />
      {/* </Box> */}
      <Container maxWidth="xl">
        <Stack direction={"column"} spacing={5} useFlexGap>
          <Banner />
          <Stack direction={"row"} spacing={3} useFlexGap flexWrap={"wrap"} justifyContent={"space-around"}>
            {categories.map((e, i) => <Categories name={e.name} alt={e.alt} image={e.image} key={i} />)}
          </Stack>
          <Offers />
        </Stack>
      </Container>
    </Layout>
  )
}
