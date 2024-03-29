import React from "react";
import SubmissionTooltip from "./SubmissionTooltip";
import { GenresToString } from "../GameManager";

import {
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  Typography,
  Box,
  Chip,
  Tooltip,
} from "@mui/material";

import CircleIcon from "@mui/icons-material/Circle";
import TechIconsCardHeader from "./TechIconsCardHeader";

const GameCard = ({
  image,
  title,
  desc,
  year,
  genres,
  techUsed,
  submissionType,
  submissionLink,
}) => {
  return (
    <Card
      sx={{
        width: 325,
        minHeight: 350,
        maxHeight: "auto",
        boxShadow: "0px 0px 5px",
        ":hover": {
          boxShadow: "0px 0px 10px",
        },
        backgroundColor: "#252525",
      }}
    >
      <CardActionArea
        onClick={() => {
          window.location.href = submissionLink;
        }}
      >
        <Box position="relative">
          <CardMedia sx={{ height: 175 }} image={image} />
          <TechIconsCardHeader techUsed={techUsed} />
        </Box>
        <CardContent sx={{ backgroundColor: "#252525" }}>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "5px",
            }}
          >
            <Box width="100%" marginBottom="-5px">
              <Tooltip
                title={
                  <>
                    <SubmissionTooltip
                      icon={submissionType.icon}
                      name={submissionType.name}
                      desc={submissionType.desc}
                    ></SubmissionTooltip>
                  </>
                }
                placement="top"
                arrow
                componentsProps={{
                  tooltip: {
                    sx: {
                      bgcolor: "#0c0c0c",
                    },
                  },
                }}
              >
                <Chip
                  label={submissionType.abbreviation + " " + year}
                  color="default"
                  size="small"
                  sx={{
                    fontSize: "10px",
                    backgroundColor: submissionType.color,
                    color: submissionType.fontColor,
                    height: "15px",
                  }}
                />
              </Tooltip>
            </Box>
            <Typography
              variant="h6"
              component="div"
              color={"white"}
              maxWidth="185px"
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="nowrap"
              fontSize="15px"
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
              fontSize="15px"
              alignSelf="center"
            >
              {year}
            </Typography>
          </Box>
          <Typography
            color={"#7f7f7f"}
            sx={{ fontSize: "12px", marginTop: -0.5 }}
          >
            {GenresToString(genres)}
          </Typography>
          <Typography variant="body3" color={"white"} fontSize="12px">
            {desc}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default GameCard;
