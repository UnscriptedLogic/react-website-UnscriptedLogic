import React from "react";
import { Container, Box, Typography } from "@mui/material";

const ImageCard = ({
  image,
  height = "200px",
  width = "100%",
  translateX = "0px",
  translateY = "-25%",
}) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      height={height}
      width={width}
      overflow="hidden"
    >
      <img
        src={image}
        height="600px"
        style={{
          transform: `translate(${translateX}, ${translateY})`,
        }}
      />
    </Box>
  );
};

export default ImageCard;
