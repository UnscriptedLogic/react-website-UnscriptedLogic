import React from "react";
import { Box } from "@mui/material";

const BlogCard = ({
  color = "#3c3c4f",
  cardWidth,
  cornerSize = "10px",
  padding = "12px",
  borderThiccness = "0px",
  borderColor = "black",
  children,
}) => {
  return (
    <Box
      bgcolor={color}
      borderRadius={cornerSize}
      padding={padding}
      width={cardWidth}
      border={`solid ${borderThiccness} ${borderColor}`}
      sx={{
        boxShadow: "5px 5px 5px",
      }}
    >
      {children}
    </Box>
  );
};

export default BlogCard;
