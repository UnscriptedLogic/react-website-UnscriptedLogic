import { Box, Typography, CardMedia, Button } from "@mui/material";
import {
    Navbar,
    Footer,
    UIProjectButton,
    TilingSquares,
    ScreenTransition,
    ProjectModal,
} from "../../ImportRoutes";
import { GSProjects } from "../../GSProgrammerManager";
import gsap from "gsap";
import aprVideo from "/uidesign/autopetracers/apr_video1.mp4";
import React, { useEffect, useState } from "react";

const GSDesignerHome = () => {
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
    const selectedProject = GSProjects[selectedIndex ?? 0];
    let prevSelected = 0;

    return (
        <Box>
            <Navbar sx={{}} />
            <TilingSquares
                rows={20}
                speed={5}
                rectangleWidth={400}
                rectangleHeight={100}
                gap={10}
                rowGap={10}
                opacity={0.5}
                angle={-35}
                color="rgb(255,255,255,.1)"
                sx={{ bgcolor: "#001023" }}
            />
            <Box
                sx={{
                    width: "100vw",
                    height: "100vh",
                    display: "grid",
                    gridTemplateColumns: "repeat(10, 1fr)",
                    gridTemplateRows: "repeat(10, 1fr)",
                    gap: "10px",
                }}
            >
                <Box
                    sx={{
                        gridColumn: "span 3",
                    }}
                >
                    <Box
                        sx={{
                            bgcolor: "#171717",
                            height: "100% - 20px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            margin: "10px",
                            marginLeft: "-100px",
                            paddingLeft: "140px",
                            paddingRight: "100px",
                            borderRadius: "100px",
                            boxShadow: "-10px 10px 0 0 #63ADFF",
                        }}
                    >
                        <Typography
                            fontFamily={"PlayPretend"}
                            fontSize={"1.5rem"}
                            sx={{ color: "white" }}
                        >
                            Gameplay and Systems Programmer
                        </Typography>
                    </Box>
                </Box>
                <Box
                    sx={{
                        gridColumn: "span 5",
                        height: "100%",
                        display: "flex",
                        justifyContent: "left",
                        alignItems: "center",
                    }}
                >
                    <Typography
                        fontFamily={"PointRegular"}
                        sx={{ color: "white", opacity: ".75" }}
                    >
                        Complex systems are just simple rules working together
                        efficiently but the best kind of complexity you should
                        be using is the one that suits your use case.
                    </Typography>
                </Box>
                <Box
                    sx={{
                        gridColumn: "span 2",
                    }}
                ></Box>
                <Box
                    sx={{
                        gridColumn: "span 10",
                    }}
                ></Box>
                <Box
                    sx={{
                        bgcolor: "rgb(255, 255, 255, 0.1)",
                        border: "2px solid rgb(219, 219, 219)",
                        borderWidth: "2px 2px 2px 0",
                        borderRadius: "4px",
                        gridColumn: "span 2",
                        gridRow: "span 9",
                        padding: "20px",
                        paddingLeft: "0",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "1em",
                            width: "100%",
                            height: "100%",
                        }}
                    >
                        {Array.from({ length: GSProjects.length }, (_, i) => (
                            <UIProjectButton
                                id={i}
                                key={i}
                                label={GSProjects[i].name}
                                thumbnail={GSProjects[i].thumbnail}
                                sx={{}}
                                onClick={(e) => {
                                    setSelectedIndex(i);
                                    setIsProjectModalOpen(false);

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
                                        transform: `translate(20%, 6%) scale(1.1)`,
                                        duration: 0.1,
                                        ease: "expo.out",
                                    });
                                }}
                                onHoverLeave={(e) => {
                                    gsap.to(e.currentTarget, {
                                        scale: 1,
                                        transform: `translate(0%, 4%) scale(1)`,
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
                        position: "relative",
                        bgcolor: "#000000",
                        gridColumn: "3 / span 8",
                        gridRow: "span 9",
                        overflow: "hidden",
                        display: "grid",
                        gridTemplateColumns:
                            "minmax(17rem, 30%) minmax(0, 1fr)",
                        // p: "1rem",
                        boxSizing: "border-box",
                    }}
                >
                    <Box
                        sx={{
                            bgcolor: "white",
                            padding: "30px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "1em",
                            zIndex: "1",
                            minHeight: 0,
                            overflowY: "auto",
                            boxSizing: "border-box",
                        }}
                    >
                        <Typography variant="h3" fontFamily={"Point"}>
                            {selectedProject.name}
                        </Typography>
                        <Box
                            sx={{
                                borderRadius: "100em",
                                width: "100%",
                                bgcolor: "#4DBBFF",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Typography variant="h6" fontFamily={"Point"}>
                                Date
                            </Typography>
                        </Box>
                        <Typography
                            variant="h6"
                            fontFamily={"Point"}
                            sx={{ whiteSpace: "pre-line" }}
                        >
                            {selectedProject.desc}
                        </Typography>
                        <Button
                            onClick={() => setIsProjectModalOpen(true)}
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                width: "100%",
                                borderRadius: "4px",
                                border: "2px solid #171717",
                                bgcolor: "#63ADFF",
                                color: "#07111f",
                                py: "0.8rem",
                                boxShadow: "-0.35rem 0.35rem 0 #171717",
                                textTransform: "none",
                                transition:
                                    "background-color 0.18s ease, box-shadow 0.18s ease, transform 0.18s ease",
                                "&:hover": {
                                    bgcolor: "#8cc4ff",
                                    transform: "translate(0.16rem, -0.16rem)",
                                    boxShadow: "-0.5rem 0.5rem 0 #171717",
                                },
                                "&:active": {
                                    bgcolor: "#4d9be8",
                                    transform: "translate(-0.1rem, 0.1rem) scale(0.98)",
                                    boxShadow: "-0.18rem 0.18rem 0 #171717",
                                },
                            }}
                        >
                            <Typography
                                fontFamily={"PointRegular"}
                                sx={{
                                    color: "inherit",
                                    fontSize: "1.1rem",
                                    lineHeight: 1,
                                }}
                            >
                                Learn More
                            </Typography>
                        </Button>
                    </Box>
                    <Box
                        sx={{
                            bgcolor: "#05070d",
                            width: "100%",
                            height: "100%",
                            minHeight: 0,
                            overflow: "hidden",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            boxSizing: "border-box",
                        }}
                    >
                        <CardMedia
                            component="video"
                            image={selectedProject.video}
                            autoPlay
                            loop
                            muted
                            playsInline
                            sx={{
                                width: "100%",
                                height: "100%",
                                maxHeight: "100%",
                                aspectRatio: "16 / 9",
                                objectFit: "cover",
                                bgcolor: "#05070d",
                            }}
                        />
                    </Box>
                </Box>
            </Box>
            <ProjectModal
                open={isProjectModalOpen}
                onClose={() => setIsProjectModalOpen(false)}
                sx={{
                    borderColor: "#63ADFF",
                    borderBottomColor: "#d8d8d8",
                }}
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
            <ScreenTransition title="PROGRAMMER" color="#63ADFF" />
        </Box>
    );
};

export default GSDesignerHome;
