import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  Collapse,
  Typography,
  Box,
  Avatar,
  Divider,
} from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";

const EducationCard = ({ name, study, studyRemarks, year, status, icon }) => {
  return (
    <Card
      sx={{
        width: "100%",
        backgroundColor: "#1c1c1c",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box display="flex" alignItems="center" gap="10px">
        <Avatar src={icon} sx={{ width: "55px", height: "55px" }}></Avatar>
        <Divider
          component="div"
          role="presentation"
          orientation="vertical"
          flexItem
          sx={{
            borderColor: "#2f2f2f",
          }}
        />
        <Box color="#4f4f4f">
          <Box display="flex" gap="5px" alignItems="center">
            <Typography variant="h6" color="#dfdfdf">
              {name}
            </Typography>
            <CircleIcon sx={{ width: "10px" }} />
            <Typography variant="body1" color="#7f7f7f">
              {status}
            </Typography>
          </Box>
          <Box display="flex" gap="5px" alignItems="center">
            <Typography variant="body1" color="#afafaf">
              {study}
            </Typography>
            <CircleIcon sx={{ width: "7px" }} />
            <Typography variant="body1" color="#7f7f7f" fontStyle="italic">
              {studyRemarks}
            </Typography>
          </Box>
          <Typography variant="body2" color="#7f7f7f">
            {year}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};

export default EducationCard;
