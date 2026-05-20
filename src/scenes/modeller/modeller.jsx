import { Box, Button, Typography } from "@mui/material";
import {
    Navbar,
    UIProjectButton,
    ScreenTransition,
    ProjectModal,
} from "../../ImportRoutes";
import React, { useState } from "react";
import { ModellingProjects } from "../../ModellerManager";

const modeller = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
    const selectedProject = ModellingProjects[selectedIndex];

    return (
        <Box
            sx={{ minHeight: "100vh", overflow: "hidden", bgcolor: "#001A07" }}
        >
            <Navbar
                sx={{
                    height: "4vh",
                    minHeight: "44px",
                    position: "relative",
                    zIndex: 10,
                }}
            />
            <Box
                sx={{
                    width: "100vw",
                    minHeight: "calc(100vh - max(4vh, 44px))",
                    bgcolor: "#001A07",
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "center",
                    position: "relative",
                    overflow: "hidden",
                    px: { xs: "1.2rem", md: "3rem", xl: "4rem" },
                    pb: { xs: "1.4rem", md: "2.6rem", xl: "4rem" },
                    boxSizing: "border-box",
                }}
            >
                <Box
                    sx={{
                        position: "absolute",
                        inset: 0,
                        background:
                            "linear-gradient(135deg, transparent 0 32%, rgba(255,255,255,0.13) 32% 54%, transparent 54%), linear-gradient(45deg, transparent 0 58%, rgba(255,255,255,0.1) 58% 75%, transparent 75%), linear-gradient(135deg, transparent 0 73%, rgba(24,75,44,0.75) 73% 100%)",
                    }}
                />
                <Box
                    sx={{
                        position: "absolute",
                        left: { xs: "-4.5rem", md: "2rem" },
                        bottom: { xs: "2rem", md: "1.6rem" },
                        width: { xs: "9rem", md: "12rem" },
                        height: { xs: "64%", md: "72%" },
                        bgcolor: "#0C812B",
                        transform: "rotate(-5deg)",
                        transformOrigin: "bottom center",
                    }}
                />
                <Box
                    sx={{
                        position: "absolute",
                        top: { xs: "5rem", md: "6rem" },
                        left: { xs: "5.6rem", md: "10.5rem" },
                        width: { xs: "15rem", md: "23rem" },
                        height: { xs: "3.5rem", md: "4.8rem" },
                        bgcolor: "#0C812B",
                        transform: "rotate(-3.8deg)",
                        transformOrigin: "left center",
                        zIndex: 4,
                        display: "flex",
                        alignItems: "center",
                        pl: { xs: "1rem", md: "1.4rem" },
                        boxSizing: "border-box",
                    }}
                >
                    <Typography
                        sx={{
                            color: "#fff",
                            fontFamily: "PointBlack",
                            fontSize: { xs: "1.55rem", md: "2.5rem" },
                            lineHeight: 1,
                            letterSpacing: 0,
                            whiteSpace: "nowrap",
                        }}
                    >
                        3D MODELLER
                    </Typography>
                </Box>
                <Box
                    sx={{
                        position: "absolute",
                        top: { xs: "6.2rem", md: "8.5rem" },
                        left: { xs: "18.5rem", md: "32%" },
                        width: { xs: "8.5rem", md: "9.6rem" },
                        height: { xs: "4.4rem", md: "6rem" },
                        bgcolor: "#0C812B",
                        transform: "rotate(8.5deg)",
                        zIndex: 2,
                    }}
                />
                <Box
                    sx={{
                        position: "absolute",
                        top: { xs: "5.6rem", md: "7.8rem" },
                        right: { xs: "-1.8rem", md: "7%" },
                        width: { xs: "11rem", md: "18rem" },
                        height: { xs: "4rem", md: "6rem" },
                        bgcolor: "#0C812B",
                        transform: "rotate(4deg)",
                        zIndex: 2,
                    }}
                />
                <Box
                    sx={{
                        width: "min(100%, 116rem)",
                        minHeight: { xs: "72vh", md: "76vh" },
                        bgcolor: "#1b1b1b",
                        position: "relative",
                        display: "grid",
                        gridTemplateColumns: { xs: "1fr", md: "58% 42%" },
                        border: {
                            xs: "0.55rem solid #d8d8d8",
                            md: "0.8rem solid #d8d8d8",
                        },
                        borderBottomWidth: { xs: "0.8rem", md: "1.5rem" },
                        borderRightWidth: { xs: "0.8rem", md: "1.05rem" },
                        transform: {
                            xs: "none",
                            md: "perspective(120rem) rotateX(0deg) skewY(-0.8deg)",
                        },
                        transformOrigin: "bottom center",
                        boxSizing: "border-box",
                        zIndex: 3,
                        boxShadow: "0 2rem 3rem rgba(0,0,0,0.22)",
                    }}
                >
                    <Box
                        sx={{
                            minHeight: { xs: "38vh", md: "100%" },
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            position: "relative",
                            overflow: "hidden",
                            flexDirection: "column",
                        }}
                    >
                        {selectedProject?.video ? (
                            <Box
                                component="video"
                                src={selectedProject.video}
                                autoPlay
                                loop
                                muted
                                playsInline
                                sx={{
                                    position: "absolute",
                                    inset: 0,
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    transform: {
                                        xs: "none",
                                        md: "skewY(0.8deg) scale(1.02)",
                                    },
                                }}
                            />
                        ) : (
                            <Box
                                component="img"
                                src={selectedProject?.thumbnail}
                                alt={selectedProject?.name}
                                sx={{
                                    position: "absolute",
                                    inset: 0,
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    transform: {
                                        xs: "none",
                                        md: "skewY(0.8deg) scale(1.02)",
                                    },
                                }}
                            />
                        )}
                        <Box
                            sx={{
                                position: "absolute",
                                inset: 0,
                                background:
                                    "linear-gradient(180deg, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.18) 55%, rgba(0,0,0,0.72) 100%)",
                            }}
                        />
                        <Box
                            sx={{
                                position: "absolute",
                                left: 0,
                                right: 0,
                                bottom: 0,
                                display: "flex",
                                gap: { xs: "0.75rem", md: "1rem" },
                                overflowX: "auto",
                                overflowY: "hidden",
                                px: { xs: "0.9rem", md: "1.3rem" },
                                py: { xs: "0.85rem", md: "1rem" },
                                boxSizing: "border-box",
                                transform: { xs: "none", md: "skewY(0.8deg)" },
                                zIndex: 1,
                            }}
                        >
                            {ModellingProjects.map((project, i) => (
                                <UIProjectButton
                                    id={`modeller-${i}`}
                                    key={project.name}
                                    label={project.name}
                                    thumbnail={project.thumbnail}
                                    isSelected={selectedIndex === i}
                                    onClick={() => {
                                        setSelectedIndex(i);
                                        setIsProjectModalOpen(false);
                                    }}
                                    onHoverEnter={() => {}}
                                    onHoverLeave={() => {}}
                                    sx={{
                                        flex: "0 0 auto",
                                        width: { xs: "12rem", md: "14rem" },
                                        height: { xs: "6rem", md: "7rem" },
                                        cursor: "pointer",
                                        border:
                                            selectedIndex === i
                                                ? "2px solid #0C812B"
                                                : "2px solid rgba(255,255,255,0.22)",
                                        boxShadow:
                                            selectedIndex === i
                                                ? "0 0 0 2px rgba(12,129,43,0.35)"
                                                : "none",
                                        transition:
                                            "border-color 0.15s ease, box-shadow 0.15s ease, transform 0.15s ease",
                                    }}
                                />
                            ))}
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            minHeight: { xs: "34vh", md: "100%" },
                            transform: { xs: "none", md: "skewY(0.8deg)" },
                            transformOrigin: "top left",
                        }}
                    >
                        <Box
                            sx={{
                                minHeight: { xs: "5.6rem", md: "7rem" },
                                width: "100%",
                                bgcolor: "#222222",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                px: "1.5rem",
                                boxSizing: "border-box",
                            }}
                        >
                            <Typography
                                sx={{
                                    color: "#fff",
                                    fontFamily: "PointRegular",
                                    fontSize: { xs: "1.55rem", md: "2.55rem" },
                                    lineHeight: 1.1,
                                    letterSpacing: 0,
                                    textAlign: "center",
                                }}
                            >
                                {selectedProject?.name}
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                flex: 1,
                                width: "100%",
                                bgcolor: "#3C3C3C",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexDirection: "column",
                                gap: { xs: "1.2rem", md: "1.8rem" },
                                px: { xs: "1.5rem", md: "3rem" },
                                py: { xs: "1.5rem", md: "2.5rem" },
                                boxSizing: "border-box",
                            }}
                        >
                            <Typography
                                sx={{
                                    color: "#fff",
                                    fontFamily: "PointRegular",
                                    fontSize: { xs: "1rem", md: "1.65rem" },
                                    textAlign: "center",
                                    whiteSpace: "pre-line",
                                    maxHeight: { xs: "13rem", md: "34rem" },
                                    overflowY: "auto",
                                }}
                            >
                                {selectedProject?.desc}
                            </Typography>
                            <Button
                                onClick={() => setIsProjectModalOpen(true)}
                                sx={{
                                    alignSelf: "center",
                                    borderRadius: 0,
                                    border: "2px solid #d8d8d8",
                                    bgcolor: "#0C812B",
                                    color: "#fff",
                                    px: { xs: "1.25rem", md: "1.7rem" },
                                    py: { xs: "0.55rem", md: "0.75rem" },
                                    minWidth: { xs: "9rem", md: "11rem" },
                                    boxShadow: "0.45rem 0.45rem 0 #171717",
                                    textTransform: "none",
                                    transition:
                                        "background-color 0.18s ease, box-shadow 0.18s ease, transform 0.18s ease",
                                    "&:hover": {
                                        bgcolor: "#10a138",
                                        transform: "translate(-0.18rem, -0.18rem)",
                                        boxShadow: "0.65rem 0.65rem 0 #171717",
                                    },
                                    "&:active": {
                                        bgcolor: "#0a6d24",
                                        transform: "translate(0.22rem, 0.22rem) scale(0.98)",
                                        boxShadow: "0.2rem 0.2rem 0 #171717",
                                    },
                                }}
                            >
                                <Typography
                                    sx={{
                                        color: "inherit",
                                        fontFamily: "PointBlack",
                                        fontSize: { xs: "1rem", md: "1.2rem" },
                                        lineHeight: 1,
                                        letterSpacing: 0,
                                    }}
                                >
                                    Learn More
                                </Typography>
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <ProjectModal
                open={isProjectModalOpen}
                onClose={() => setIsProjectModalOpen(false)}
            >
                <Box sx={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                    <Typography
                        sx={{
                            color: "#fff",
                            fontFamily: "PointBlack",
                            fontSize: { xs: "1.8rem", md: "2.8rem" },
                            lineHeight: 1,
                        }}
                    >
                        {selectedProject?.name}
                    </Typography>
                    <Typography
                        sx={{
                            color: "#e5e5e5",
                            fontFamily: "PointRegular",
                            fontSize: { xs: "1rem", md: "1.25rem" },
                            whiteSpace: "pre-line",
                        }}
                    >
                        {selectedProject?.details ?? selectedProject?.desc}
                    </Typography>
                    {selectedProject?.detailVideos?.map((video) => (
                        <Box
                            component="video"
                            key={video}
                            src={video}
                            controls
                            sx={{
                                width: "100%",
                                maxHeight: "28rem",
                                bgcolor: "#050505",
                                objectFit: "contain",
                            }}
                        />
                    ))}
                    {selectedProject?.detailImages?.map((image) => (
                        <Box
                            component="img"
                            key={image}
                            src={image}
                            alt={selectedProject?.name}
                            sx={{
                                width: "100%",
                                maxHeight: "28rem",
                                objectFit: "contain",
                                bgcolor: "#050505",
                            }}
                        />
                    ))}
                </Box>
            </ProjectModal>
            <ScreenTransition title="3D Modelling" color={"#0c812b"} />
        </Box>
    );
};

export default modeller;
