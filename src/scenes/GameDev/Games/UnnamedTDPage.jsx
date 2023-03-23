import React from "react";
import { Container, Box, Typography } from "@mui/material";
import {
  BlogCard,
  ImageCard,
  unnamedtdSC1,
  unnamedtdSC2,
  btd1,
  unnamedTDIcon,
} from "../../../ImportRoutes";
import { CardTag } from "../../../components/BlogCard";

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
      <Box bgcolor="rgba(15, 15, 25, 1)">
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
            <Box display="flex" gap="10px">
              <Box display="flex" flexDirection="column" gap="10px">
                <BlogCard
                  borderThiccness="2px"
                  borderColor="#9f9faf"
                  cardTags={[new CardTag("Core Idea", "#0f0f2c")]}
                >
                  <Typography
                    variant="body4"
                    color="#bfbfcf"
                    fontSize="17px"
                    display="flex"
                    fontStyle="italic"
                  >
                    "What if the maps on a tower defense game was procedurally
                    generated?"
                  </Typography>
                  <br />
                  <Typography variant="body4" color="#bfbfcf" fontSize="17px">
                    UnnamedTD is a 3D top down classic tower defence game where
                    players defend themselves from waves of enemies with their
                    small but powerful arsenal of towers in randomly generated
                    terrain with pillars and debri.
                  </Typography>
                </BlogCard>
                <BlogCard>
                  <Typography
                    variant="body4"
                    color="#bfbfcf"
                    fontSize="17px"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    height="254px"
                  >
                    Development logs coming soon...
                  </Typography>
                </BlogCard>
              </Box>
              <Box>
                <BlogCard
                  cardTags={[new CardTag("Screenshots", "white", "#3f3f5c")]}
                >
                  <img
                    src={unnamedTDIcon}
                    width="100%"
                    style={{ objectFit: "fill" }}
                  />
                  <img src={unnamedtdSC1} height="200px" />
                </BlogCard>
              </Box>
            </Box>
            <BlogCard padding="16px" header="Context" headerColour="#cfcfff">
              <Box display="flex" gap="20px">
                <Typography variant="body4" color="#bfbfcf" fontSize="17px">
                  Tower defense games have always been an iconic genre - a
                  casual economy management action game. The simple task is to
                  outlast waves with the ever-increasing strength of your
                  arsenal that mystically has infinite ammo at its disposal and
                  sometimes unchallenged aim.
                  <br />
                  <br />
                  It also happens to be one of the easier games, arguably, for
                  beginner developers to transition to their novice state,
                  covering a wide range of game development concepts including
                  building logic, target searching, entity movement, state
                  management, and most importantly, game balancing.
                  <br />
                  <br />
                  Therefore, it's no surprise that someone with dreams of
                  becoming a full-time game developer like me would try to take
                  on the challenge of making one.
                </Typography>
                <Box display="flex" flexDirection="column" gap="20px">
                  <figure>
                    <img
                      src={btd1}
                      height="200px"
                      alt="Picture of Bloons TD 1"
                      style={{ borderRadius: "10px", boxShadow: "0 0 3px" }}
                    />
                    <figcaption
                      style={{
                        fontStyle: "italic",
                        lineHeight: "15px",
                        fontSize: "10px",
                        marginTop: "-1px",
                      }}
                    >
                      <Typography variant="body4" color="#bfbfcf">
                        Bloons TD 1 (2007), The first tower defense game I've
                        ever played
                      </Typography>
                    </figcaption>
                  </figure>
                  <figure>
                    <img
                      src={unnamedtdSC2}
                      height="220px"
                      alt="Picture of Bloons TD Battles"
                      style={{ borderRadius: "10px", boxShadow: "0 0 3px" }}
                    />
                    <figcaption
                      style={{
                        fontStyle: "italic",
                        lineHeight: "15px",
                        fontSize: "10px",
                        marginTop: "-1px",
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
            <BlogCard
              header="Inspirations"
              padding="16px"
              headerColour="#cfcfff"
            >
              <Typography variant="body4" color="#bfbfcf" fontSize="17px">
                Content
              </Typography>
            </BlogCard>
            <BlogCard
              header="Development"
              padding="16px"
              headerColour="#cfcfff"
            >
              <Typography variant="body4" color="#bfbfcf" fontSize="17px">
                Content
              </Typography>
            </BlogCard>
            <BlogCard header="Production" padding="16px" headerColour="#cfcfff">
              <Typography variant="body4" color="#bfbfcf" fontSize="17px">
                Content
              </Typography>
            </BlogCard>
            <BlogCard header="Conclusion" padding="16px" headerColour="#cfcfff">
              <Typography variant="body4" color="#bfbfcf" fontSize="17px">
                Content
              </Typography>
            </BlogCard>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default UnnamedTDPage;
