import React from "react";
import { EducationCard } from "../../ImportRoutes";
import { Container, Box, Typography } from "@mui/material";

const GameWorkExperience = () => {
  return (
    <Container>
      <Box
        sx={{
          backgroundColor: "#292929",
          padding: "2em 1em 1em 1em",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <Typography variant="h5" color="white">
          Work Experience
        </Typography>
        <EducationCard
          name="Smartli Pte Ltd"
          study="Game Developer Internship"
          studyRemarks="a self-secured internship with approval from the school"
          year="26 June 2023 - 24 November 2023"
          status="Working as an intern"
        ></EducationCard>
      </Box>
    </Container>
  );
};

export default GameWorkExperience;
