import React from "react";
import { Container, Box, Typography } from "@mui/material";

export const MediaType = {
  image: "image",
  video: "video",
};

const BlogMedia = ({
  mediaType,
  src,
  caption,
  height = "200px",
  width,
  borderRadius = "10px",
  onClicked,
  sx,
}) => {
  return (
    <figure style={sx}>
      <img
        src={src}
        height={height}
        width={width}
        style={{ borderRadius: "10px", boxShadow: "0 0 3px" }}
        onClick={onClicked}
      />
      {caption != null ? (
        <figcaption
          style={{
            fontStyle: "italic",
            lineHeight: "15px",
            fontSize: "10px",
            marginTop: "-1px",
          }}
        >
          <Typography variant="body4" color="#bfbfcf">
            {caption}
          </Typography>
        </figcaption>
      ) : null}
    </figure>
  );
};

export default BlogMedia;
