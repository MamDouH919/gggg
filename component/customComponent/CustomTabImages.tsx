import * as React from "react";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import { Box, Tab, Tabs } from "@mui/material";

const StyledBox = styled(Box)(({ theme }) => ({
  // backgroundColor: "white",
  display: "flex",
  justifyContent: "center",
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
    // style={{margin: "0 4px"}}
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

export default function CustomTabImages(props: any) {
  const { tapDetails, hashKeys, settings, val } = props;

  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    setValue(val)
  }, [val])

  const handleChange = (event: any, newValue: number) => {
    setValue(newValue);
  };

  const ref = React.useRef();

  return (
    <Box sx={{ width: "100%" }}>
      {tapDetails.map((i: any, index: number) => (
        <TabPanel key={index} value={value} index={index} >
          {i.panel}
        </TabPanel>
      ))}
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
          sx={{
            "& button": {
              padding: 0.5,
              m: 0.5,
              border: "1px solid #dee2e6"
            }
          }}
          TabIndicatorProps={{
            sx: {
              height: 0,
            }
          }}
        >
          {tapDetails.map((tab: any, index: number) => {
            return (
              <Tab
                key={index}
                label={tab.tabHead}
                {...a11yProps(index)}
                iconPosition="start"
              />
            );
          })}
        </Tabs>
      </StyledBox>

    </Box>
  );
}
