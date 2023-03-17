import React from "react";
import { useNavigate } from "react-router-dom";
import { GetStatusChipColor, GenresToString } from "../GameManager";

import {
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  Typography,
  Chip,
  Box,
  Divider,
} from "@mui/material";

import CircleIcon from "@mui/icons-material/Circle";
import TechIconsCardHeader from "./TechIconsCardHeader";

const MajorGameCard = ({
  image,
  title,
  desc,
  year,
  status,
  genres,
  techUsed,
  blogLink,
}) => {
  const navigateToBlog = (blogName) => {
    const navigate = useNavigate;
    navigate(`/blog:${blogName}`);
  };
  return (
    <Card
      sx={{
        width: 375,
        borderColor: "black",
        ":hover": {
          boxShadow: 20,
          borderColor: "#4f4f4f",
        },
      }}
      variant="outlined"
    >
      <CardActionArea
        onClick={() => {
          navigateToBlog(blogLink);
        }}
      >
        <Box position="relative">
          <CardMedia sx={{ height: 250 }} image={image} />
          <TechIconsCardHeader techUsed={techUsed} />
        </Box>
        <CardContent
          sx={{
            backgroundColor: "#252525",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box
              sx={{
                display: "flex",
                columnGap: "5px",
                marginTop: "-5px",
              }}
            >
              <Typography
                variant="h6"
                component="div"
                color={"white"}
                maxWidth="185px"
                overflow="hidden"
                textOverflow="ellipsis"
                whiteSpace="nowrap"
              >
                {title}
              </Typography>
              <CircleIcon
                sx={{ fontSize: "8px", color: "#5f5f5f", alignSelf: "center" }}
              />
              <Typography
                variant="h6"
                component="div"
                color={"#5f5f5f"}
                fontSize="20px"
                alignSelf="center"
              >
                {year}
              </Typography>
            </Box>
            <Chip
              label={status}
              color="default"
              size="small"
              sx={{
                marginTop: 0.5,
                marginBottom: 0.5,
                fontSize: "10px",
                width: "75px",
                backgroundColor: GetStatusChipColor(status),
              }}
            />
          </Box>
          <Box>
            <Typography
              color={"#7f7f7f"}
              sx={{ fontSize: "13px", marginTop: -0.75 }}
            >
              {GenresToString(genres)}
            </Typography>
            <Divider
              sx={{ borderColor: "#5a5a5a", marginTop: 0.5, marginBottom: 1 }}
            />
            <Typography variant="body3" color={"white"}>
              {desc}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MajorGameCard;
