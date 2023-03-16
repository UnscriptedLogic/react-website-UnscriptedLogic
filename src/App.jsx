import React from "react";
import { Box } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Navbar from "./scenes/Navbar";
import GameDevHome from "./scenes/GameDev/GameDevHome";
import WebDevHome from "./scenes/WebDev/WebDevHome";

const App = () => {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path="/" element={<GameDevHome />} />
        <Route path="/gamedev" element={<GameDevHome />} />
        <Route path="/webdev" element={<WebDevHome />} />
      </Routes>
    </Box>
  );
};

export default App;
