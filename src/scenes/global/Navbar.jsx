import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Typography, Divider } from "@mui/material";

const Navbar = () => {
  const navigate = useNavigate();

  const changePage = (pageName) => {
    navigate(`/${pageName}`);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      gap="10px"
      padding="10px"
      sx={{ backgroundColor: "black" }}
    >
      <Button variant="text" onClick={() => changePage("gamedev")}>
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
      <Button variant="text" onClick={() => changePage("webdev")} disabled>
        <Typography variant="body3" color="#efefef">
          Web Dev
        </Typography>
      </Button>
    </Box>
  );
};

export default Navbar;
