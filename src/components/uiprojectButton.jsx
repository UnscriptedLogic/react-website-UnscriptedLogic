import React from "react";
import gsap from "gsap";
import { Box, Card, Container, Typography } from "@mui/material";

const UIProjectButton = ({
    id,
    label,
    thumbnail,
    sx,
    isSelected,
    onClick,
    onHoverEnter,
    onHoverLeave,
}) => {
    return (
        <Card
            sx={{
                position: "relative",
                height: "8em",
                width: "16em",
                backgroundColor: "#252525",
                borderRadius: "0px",
                // boxShadow: "-10px 10px 0px black",
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
                }}
            ></Box>
            <Box
                component="img"
                src={thumbnail}
                sx={{
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
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
                <Typography fontFamily="PointRegular" sx={{ color: "white" }}>
                    {label}
                </Typography>
            </Box>
        </Card>
    );
};

export default UIProjectButton;
