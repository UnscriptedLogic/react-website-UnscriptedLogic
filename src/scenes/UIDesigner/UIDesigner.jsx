import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { Box, Container, Typography, Card } from "@mui/material";
import {
    TilingText,
    UIProjectButton,
    Navbar,
    BackgroundFlash,
} from "../../ImportRoutes";
import { BluetoothAudio } from "@mui/icons-material";
import zIndex from "@mui/material/styles/zIndex";
import { UIProjects } from "../../UIDesignManager";

const UIDesignerHome = () => {
    const flashRef = useRef(null);
    const [selectedIndex, setSelectedIndex] = useState(null);
    let prevSelected = 0;

    const highlightColor = "#ffa200"; // Example highlight color

    const startDelay = 0.5; // Delay before the animation starts (in seconds)

    useEffect(() => {
        gsap.fromTo(
            ".ui-designer-screen-transition-text-container",
            {
                height: "100%",
            },
            {
                height: "4em",
                duration: 0.5,
                ease: "expo.out",
            },
        );

        gsap.fromTo(
            ".ui-designer-title-transition",
            {
                opacity: -1,
                transform: "translate(-150%, -50%)",
            },
            {
                opacity: 1,
                transform: "translate(-50%, -50%)",
                duration: 1,
                ease: "expo.out",
            },
        );

        gsap.to(".ui-designer-screen-transition-1", {
            x: "200%",
            duration: 1.5,
            ease: "expo.out",
            delay: startDelay + 0.1,
            display: "none",
        });
        gsap.to(".ui-designer-screen-transition", {
            x: "200%",
            duration: 1.5,
            ease: "expo.out",
            delay: startDelay,
            display: "none",
        });
    }, []);

    return (
        <Box
            sx={{
                height: "100vh",
                maxWidth: "100vw",
                display: "flex",
                flexDirection: "column",
                // overflow: "hidden",
            }}
        >
            <Navbar sx={{ zIndex: 10, width: "100vw" }}></Navbar>
            <TilingText
                text="UI DESIGNER |"
                speed={10}
                opacity={0.025}
                fontFamily="PlayPretend"
                fontWeight=""
                rows={14}
                color="white"
            />
            <Box
                sx={{
                    transform: "translate(5%, 50%) rotate(-15deg)",
                    transformOrigin: "center",
                    position: "fixed",
                    top: "0%",
                    right: "0%",
                    width: "200vw",
                    backgroundColor: "#070707",
                    boxShadow: `0 20px 0px ${highlightColor}`,
                    zIndex: 2,
                }}
            >
                <Box
                    className="ui-designer-container"
                    sx={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginLeft: "1em",
                    }}
                >
                    <Typography
                        variant="body1"
                        color="white"
                        className="ui-designer-text"
                        fontFamily="PlayPretend"
                        fontSize="3rem"
                    >
                        ui/ux
                        <br />
                        projects
                    </Typography>
                </Box>
            </Box>
            <Box
                sx={{
                    width: "28em",
                    marginLeft: "0em",
                    marginTop: "10em",
                    paddingBottom: "20em",
                    transform: "rotate(-10deg)",
                    transformOrigin: "top left",
                    position: "fixed",
                    zIndex: 0,
                    overflowY: "scroll",
                    overflowX: "auto",
                }}
            >
                <Box
                    sx={{
                        position: "fixed",
                        width: "60%",
                        height: "200%",
                        backgroundColor: "black",
                        marginLeft: "1em",
                        boxShadow: `-10px 20px 0px ${highlightColor}`,
                    }}
                ></Box>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "2em",
                        paddingTop: "10em",
                        paddingLeft: "2em",
                    }}
                >
                    {Array.from({ length: UIProjects.length }, (_, i) => (
                        <UIProjectButton
                            id={i}
                            label={UIProjects[i].name}
                            thumbnail={UIProjects[i].thumbnail}
                            sx={{
                                transform: "rotate(10deg)",
                            }}
                            key={i}
                            isSelected={selectedIndex === i}
                            onClick={(e) => {
                                setSelectedIndex(i);

                                if (prevSelected !== i) {
                                    flashRef.current.wipeAnimation();
                                }

                                prevSelected = i;

                                gsap.fromTo(
                                    e.currentTarget,
                                    {
                                        scaleX: 1.5,
                                        scaleY: 0.5,
                                        duration: 0,
                                    },
                                    {
                                        scaleX: 1,
                                        scaleY: 1,
                                        duration: 0.5,
                                        ease: "bounce.out",
                                    },
                                );
                            }}
                            onHoverEnter={(e) => {
                                gsap.to(e.currentTarget, {
                                    transform: `translate(20%, 6%) scale(1.1) rotate(10deg)`,
                                    duration: 0.1,
                                    ease: "expo.out",
                                });
                            }}
                            onHoverLeave={(e) => {
                                gsap.to(e.currentTarget, {
                                    scale: 1,
                                    transform: `translate(0%, 4%) scale(1) rotate(10deg)`,
                                    duration: 0.5,
                                    ease: "bounce.out",
                                });
                            }}
                        />
                    ))}
                </Box>
            </Box>
            <Box
                sx={{
                    width: "auto",
                    height: "calc(100vh - 8em)",
                    display: "flex",
                    justifyContent: "right",
                    alignItems: "center",
                    margin: "2em 4em 0 0",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "2em",
                        width: "65%",
                        height: "100%",
                    }}
                >
                    <Box
                        sx={{
                            width: "100%",
                            backgroundColor: "#333",
                        }}
                    >
                        {UIProjects[selectedIndex]?.displayBlock}
                    </Box>
                    <Box
                        sx={{
                            width: "100%",
                            backgroundColor: "#070707",
                            display: "flex",
                            flexGrow: 1,
                            flexDirection: "column",
                            gap: "1em",
                        }}
                    >
                        <Box sx={{ margin: "1em" }}>
                            <Typography
                                variant="h5"
                                color="white"
                                fontFamily="PlayPretend"
                                sx={{ letterSpacing: "2px" }}
                            >
                                {UIProjects[selectedIndex]?.name}
                            </Typography>
                            <Typography
                                variant="h6"
                                color="#d3d3d3"
                                fontFamily="PointRegular"
                                sx={{ width: "100%", whiteSpace: "pre-line" }}
                            >
                                {UIProjects[selectedIndex]?.desc}
                            </Typography>
                        </Box>
                    </Box>
                    <BackgroundFlash
                        ID="test"
                        ref={flashRef}
                        sx={{
                            backgroundColor: highlightColor,
                        }}
                        ssx={{
                            backgroundColor: "black",
                        }}
                    ></BackgroundFlash>
                </Box>
            </Box>
            <Box
                sx={{
                    transform: "translate(-0%, -50%) rotate(-15deg)",
                    transformOrigin: "center",
                    position: "fixed",
                    bottom: "0%",
                    left: "0%",
                    width: "200vw",
                    height: "6em",
                    backgroundColor: highlightColor,
                    boxShadow: `0 20px 0px black`,
                }}
            ></Box>
            <Box
                sx={{
                    pointerEvents: "none",
                }}
            >
                <Box
                    className="ui-designer-screen-transition-1"
                    sx={{
                        pointerEvents: "none",
                        position: "absolute",
                        top: 0,
                        left: "-10%",
                        width: "150%",
                        height: "100%",
                        backgroundColor: "white",
                        zIndex: 9999,
                        //slight angle
                        transform: "skewX(-10deg)",
                    }}
                ></Box>
                <Box
                    className="ui-designer-screen-transition"
                    sx={{
                        pointerEvents: "none",
                        position: "absolute",
                        top: 0,
                        // left: "-10%",
                        width: "100vw",
                        height: "100vh",
                        backgroundColor: highlightColor,
                        zIndex: 9999,
                        //slight angle
                        transform: "skewX(-10deg)",
                        scale: "1.5 1.5",
                    }}
                >
                    <Box
                        className="ui-designer-screen-transition-text-container"
                        sx={{
                            backgroundColor: "black",
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            boxShadow: `0 0 0px white`,
                            width: "100%",
                            height: "4em",
                        }}
                    >
                        <Typography
                            className="ui-designer-title-transition"
                            sx={{
                                color: "white",
                                fontFamily: "PlayPretend",
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                                fontSize: "4rem",
                            }}
                        >
                            ROLE SWITCH
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default UIDesignerHome;
