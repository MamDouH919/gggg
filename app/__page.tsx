import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Banner from '@/component/front/Banner';
import Offers from '@/component/front/Offers';
import Layout from '@/app/(market)/layout';
import Categories from '@/component/front/Categories';
import { CategoriesDocument } from '@/graphql/categories.generated';

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

  {/* <Box mb={5}> */ }
  {/* <Banner_test /> */ }
  {/* </Box> */ }

  return (
    <Container maxWidth="xl">
      <Stack direction={"column"} spacing={5} useFlexGap>
        {/* <Banner categories={data} /> */}
        <Stack direction={"row"} spacing={3} useFlexGap flexWrap={"wrap"} justifyContent={"space-around"}>
          {categories.map((e, i) => <Categories name={e.name} alt={e.alt} image={e.image} key={i} />)}
        </Stack>
        <Offers />
      </Stack>
    </Container>
  )
}
