import * as React from "react";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import { Box, Tab, Tabs } from "@mui/material";

const StyledBox = styled(Box)(({ theme }) => ({
  borderBottom: "1px solid " + theme.palette.divider,
  // backgroundColor: "white",
  display: "flex",
  justifyContent: "center",
  backgroundColor: theme.palette.background.paper,
}));

function TabPanel(props: any) {
  const { children, value, index, settings, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {(value === index || settings) && <Box>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function CustomTab(props: any) {
  const { tapDetails, hashKeys, settings } = props;

  const [value, setValue] = React.useState(0);

  const handleChange = (event: any, newValue: number) => {
    setValue(newValue);
  };

  const ref = React.useRef();

  return (
    <Box sx={{ width: "100%" }}>
      <StyledBox>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          // centered
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
        >
          {tapDetails.map((tab: any, index: number) => {
            return (
              <Tab
                key={index}
                label={tab.tabHead}
                {...a11yProps(index)}
                iconPosition="start"
                sx={{
                  color: tab.panelFields ? "red" : "",
                }}
              />
            );
          })}
        </Tabs>
      </StyledBox>
      {tapDetails.map((i: any, index: number) => (
        <TabPanel key={index} value={value} index={index} >
          {i.panel}
        </TabPanel>
      ))}
    </Box>
  );
}
