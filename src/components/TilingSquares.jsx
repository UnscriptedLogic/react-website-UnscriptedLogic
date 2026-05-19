import { Box } from "@mui/material";

export default function TilingSquares({
    rows = 8,
    speed = 24,
    angle = -15,
    opacity = 0.08,
    rectangleWidth = 360,
    rectangleHeight = 180,
    gap = 32,
    rowGap = 180,
    color = "white",
    position = "fixed",
    zIndex = -1,
    sx = {},
}) {
    const period = rectangleWidth + gap;

    return (
        <Box
            sx={{
                position,
                inset: 0,
                overflow: "hidden",
                pointerEvents: "none",
                zIndex,
                opacity,
                ...sx,
            }}
        >
            <style>
                {`
                    @keyframes tiling-squares-left {
                        from { background-position-x: 0px; }
                        to { background-position-x: calc(var(--tiling-square-period) * -1px); }
                    }

                    @keyframes tiling-squares-right {
                        from { background-position-x: 0px; }
                        to { background-position-x: calc(var(--tiling-square-period) * 1px); }
                    }
                `}
            </style>
            <Box
                sx={{
                    position: "absolute",
                    inset: "-35%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    gap: `${rowGap}px`,
                    transform: `rotate(${angle}deg) scale(1.35)`,
                    transformOrigin: "center",
                }}
            >
                {Array.from({ length: rows }).map((_, index) => (
                    <Box
                        key={index}
                        sx={{
                            "--tiling-square-period": period,
                            height: `${rectangleHeight}px`,
                            flexShrink: 0,
                            backgroundImage: `repeating-linear-gradient(90deg, ${color} 0 ${rectangleWidth}px, transparent ${rectangleWidth}px ${period}px)`,
                            backgroundRepeat: "repeat-x",
                            animation: `${
                                index % 2 === 0
                                    ? "tiling-squares-left"
                                    : "tiling-squares-right"
                            } ${period / speed}s linear infinite`,
                        }}
                    />
                ))}
            </Box>
        </Box>
    );
}
