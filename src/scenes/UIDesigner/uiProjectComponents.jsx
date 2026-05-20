import { Box, CardMedia } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import nteVideo1 from "/uidesign/NTERecreation/SomeUIStudy.mp4";
import nteVideo2 from "/uidesign/NTERecreation/UIStudy2.mp4";
import cDitherWipe from "/uidesign/Tutorials/CircularDitherWipe.mp4";
import tutorialYT from "/uidesign/Tutorials/YoutubeScreenshot.png";

//apr
import apr_screenshot from "/uidesign/autopetracers/apr_mainUI.png";
import apr_video from "/uidesign/autopetracers/apr_showcase.mp4";
import apr_video1 from "/uidesign/autopetracers/apr_showcase2.mp4";

const useMediaGroupReady = (mediaCount, onReady) => {
    const [readyCount, setReadyCount] = useState(0);

    useEffect(() => {
        setReadyCount(0);
    }, [mediaCount]);

    useEffect(() => {
        if (mediaCount === 0 || readyCount >= mediaCount) {
            onReady?.();
        }
    }, [mediaCount, onReady, readyCount]);

    return useCallback(() => {
        setReadyCount((count) => Math.min(count + 1, mediaCount));
    }, [mediaCount]);
};

const NteRecreation = ({ onReady } = {}) => {
    const handleMediaReady = useMediaGroupReady(2, onReady);

    return (
        <Box
            sx={{
                width: "auto",
                margin: "1em",

                display: "flex",
                flexDirection: "row",

                justifyContent: "center",
                alignItems: "center",

                overflow: "hidden",
                backgroundColor: "#171717",
                gap: "2em",
            }}
        >
            <CardMedia
                component="video"
                image={nteVideo1}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                onLoadedData={handleMediaReady}
                sx={{ width: "25%" }}
            />
            <CardMedia
                component="video"
                image={nteVideo2}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                onLoadedData={handleMediaReady}
                sx={{ width: "25%" }}
            />
        </Box>
    );
};

const Tutorials = ({ onReady } = {}) => {
    const handleMediaReady = useMediaGroupReady(2, onReady);

    return (
        <Box
            sx={{
                width: "auto",
                margin: "1em",
                padding: "2em",

                display: "flex",
                flexDirection: "row",

                justifyContent: "center",
                alignItems: "center",

                overflow: "hidden",
                backgroundColor: "#171717",
                gap: "2em",
            }}
        >
            <CardMedia
                component="video"
                image={cDitherWipe}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                onLoadedData={handleMediaReady}
                sx={{ width: "50%" }}
            />
            <CardMedia
                component="img"
                image={tutorialYT}
                loading="lazy"
                onLoad={handleMediaReady}
                sx={{ width: "50%" }}
            />
        </Box>
    );
};

const Autopetracers = ({ onReady } = {}) => {
    const handleMediaReady = useMediaGroupReady(2, onReady);

    return (
        <Box
            sx={{
                width: "auto",
                margin: "1em",
                padding: "2em",

                display: "flex",
                flexDirection: "row",

                justifyContent: "center",
                alignItems: "center",

                overflow: "scroll",
                backgroundColor: "#171717",
                gap: "2em",
            }}
        >
            <CardMedia
                component="video"
                image={apr_video}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                onLoadedData={handleMediaReady}
                sx={{ width: "50%" }}
            />
            <CardMedia
                component="video"
                image={apr_video1}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                onLoadedData={handleMediaReady}
                sx={{ width: "50%" }}
            />
        </Box>
    );
};

export { Autopetracers, NteRecreation, Tutorials };
