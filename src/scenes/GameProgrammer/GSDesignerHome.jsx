import { Box, Typography, CardMedia, Button, Card } from "@mui/material";
import {
    Navbar,
    Footer,
    UIProjectButton,
    TilingSquares,
    ScreenTransition,
} from "../../ImportRoutes";
import { GSProjects } from "../../GSProgrammerManager";
import gsap from "gsap";
import aprVideo from "/uidesign/autopetracers/apr_video1.mp4";
import React, { useEffect, useState } from "react";

const GSDesignerHome = () => {
    const [selectedIndex, setSelectedIndex] = useState(null);
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
                        bgcolor: "#203569",
                        gridColumn: "4 / span 7",
                        gridRow: "span 9",
                        overflow: "hidden",
                    }}
                >
                    <Box
                        sx={{
                            position: "absolute",
                            top: "0",
                            bgcolor: "white",
                            width: "30%",
                            height: "calc(100% - 60px)",
                            borderRadius: "0 6em 0 0",
                            padding: "30px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "1em",
                            zIndex: "1",
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
                        <Card
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Typography>Hello</Typography>
                        </Card>
                    </Box>
                    <Box
                        sx={{
                            position: "absolute",
                            top: "0",
                            bgcolor: "white",
                            width: "100%",
                            height: "100%",
                            overflow: "hidden",
                        }}
                    >
                        <CardMedia
                            component="video"
                            image={selectedProject.video}
                            autoPlay
                            loop
                            muted
                            sx={{ height: "100%", objectFit: "cover" }}
                        />
                    </Box>
                </Box>
            </Box>
            <ScreenTransition title="PROGRAMMER" color="#63ADFF" />
        </Box>
    );
};

export default GSDesignerHome;
