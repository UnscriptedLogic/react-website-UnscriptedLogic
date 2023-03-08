import React from "react";
import { Container, Box } from "@mui/material";

const EducationSection = () => {
  return (
    <Container>
      <Box
        sx={{
          height: "20vh",
          backgroundColor: "#545454",
          padding: "5em",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Education and Work Experience
      </Box>
    </Container>
  );
};

export default EducationSection;
