import "./TabBar.css";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const TabBar = (props) => {
  const { setPage } = props;
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box id="tab" sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          variant="fullWidth"
        >
          <Tab
            onClick={() => {
              setPage("home");
            }}
            label="HOME"
            {...a11yProps(0)}
          />
          <Tab
            onClick={() => {
              setPage("battle");
            }}
            label="BATTLE"
            {...a11yProps(1)}
          />
          <Tab
            onClick={() => {
              setPage("friend");
            }}
            label="FRIENDS"
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>
    </Box>
  );
};

export default TabBar;
