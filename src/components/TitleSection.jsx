import React from "react";
import { Typography, Box, Container, Divider } from "@mui/material";

const TitleSection = () => {
  return (
    <Container>
      <Box
        sx={{
          height: "50vh",
          backgroundColor: "white",
          padding: "5em",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Logo / About Me
      </Box>
    </Container>
  );
};

export default TitleSection;
