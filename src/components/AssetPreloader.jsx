import { Box, Typography } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { preloadImages, preloadVideos } from "../AssetRoutes";

const scheduleIdleWork = (callback) => {
    if ("requestIdleCallback" in window) {
        return window.requestIdleCallback(callback, { timeout: 3000 });
    }

    return window.setTimeout(callback, 250);
};

const cancelIdleWork = (handle) => {
    if ("cancelIdleCallback" in window) {
        window.cancelIdleCallback(handle);
        return;
    }

    window.clearTimeout(handle);
};

export default function AssetPreloader({
    images = preloadImages,
    videos = preloadVideos,
    videoDelay = 100,
    title = "LOADING",
    backgroundColor = "#000914",
    accentColor = "#63ADFF",
    textColor = "white",
}) {
    const totalAssets = useMemo(
        () => images.length + videos.length,
        [images, videos],
    );

    const [loadedAssets, setLoadedAssets] = useState(0);
    const [isLoading, setIsLoading] = useState(totalAssets > 0);

    const progress =
        totalAssets === 0
            ? 100
            : Math.round((loadedAssets / totalAssets) * 100);

    useEffect(() => {
        const imageCache = [];
        const videoCache = [];
        const cleanupLinks = [];
        const timeouts = [];

        let isCancelled = false;
        let completedAssets = 0;

        setLoadedAssets(0);
        setIsLoading(totalAssets > 0);

        const markAssetComplete = () => {
            if (isCancelled) return;

            completedAssets += 1;
            setLoadedAssets(completedAssets);

            if (completedAssets >= totalAssets) {
                setIsLoading(false);
            }
        };

        const createPreloadLink = (src, type) => {
            const link = document.createElement("link");
            link.rel = "preload";
            link.as = type;
            link.href = src;

            document.head.appendChild(link);
            cleanupLinks.push(link);

            return link;
        };

        const idleHandle = scheduleIdleWork(() => {
            if (isCancelled) return;

            if (totalAssets === 0) {
                setIsLoading(false);
                return;
            }

            images.forEach((src) => {
                createPreloadLink(src, "image");

                const image = new Image();
                image.decoding = "async";

                image.onload = markAssetComplete;
                image.onerror = markAssetComplete;
                image.src = src;

                imageCache.push(image);
            });

            videos.forEach((src, index) => {
                createPreloadLink(src, "video");

                const timeout = window.setTimeout(() => {
                    if (isCancelled) return;

                    const video = document.createElement("video");

                    video.preload = "auto";
                    video.muted = true;
                    video.playsInline = true;
                    video.src = src;

                    let hasCompleted = false;

                    const completeOnce = () => {
                        if (hasCompleted) return;
                        hasCompleted = true;
                        markAssetComplete();
                    };

                    video.oncanplaythrough = completeOnce;
                    video.oncanplay = completeOnce;
                    video.onerror = completeOnce;

                    video.load();

                    videoCache.push(video);
                }, index * videoDelay);

                timeouts.push(timeout);
            });
        });

        return () => {
            isCancelled = true;

            cancelIdleWork(idleHandle);

            timeouts.forEach((timeout) => {
                window.clearTimeout(timeout);
            });

            cleanupLinks.forEach((link) => {
                link.remove();
            });

            imageCache.forEach((image) => {
                image.onload = null;
                image.onerror = null;
            });

            videoCache.forEach((video) => {
                video.oncanplaythrough = null;
                video.oncanplay = null;
                video.onerror = null;

                // Do not aggressively clear src here.
                // Let the browser keep the cached video data where possible.
                video.pause();
            });
        };
    }, [images, videos, totalAssets, videoDelay]);

    if (!isLoading) {
        return null;
    }

    return (
        <Box
            sx={{
                position: "fixed",
                inset: 0,
                zIndex: 10000,
                bgcolor: backgroundColor,
                color: textColor,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "1.25rem",
                pointerEvents: "auto",
            }}
        >
            <Typography
                fontFamily="PlayPretend"
                sx={{
                    fontSize: "clamp(2rem, 6vw, 5rem)",
                    letterSpacing: 0,
                }}
            >
                {title}
            </Typography>

            <Box
                sx={{
                    width: "min(28rem, 70vw)",
                    height: "0.6rem",
                    bgcolor: "rgba(255,255,255,0.18)",
                    overflow: "hidden",
                }}
            >
                <Box
                    sx={{
                        width: `${progress}%`,
                        height: "100%",
                        bgcolor: accentColor,
                        transition: "width 0.2s ease-out",
                    }}
                />
            </Box>

            <Typography fontFamily="PointRegular" sx={{ opacity: 0.75 }}>
                {progress}%
            </Typography>
        </Box>
    );
}
