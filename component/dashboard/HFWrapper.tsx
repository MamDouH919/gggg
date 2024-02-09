import { styled } from "@mui/material/styles";
import React from "react";

const Root = styled("div")(({ theme }) => ({
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const HFWrapper = () => {
  return <Root />;
};

export default HFWrapper;
