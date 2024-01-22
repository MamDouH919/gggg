import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import React from 'react'

interface IFormInput {
  name: string;
  control: any;
  label: string;
}

function Categories(props: { name: string, image: string, alt: string }) {
  const { name, image, alt } = props
  return (
    <Stack alignItems={"center"} spacing={2} useFlexGap>
      <Box bgcolor={"white"} sx={{ height: 100, width: 100, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Image src={image} alt={alt} width={70} height={70} />
      </Box>
      <Typography>
        {name}
      </Typography>
    </Stack>
  )
}

export default Categories