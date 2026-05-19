import { Box, Typography } from "@mui/material";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function ScreenTransition({
    title = "ROLE SWITCH",
    color = "#ffa200",
    firstColor = "white",
    textBackgroundColor = "black",
    textColor = "white",
    startDelay = 0.5,
    duration = 1.5,
    skew = -10,
    zIndex = 9999,
    titleFontFamily = "PlayPretend",
    titleFontSize = "4rem",
    textBarHeight = "4em",
    sx = {},
}) {
    const firstPanelRef = useRef(null);
    const mainPanelRef = useRef(null);
    const textContainerRef = useRef(null);
    const titleRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                textContainerRef.current,
                {
                    height: "100%",
                },
                {
                    height: textBarHeight,
                    duration: 0.5,
                    ease: "expo.out",
                },
            );

            gsap.fromTo(
                titleRef.current,
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

            gsap.to(firstPanelRef.current, {
                x: "200%",
                duration,
                ease: "expo.out",
                delay: startDelay + 0.1,
                display: "none",
            });

            gsap.to(mainPanelRef.current, {
                x: "200%",
                duration,
                ease: "expo.out",
                delay: startDelay,
                display: "none",
            });
        });

        return () => ctx.revert();
    }, [duration, startDelay, textBarHeight]);

    return (
        <Box
            sx={{
                pointerEvents: "none",
                ...sx,
            }}
        >
            <Box
                ref={firstPanelRef}
                sx={{
                    pointerEvents: "none",
                    position: "absolute",
                    top: 0,
                    left: "-10%",
                    width: "150%",
                    height: "100%",
                    backgroundColor: firstColor,
                    zIndex,
                    transform: `skewX(${skew}deg)`,
                }}
            />
            <Box
                ref={mainPanelRef}
                sx={{
                    pointerEvents: "none",
                    position: "absolute",
                    top: 0,
                    width: "100vw",
                    height: "100vh",
                    backgroundColor: color,
                    zIndex,
                    transform: `skewX(${skew}deg)`,
                    scale: "1.5 1.5",
                }}
            >
                <Box
                    ref={textContainerRef}
                    sx={{
                        backgroundColor: textBackgroundColor,
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        boxShadow: `0 0 0px ${textColor}`,
                        width: "100%",
                        height: textBarHeight,
                    }}
                >
                    <Typography
                        ref={titleRef}
                        sx={{
                            color: textColor,
                            fontFamily: titleFontFamily,
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            fontSize: titleFontSize,
                        }}
                    >
                        {title}
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}
