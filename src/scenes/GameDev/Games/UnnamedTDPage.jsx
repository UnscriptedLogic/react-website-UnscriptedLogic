import React from "react";
import Carousel from "react-material-ui-carousel";
import {
  Container,
  Box,
  Typography,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";
import {
  BlogCard,
  ImageCard,
  unnamedtdSC1,
  unnamedtdSC2,
  btd1,
} from "../../../ImportRoutes";

const UnnamedTDPage = () => {
  return (
    <Box width="100%">
      {/* Hero Section */}
      <Box display="flex" justifyContent="center" flexDirection="column">
        <ImageCard image={unnamedtdSC1} height="400px" translateY="-80px" />
        <Box
          height="200px"
          marginTop="-200px"
          position="relative"
          sx={{
            background:
              "linear-gradient(rgba(0, 0, 0, 0), rgba(15, 15, 25, 1))",
          }}
        />
      </Box>
      <Box bgcolor="rgba(15, 15, 25, 1)" height="600px">
        <Container maxWidth="md">
          <Box
            position="relative"
            marginTop="-150px"
            display="flex"
            flexDirection="column"
            gap="15px"
          >
            <Typography
              variant="body4"
              color="#e5e5ff"
              fontSize="50px"
              sx={{ textShadow: "3px 3px black" }}
            >
              UnnamedTD
            </Typography>
            <BlogCard borderThiccness="2px" borderColor="#9f9faf">
              <Typography
                variant="body4"
                color="#bfbfcf"
                fontSize="17px"
                display="flex"
                justifyContent="center"
              >
                💡 "What if the maps on a tower defense game was procedurally
                generated?"
              </Typography>
            </BlogCard>
            <BlogCard>
              <Box display="flex" gap="20px">
                <Typography variant="body4" color="#bfbfcf" fontSize="17px">
                  Tower defense games have always been an iconic genre. A casual
                  economy management action game. A simple task of outlasting
                  the waves with the ever increasing strength of your arsenal
                  that mystically has infinite ammo at it's disposal and
                  sometimes unchallenged aim.
                  <br />
                  <br />
                  It also so happens to be one of the more arguably easier games
                  for beginner developers to transition to their novice state,
                  covering a wide range of game development concepts from
                  building logic, target searching, entity movement, state
                  management and most importantly game balancing
                  <br />
                  <br />
                  so it's no suprise that someone with dreams to become a
                  full-time game developer like me would try to take on the
                  challenge of making one.
                </Typography>
                <Box display="flex" flexDirection="column" gap="20px">
                  <figure>
                    <img
                      src={btd1}
                      height="200px"
                      alt="Picture of Bloons TD Battles"
                      style={{ borderRadius: "10px", boxShadow: "0 0 3px" }}
                    />
                    <figcaption
                      style={{
                        fontStyle: "italic",
                        lineHeight: "15px",
                        fontSize: "10px",
                        paddingTop: "5px",
                      }}
                    >
                      <Typography variant="body4" color="#bfbfcf">
                        Bloons TD 1 (2007), wow what a throwback. The first
                        tower defense game I've ever played
                      </Typography>
                    </figcaption>
                  </figure>
                  <figure>
                    <img
                      src={unnamedtdSC2}
                      height="220px"
                      alt="Picture of Bloons TD Battles"
                    />
                    <figcaption
                      style={{
                        fontStyle: "italic",
                        lineHeight: "15px",
                        fontSize: "10px",
                        paddingTop: "5px",
                      }}
                    >
                      <Typography variant="body4" color="#bfbfcf">
                        Bloons TD Battles, my most played secondar school game.
                        Even played it with my friends and proceeded to moab
                        rush them anytime I felt in the mood for it.
                      </Typography>
                    </figcaption>
                  </figure>
                </Box>
              </Box>
            </BlogCard>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default UnnamedTDPage;
