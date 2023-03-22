import React from "react";
import { EducationCard } from "../ImportRoutes";
import { Container, Box, Typography } from "@mui/material";
import tpLogo from "/tpLogo.jpg";
import iteLogo from "/iteLogo.jpg";

const EducationSection = () => {
  return (
    <Container>
      <Box
        sx={{
          backgroundColor: "#323232",
          padding: "2em 1em 1em 1em",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <Typography variant="h5" color="white">
          Education
        </Typography>
        <EducationCard
          name="Temasek Polytechnic"
          study="Diploma in Information Technology"
          studyRemarks="2.42 CGPA"
          year="2021 - 2024"
          status="Current"
          icon={tpLogo}
        ></EducationCard>
        <EducationCard
          name="Institute of Technical Education"
          study="Diploma in Civil and Structural Engineering and Design"
          studyRemarks="3.94 CGPA"
          year="2019 - 2021"
          status="Graduated"
          icon={iteLogo}
        ></EducationCard>
        <EducationCard
          name="Bedok Town/Ping Yi Secondary School"
          study="GCE 'N' Levels"
          studyRemarks="11 points"
          year="2015 - 2019"
          status="Graduated"
        ></EducationCard>
      </Box>
    </Container>
  );
};

export default EducationSection;
