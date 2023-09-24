import React from "react";
import { Container, Box, Typography } from "@mui/material";
import { GameCard, MajorGameCard } from "../../ImportRoutes";
import { majorGames, minorGames } from "../../GameManager";

const GamesSection = () => {
  return (
    <Container>
      <Box
        sx={{
          backgroundColor: "#202020",
          padding: "3em",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <Typography
          marginBottom="10px"
          fontSize="25px"
          variant="h6"
          color="#ffffff"
        >
          Featured Game Projects
        </Typography>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            alignItems: "center",
            borderColor: "red",
            rowGap: "10px",
          }}
        >
          {majorGames.map((item, index) => {
            return (
              <MajorGameCard
                image={item.thumbnail}
                title={item.name}
                desc={item.desc}
                year={item.year}
                status={item.gameStatus}
                genres={item.genres}
                techUsed={item.techUsed}
                blogLink={item.blogLink}
              ></MajorGameCard>
            );
          })}
        </Box>
        <Typography
          marginTop="50px"
          marginBottom="10px"
          fontSize="20px"
          variant="h6"
          color="#ffffff"
        >
          Minor Game Projects
        </Typography>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexWrap: "wrap",
            rowGap: "30px",
          }}
        >
          {minorGames.map((item, index) => {
            return (
              <GameCard
                image={item.thumbnail}
                title={item.name}
                desc={item.desc}
                year={item.year}
                genres={item.genres}
                techUsed={item.techUsed}
                blogLink={item.blogLink}
                submissionType={item.submissionTypes}
                submissionLink={item.submissionLink}
              ></GameCard>
            );
          })}
        </Box>
      </Box>
    </Container>
  );
};

export default GamesSection;
