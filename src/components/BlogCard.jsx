import React from "react";
import { Box, Typography } from "@mui/material";
import zIndex from "@mui/material/styles/zIndex";

export class CardTag {
  constructor(title = "", color = "white", bgColour = "") {
    this.title = title;
    this.color = color;
    this.bgColour = bgColour;
  }
}

const BlogCard = ({
  header = "",
  headerColour = "white",
  color = "#3c3c4f",
  cardWidth,
  cornerSize = "10px",
  padding = "12px",
  borderThiccness = "0px",
  borderColor = "black",
  cardTags = [],
  children,
  sx,
}) => {
  return (
    <Box sx={sx}>
      {header != "" ? (
        <Typography
          variant="body4"
          color={headerColour}
          fontWeight="400"
          fontSize="35px"
        >
          {header}
        </Typography>
      ) : null}
      {cardTags.length > 0 ? (
        <Box display="flex" marginBottom="-14px" marginLeft="20px">
          {cardTags.map((item, index) => {
            return (
              <Typography
                marginLeft="-5px"
                variant="body4"
                color={item.color}
                fontWeight="400"
                fontSize="15px"
                sx={{
                  position: "relative",
                  bgcolor: item.bgColour != "" ? item.bgColour : borderColor,
                  padding: "10px",
                  paddingTop: "2px",
                  paddingBottom: "15px",
                  borderRadius: cornerSize,
                  zIndex: cardTags.length - index,
                  boxShadow: "0px 0px 5px black",
                }}
              >
                {item.title}
              </Typography>
            );
          })}
        </Box>
      ) : null}
      <Box
        position="relative"
        zIndex={cardTags.length + 1}
        bgcolor={color}
        borderRadius={cornerSize}
        padding={padding}
        width={cardWidth}
        border={`solid ${borderThiccness} ${borderColor}`}
        sx={{
          boxShadow: "0px 0px 7px",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default BlogCard;
