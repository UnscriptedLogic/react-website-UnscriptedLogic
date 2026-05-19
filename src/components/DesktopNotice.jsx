import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const DISMISSED_KEY = "desktop-notice-dismissed";

export default function DesktopNotice({
    breakpoint = 768,
    title = "Best viewed on desktop",
    message = "This site uses wide layouts, videos, and interactive panels that feel better with a larger screen.",
    buttonLabel = "Continue anyway",
    backgroundColor = "#000914",
    accentColor = "#63ADFF",
    textColor = "white",
}) {
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [isDismissed, setIsDismissed] = useState(
        () => sessionStorage.getItem(DISMISSED_KEY) === "true",
    );

    useEffect(() => {
        const mediaQuery = window.matchMedia(`(max-width: ${breakpoint}px)`);

        const updateScreenSize = () => {
            setIsSmallScreen(mediaQuery.matches);
        };

        updateScreenSize();
        mediaQuery.addEventListener("change", updateScreenSize);

        return () => {
            mediaQuery.removeEventListener("change", updateScreenSize);
        };
    }, [breakpoint]);

    const handleDismiss = () => {
        sessionStorage.setItem(DISMISSED_KEY, "true");
        setIsDismissed(true);
    };

    if (!isSmallScreen || isDismissed) {
        return null;
    }

    return (
        <Box
            sx={{
                position: "fixed",
                inset: 0,
                zIndex: 11000,
                bgcolor: backgroundColor,
                color: textColor,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "1.25rem",
                px: "2rem",
                textAlign: "center",
            }}
        >
            <Typography
                fontFamily="PlayPretend"
                sx={{
                    fontSize: "clamp(2rem, 12vw, 4rem)",
                    letterSpacing: 0,
                }}
            >
                {title}
            </Typography>
            <Typography
                fontFamily="PointRegular"
                sx={{
                    width: "min(32rem, 100%)",
                    color: "rgba(255,255,255,0.78)",
                    fontSize: "1.15rem",
                }}
            >
                {message}
            </Typography>
            <Button
                variant="contained"
                onClick={handleDismiss}
                sx={{
                    mt: "0.5rem",
                    bgcolor: accentColor,
                    color: backgroundColor,
                    borderRadius: "4px",
                    px: "1.25rem",
                    py: "0.75rem",
                    fontFamily: "PointRegular",
                    textTransform: "none",
                    "&:hover": {
                        bgcolor: accentColor,
                        filter: "brightness(1.08)",
                    },
                }}
            >
                {buttonLabel}
            </Button>
        </Box>
    );
}
