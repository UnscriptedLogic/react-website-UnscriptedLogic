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

const App = () => {
    return (
        <Box>
            {/* <AssetPreloader /> */}
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
            </Routes>
            {/* <Footer></Footer> */}
        </Box>
    );
};

export default App;
