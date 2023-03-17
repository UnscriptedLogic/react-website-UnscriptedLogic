import React from "react";
import { Box } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { Navbar, GameDevHome, WebDevHome } from "./ImportRoutes";

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
