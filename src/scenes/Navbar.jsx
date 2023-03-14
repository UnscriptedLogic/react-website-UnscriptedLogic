import React from "react";
import { Box, Button, Typography, Divider } from "@mui/material";

const Navbar = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      gap="10px"
      padding="10px"
      sx={{ backgroundColor: "black" }}
    >
      <Button variant="text">
        <Typography variant="body3" color="#efefef">
          Game Dev
        </Typography>
      </Button>
      <Divider
        component="div"
        role="presentation"
        orientation="vertical"
        variant="middle"
        flexItem
        sx={{
          borderColor: "#5f5f5f",
        }}
      />
      <Button variant="text" disabled>
        <Typography variant="body3" color="#4f4f4f">
          Web Dev (WIP)
        </Typography>
      </Button>
    </Box>
  );
};

export default Navbar;
