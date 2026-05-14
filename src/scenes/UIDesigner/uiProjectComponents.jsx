import { Box, CardMedia, Card } from "@mui/material";
import nteVideo1 from "/uidesign/NTERecreation/SomeUIStudy.mp4";
import nteVideo2 from "/uidesign/NTERecreation/UIStudy2.mp4";
import cDitherWipe from "/uidesign/Tutorials/CircularDitherWipe.mp4";
import tutorialYT from "/uidesign/Tutorials/YoutubeScreenshot.png";

//apr
import apr_screenshot from "/uidesign/autopetracers/apr_mainUI.png";
import apr_video from "/uidesign/autopetracers/apr_showcase.mp4";
import apr_video1 from "/uidesign/autopetracers/apr_showcase2.mp4";

export const nteRecreation = () => {
    console.log("mounted");

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
                sx={{ width: "25%" }}
            />
            <CardMedia
                component="video"
                image={nteVideo2}
                autoPlay
                loop
                muted
                sx={{ width: "25%" }}
            />
        </Box>
    );
};

export const tutorials = () => {
    console.log("mounted");

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
                sx={{ width: "50%" }}
            />
            <CardMedia
                component="img"
                image={tutorialYT}
                autoPlay
                loop
                muted
                sx={{ width: "50%" }}
            />
        </Box>
    );
};

export const autopetracers = () => {
    console.log("mounted");

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
                sx={{ width: "50%" }}
            />
            <CardMedia
                component="video"
                image={apr_video1}
                autoPlay
                loop
                muted
                sx={{ width: "50%" }}
            />
        </Box>
    );
};
