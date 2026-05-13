import React from "react";
import gsap from "gsap";
import { Box, Card, Container, Typography } from "@mui/material";
import { tdmodels } from "../ImportRoutes";

const UIProjectButton = ({
    id,
    sx,
    isSelected,
    onClick,
    onHoverEnter,
    onHoverLeave,
}) => {
    return (
        <Card
            sx={{
                height: "100px",
                width: "300px",
                backgroundColor: "#252525",
                borderRadius: "0px",
                boxShadow: "-10px 10px 0px black",
                ...sx,
            }}
            onClick={(e) => {
                onClick(e);

                gsap.fromTo(
                    ".UIProjectButton" + id,
                    {
                        opacity: 1,
                        duration: 0,
                    },
                    {
                        opacity: 0,
                        duration: 0.5,
                        ease: "linear",
                    },
                );
            }}
            onMouseEnter={onHoverEnter}
            onMouseLeave={onHoverLeave}
        >
            <Box
                className={"UIProjectButton" + id}
                sx={{
                    pointerEvents: "none",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    height: "100%",
                    backgroundColor: "white",
                    opacity: 0,
                    zIndex: 1,
                }}
            ></Box>
            <Box
                component="img"
                src={tdmodels}
                sx={{
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    transform: "translateY(-25%)",
                }}
            ></Box>
            <Box
                sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                    padding: "10px",
                }}
            >
                <Typography
                    fontFamily="PointRegular"
                    fontWeight={0}
                    sx={{ color: "white" }}
                >
                    Project Name
                </Typography>
            </Box>
        </Card>
    );
};

export default UIProjectButton;
