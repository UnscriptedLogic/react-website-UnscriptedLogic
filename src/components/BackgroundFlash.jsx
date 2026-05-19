import { Box, duration } from "@mui/material";
import gsap from "gsap";
import React from "react";
import { useEffect, useImperativeHandle, useRef, forwardRef } from "react";

const BackgroundFlash = forwardRef(
    ({ id: ID, delay: delay, sx, ssx, children }, ref) => {
        const wipeRef = useRef(null);
        const secondWipeRef = useRef(null);

        const wipe = () => {
            gsap.fromTo(
                secondWipeRef.current,
                {
                    height: "100%",
                },
                {
                    height: "0%",
                    duration: "0.5",
                    ease: "expo.out",
                    delay: 0.25,
                },
            );

            gsap.fromTo(
                wipeRef.current,
                {
                    height: "100%",
                },
                {
                    height: "0%",
                    duration: "0.5",
                    ease: "expo.out",
                    delay: 0.35,
                },
            );
        };

        useImperativeHandle(ref, () => ({
            wipeAnimation() {
                wipe();
            },
        }));

        return (
            <Box
                ref={wipeRef}
                className={"box-wipe-" + ID}
                sx={{
                    position: "fixed",
                    width: "100%",
                    height: "0%",
                    ...sx,
                }}
            >
                <Box
                    ref={secondWipeRef}
                    className={"innerbox-wipe-" + ID}
                    sx={{
                        width: "100%",
                        height: "0%",
                        position: "fixed",
                        ...ssx,
                    }}
                >
                    {children}
                </Box>
            </Box>
        );
    },
);

export default BackgroundFlash;
