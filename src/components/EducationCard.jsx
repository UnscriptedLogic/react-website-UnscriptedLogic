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
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";

const EducationCard = ({ name, study, studyRemarks, year, status, icon }) => {
  return (
    <Card
      sx={{
        width: "100%",
        backgroundColor: "#3a3a3a",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box display="flex" alignItems="center" gap="10px" padding="17px">
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
          <Box display="flex" gap="1px" alignItems="center">
            <Typography variant="h6" color="#dfdfdf">
              {name}
            </Typography>
            <ArrowRightOutlinedIcon sx={{ width: "25px", height: "25px" }} />
            <Typography variant="body1" color="#7f7f7f">
              {status}
            </Typography>
          </Box>
          <Box display="flex" gap="5px" alignItems="center">
            <Typography variant="body1" color="#afafaf">
              {study}
            </Typography>
            <CircleIcon sx={{ width: "7px" }} />
            <Typography variant="body1" color="#9a9a9a" fontStyle="italic">
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
