import React from "react";
import { Typography, Box, Container, Avatar } from "@mui/material";
import video from "/GameDevTrailer.mp4";
import profilePic from "/bestpicResized.jpg";
import "./GameDevTitleSection.css";

const GameDevTitleSection = () => {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "black",
        }}
      >
        <div className="videoDiv">
          <video autoPlay loop muted width="2000px" height="650px">
            <source src={video} type="video/mp4" />
          </video>
          <Box
            display="flex"
            flexDirection="row"
            // justifyContent="end"
            justifyContent="center"
            alignItems="center"
            width="100%"
            height="100%"
            gap="10em"
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <Box
              padding="20px"
              width="300px"
              height="100%"
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
              gap="5px"
              backgroundColor="rgba(0, 0, 10, 0.65)"
              boxShadow="0 0 4px"
              sx={{
                backdropFilter: "blur(2px)",
                // borderLeft: 1,
                border: 1,
                borderColor: "#00001f",
                borderWidth: "2px",
              }}
            >
              <Avatar
                src={profilePic}
                sx={{ width: 100, height: 100, boxShadow: "4px 4px 10px" }}
              />
              <Typography
                variant="h6"
                color="white"
                fontSize="16px"
                textAlign="center"
              >
                Nathaniel Harold Lumbao Alcala
              </Typography>
              <Typography variant="body2" color="#cfcfcf" textAlign="center">
                An aspiring self learned game developer from Singapore on a
                mission to equip myself with the technologies, skillset and
                mindset to bring fun, unique and memorable games to the
                industry.
              </Typography>
            </Box>
          </Box>
        </div>
      </Box>
    </Container>
  );
};

export default GameDevTitleSection;
