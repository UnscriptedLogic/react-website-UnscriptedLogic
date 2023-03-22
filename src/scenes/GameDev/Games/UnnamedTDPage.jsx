import React from "react";
import { Container, Box, Typography } from "@mui/material";
import { unnamedTDIcon, ImageCard } from "../../../ImportRoutes";

const UnnamedTDPage = () => {
  return (
    <Container maxWidth="md">
      <ImageCard image={unnamedTDIcon} />
    </Container>
  );
};

export default UnnamedTDPage;
