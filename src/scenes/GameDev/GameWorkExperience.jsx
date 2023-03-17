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
          name="Looking for Student Internship"
          study="Game Developer Internship"
          studyRemarks="a self-secured internship with approval from the school"
          year="2023 - ?"
          status="Currently looking for an internship"
        ></EducationCard>
      </Box>
    </Container>
  );
};

export default GameWorkExperience;
