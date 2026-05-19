import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { useRef } from "react";
import { Box, Typography } from "@mui/material";
import {
    TilingText,
    UIProjectButton,
    Navbar,
    BackgroundFlash,
    ScreenTransition,
} from "../../ImportRoutes";
import { UIProjects } from "../../UIDesignManager";

const UIDesignerHome = () => {
    const flashRef = useRef(null);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [isProjectMediaReady, setIsProjectMediaReady] = useState(true);
    const [shouldRunProjectWipe, setShouldRunProjectWipe] = useState(false);
    const selectedProject = UIProjects[selectedIndex];
    const SelectedDisplay = selectedProject?.displayComponent;

    const highlightColor = "#ffa200"; // Example highlight color

    useEffect(() => {
        if (!shouldRunProjectWipe || !isProjectMediaReady) {
            return;
        }

        flashRef.current?.wipeAnimation();
        setShouldRunProjectWipe(false);
    }, [isProjectMediaReady, shouldRunProjectWipe]);

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
                                const isNewSelection = selectedIndex !== i;

                                if (isNewSelection) {
                                    //setIsProjectMediaReady(false);
                                    // setShouldRunProjectWipe(true);
                                    flashRef.current?.wipeAnimation();
                                }

                                setSelectedIndex(i);

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
                        {SelectedDisplay && (
                            <SelectedDisplay
                                onReady={() => setIsProjectMediaReady(true)}
                            />
                        )}
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
                                {selectedProject?.name}
                            </Typography>
                            <Typography
                                variant="h6"
                                color="#d3d3d3"
                                fontFamily="PointRegular"
                                sx={{ width: "100%", whiteSpace: "pre-line" }}
                            >
                                {selectedProject?.desc}
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
            <ScreenTransition title="UX and UI" color={highlightColor} />
        </Box>
    );
};

export default UIDesignerHome;
