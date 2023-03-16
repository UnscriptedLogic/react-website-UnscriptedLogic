import React from "react";
import { Box, Typography, Avatar, AvatarGroup } from "@mui/material";

const TechIconsCardHeader = ({ techUsed }) => {
  return (
    <Box
      position="absolute"
      top="0%"
      width="98%"
      display="flex"
      justifyContent="end"
      //   bgcolor="white"
      padding="5px 0 5px 0"
    >
      <AvatarGroup>
        {techUsed.map((item) => {
          return (
            <Avatar
              src={item.icon}
              sx={{
                height: "30px",
                width: "30px",
                "&.MuiAvatar-root": {
                  border: `2px solid ${item.color}`,
                },
                filter: "brightness(65%)",
                transition: "filter .5s",
                "&:hover": {
                  filter: "brightness(100%)",
                },
              }}
            ></Avatar>
          );
        })}
      </AvatarGroup>
    </Box>
  );
};

export default TechIconsCardHeader;