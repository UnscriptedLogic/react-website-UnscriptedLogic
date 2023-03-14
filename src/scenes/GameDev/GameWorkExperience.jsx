import React from "react";
import EducationCard from "../../components/EducationCard";
import { Container, Box, Typography, Divider } from "@mui/material";
import tpLogo from "/tpLogo.jpg";
import iteLogo from "/iteLogo.jpg";

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
