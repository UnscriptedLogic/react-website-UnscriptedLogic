import React, { useState } from "react";
import { Container, Box, Typography, Divider, Backdrop } from "@mui/material";
import {
  BlogCard,
  BlogMedia,
  ImageCard,
  unnamedtdSC1,
  unnamedtdSC2,
  btd1,
  unnamedTDIcon,
  robloxTB,
  robloxtowerbattleslaodout,
  utdGantt,
  entityDiagram,
  buildingSystem,
} from "../../../ImportRoutes";
import { CardTag } from "../../../components/BlogCard";

const UnnamedTDPage = () => {
  const [enlargedImage, setEnlargedImage] = React.useState();
  const [caption, setCaption] = React.useState();
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleToggle = (e) => {
    setOpen(!open);
    setEnlargedImage(e.target.src);
  };

  return (
    <Box>
      <Backdrop
        sx={{ color: "#fff", zIndex: 99 }}
        open={open}
        onClick={handleClose}
      >
        <img src={enlargedImage} width="75%" height="75%" />
      </Backdrop>
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
        <Box
          // bgcolor="rgba(15, 15, 25, 1)"
          sx={{
            // backgroundColor: "#e5e5f7",
            backgroundImage:
              "radial-gradient(rgba(100, 100, 110, .5) 1px, rgba(15, 15, 25, 1) 0.5px)",
            backgroundSize: "28px 28px",
          }}
        >
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
                      UnnamedTD is a 3D top down classic tower defence game
                      where players defend themselves from waves of enemies with
                      their small but powerful arsenal of towers in randomly
                      generated terrain with pillars and debri.
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
                      onClick={handleToggle}
                    />
                    <img
                      src={unnamedtdSC1}
                      height="200px"
                      onClick={handleToggle}
                    />
                  </BlogCard>
                </Box>
              </Box>
              <BlogCard>
                <Typography variant="body4" color="#bfbfcf" fontSize="17px">
                  This project will no longer recieve updates
                </Typography>
              </BlogCard>
              <BlogCard header="Context" headerColour="#cfcfff">
                <Typography variant="body4" color="#bfbfcf" fontSize="17px">
                  The school submission this project was submitted to was known
                  as "Guided Learning" where students:
                  <br />
                  <br />
                  - are given a new web technology they've never used before
                  <br />
                  - plan their approach to learning the new technology
                  <br />
                  - learn how to operate said technology
                  <br />
                  - and finally implement it in a project all with minimal
                  supervision.
                  <br />
                  <br />
                  Microsoft Azure (PlayFab in my case) was the new technology I
                  had to learn and this is my project for that submission.
                </Typography>
              </BlogCard>
              <BlogCard padding="16px">
                <Box display="flex" gap="20px">
                  <Typography variant="body4" color="#bfbfcf" fontSize="17px">
                    Tower defense games have always been an iconic genre - a
                    casual economy management action game. The simple task is to
                    outlast waves with the ever-increasing strength of your
                    arsenal that mystically has infinite ammo at its disposal
                    and sometimes unchallenged aim.
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
                    becoming a full-time game developer like me would try to
                    take on the challenge of making one.
                  </Typography>
                  <Box display="flex" flexDirection="column" gap="20px">
                    <figure>
                      <img
                        src={btd1}
                        height="200px"
                        alt="Picture of Bloons TD 1"
                        style={{ borderRadius: "10px", boxShadow: "0 0 3px" }}
                        onClick={handleToggle}
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
                          ever played and nostalgic for almost every TD player.
                        </Typography>
                      </figcaption>
                    </figure>
                    <figure>
                      <img
                        src={robloxTB}
                        height="200px"
                        style={{ borderRadius: "10px", boxShadow: "0 0 3px" }}
                        onClick={handleToggle}
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
                          Roblox Tower Battles. The game I've spent an
                          incredible amount of my secondary school life playing.
                          A 3D tower defence game with great game balance and
                          simple graphics.
                        </Typography>
                      </figcaption>
                    </figure>
                  </Box>
                </Box>
              </BlogCard>
              <Divider
                sx={{
                  marginTop: "16px",
                  marginBottom: "16px",
                  borderColor: "#6c6c8f",
                }}
                flexItem
              />
              <Box display="flex" gap="12px">
                <Box>
                  <BlogCard
                    header="Inspirations"
                    padding="16px"
                    headerColour="#cfcfff"
                  >
                    <Typography variant="body4" color="#bfbfcf" fontSize="17px">
                      The prominent inspiration for this game was Roblox Tower
                      Battles by Planet3arth.
                      <br />
                      <br />
                      It was a simple game with simple graphics and rules of a
                      classic tower defence game. Besides currency management,
                      the game features a playstyle of tower combination and
                      strategy usage, meaning the game can only be won with a
                      certain kind of tower loadout and strategy.
                      <br />
                      <br />
                      With only 5 unique towers to bring into the game, a tower
                      cap of 25 and currency that comes around scarcily, it's no
                      wonder players are forced to stay efficient in their
                      gameplay to reach even halfway through the stages.
                    </Typography>
                  </BlogCard>
                  <BlogCard
                    borderColor="#9c6c50"
                    borderThiccness="2px"
                    sx={{
                      marginTop: "20px",
                    }}
                    cardTags={[new CardTag("Key Takeaway", "white")]}
                  >
                    <Typography variant="body4" color="#bfbfcf" fontSize="17px">
                      Players are divided by their experience with the game and
                      not their wealth
                    </Typography>
                  </BlogCard>
                </Box>
                <BlogCard>
                  <BlogMedia
                    mediaType="image"
                    src={robloxtowerbattleslaodout}
                    height="350px"
                    caption="Most effective tactic available for 2v2 modes as of 2018 era"
                  />
                </BlogCard>
              </Box>
              <Divider
                sx={{
                  marginTop: "16px",
                  marginBottom: "16px",
                  borderColor: "#6c6c8f",
                }}
                flexItem
              />
              <BlogCard
                header="Development"
                padding="16px"
                headerColour="#cfcfff"
              >
                <Typography variant="body4" color="#bfbfcf" fontSize="17px">
                  Before going into development, I made a gantt chart to plan my
                  features, prioritizing core features first, laying out crucial
                  foundations before adding more of the fun content.
                  <br />
                  <br />
                  Given that this was the first time I was making a project
                  submission for a school subject that was not related to game
                  development, I had to make sure that this will work and I will
                  indeed finish this project.
                </Typography>
              </BlogCard>

              <BlogMedia
                src={utdGantt}
                width="100%"
                height=""
                caption="This gantt chart was created in Notion and to this day, serves as a reminder that my most successful game came out of a thoroughly examined   and promptly executed plan."
                onClicked={handleToggle}
              />
              <BlogCard>
                <Typography variant="body4" color="#bfbfcf" fontSize="17px">
                  Stripping away all the fancy functionality from my ideas, I
                  brought forward the aspects of the game that serve as the
                  foundation for the rest to be built upon. I drafted out some
                  diagrams to help me visualize my work.
                </Typography>
                <br />
                <br />
                <BlogMedia
                  src={entityDiagram}
                  width="100%"
                  height=""
                  caption="Drafted on the school whiteboard of an empty classroom, I got to work, remembering all my failed attempts at making a decent entity system and throwing away old habits such as relying solely on inheritance and overcomplicating aspects of the system for the sake of flexibility."
                  onClicked={handleToggle}
                />
                <br />
                <BlogMedia
                  src={buildingSystem}
                  width="100%"
                  height=""
                  caption="Made with lucid chart, this diagram helped me clarify how some of the systems would interact with each other."
                  onClicked={handleToggle}
                />
              </BlogCard>
              <BlogCard
                header="Production"
                padding="16px"
                headerColour="#cfcfff"
              >
                <Typography variant="body4" color="#bfbfcf" fontSize="17px">
                  Content
                </Typography>
              </BlogCard>
              <BlogCard
                header="Conclusion"
                padding="16px"
                headerColour="#cfcfff"
              >
                <Typography variant="body4" color="#bfbfcf" fontSize="17px">
                  Content
                </Typography>
              </BlogCard>
            </Box>
          </Container>
        </Box>
      </Box>
    </Box>
  );
};

export default UnnamedTDPage;
