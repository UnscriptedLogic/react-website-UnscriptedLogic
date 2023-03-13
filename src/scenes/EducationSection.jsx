import React from "react";
import EducationCard from "../components/EducationCard";
import { Container, Box } from "@mui/material";
import tpLogo from "/tpLogo.jpg";
import iteLogo from "/iteLogo.jpg";

const EducationSection = () => {
  return (
    <Container>
      <Box
        sx={{
          backgroundColor: "#323232",
          padding: "2em",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "15px",
        }}
      >
        <EducationCard
          name="Temasek Polytechnic"
          study="Diploma of Education, Information Technology"
          studyRemarks="2.54 GPA"
          year="2021 - 2024"
          status="Current"
          icon={tpLogo}
        ></EducationCard>
        <EducationCard
          name="Institute of Technical Education"
          study="Diploma of Civil and Structural Engineering"
          studyRemarks="3.94 GPA"
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
