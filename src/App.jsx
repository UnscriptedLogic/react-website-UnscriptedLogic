import React from "react";
import { Box } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import {
    Navbar,
    GameDevHome,
    WebDevHome,
    UIDesignerHome,
    Footer,
    BlogPage,
    UnnamedTD,
    GSDesignerHome,
    AssetPreloader,
    DesktopNotice,
    Modeller,
} from "./ImportRoutes";
import { UnscriptedDuelsBlog } from "./scenes/GameDev/Games/UnscriptedDuels";
import { AutoPetRacersBlog } from "./scenes/GameDev/Games/AutoPetRacersBlog";

const App = () => {
    return (
        <Box>
            <AssetPreloader />
            <DesktopNotice />
            {/* <Navbar /> */}
            <Routes>
                <Route path="/" element={<GameDevHome />} />
                <Route path="/gamedev" element={<GameDevHome />} />
                <Route path="/webdev" element={<WebDevHome />} />
                <Route path="/uidesigner" element={<UIDesignerHome />} />
                <Route path="/gsdesigner" element={<GSDesignerHome />} />
                <Route path="/modeller" element={<Modeller />} />
                {/* <Route path="/blog" /> */}
                <Route
                    path="/blog/unnamedtd"
                    element={<BlogPage page={<UnnamedTD />} />}
                />
                <Route
                    path="/blog/unscriptedduels"
                    element={<BlogPage page={<UnscriptedDuelsBlog />} />}
                />
                <Route
                    path="/blog/autopetracers"
                    element={<BlogPage page={<AutoPetRacersBlog />} />}
                />
            </Routes>
            {/* <Footer></Footer> */}
        </Box>
    );
};

export default App;
