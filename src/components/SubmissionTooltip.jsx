import React from "react";

import {
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  Typography,
  Chip,
  Box,
  Divider,
  Avatar,
} from "@mui/material";

const SubmissionTooltip = ({ icon, name, desc }) => {
  return (
    <Card
      sx={{
        backgroundColor: "rgba(0, 0, 0, 0)",
        boxShadow: "none",
        margin: "4px",
        marginLeft: "-3px",
        marginRight: "-3px",
        padding: "10px",
      }}
    >
      <Box display="flex" alignItems="center" gap="10px">
        <Avatar src={icon}></Avatar>
        <Typography color="white">{name}</Typography>
      </Box>
      <Divider
        sx={{
          borderColor: "#1f1f1f",
          padding: "5px",
        }}
      ></Divider>
      <Typography color="white" fontSize="12px">
        {desc}
      </Typography>
    </Card>
  );
};

export default SubmissionTooltip;
