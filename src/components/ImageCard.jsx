import React from "react";
import { Container, Box, Typography } from "@mui/material";

const ImageCard = ({
  image,
  height = "200px",
  width = "100%",
  imageHeight = "600px",
  imageWidth = "auto",
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
        height={imageHeight}
        width={imageWidth}
        style={{
          flexShrink: "0",
          minWidth: "100%",
          minHeight: "100%",
          objectFit: "cover",
          transform: `translate(${translateX}, ${translateY})`,
        }}
      />
    </Box>
  );
};

export default ImageCard;
