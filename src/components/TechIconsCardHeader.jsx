import React from "react";
import SubmissionTooltip from "./SubmissionTooltip";
import { Box, Typography, Avatar, AvatarGroup, Tooltip } from "@mui/material";

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
            <Tooltip
              title={
                <>
                  <SubmissionTooltip
                    icon={item.icon}
                    name={item.name}
                    desc={item.desc}
                  ></SubmissionTooltip>
                </>
              }
              arrow
              componentsProps={{
                tooltip: {
                  sx: {
                    bgcolor: "#0c0c0c",
                  },
                },
              }}
            >
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
            </Tooltip>
          );
        })}
      </AvatarGroup>
    </Box>
  );
};

export default TechIconsCardHeader;
