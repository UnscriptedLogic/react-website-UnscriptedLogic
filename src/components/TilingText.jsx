import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function TilingText({
    text = "AUTO PET RACERS",
    rows = 12,
    speed = 100,
    angle = -15,
    opacity = 0.08,
    fontSize = "4rem",
    fontFamily = "PlayPretend",
    fontWeight = "",
    gap = "4rem",
    outlined = false,
    color = "white",
}) {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const rows = gsap.utils.toArray(".tiling-text-track");

            rows.forEach((row, index) => {
                const firstChild = row.children[0];

                if (!firstChild) return;

                const contentWidth = firstChild.offsetWidth;

                const direction = index % 2 === 0 ? -1 : 1;

                gsap.set(row, {
                    x: direction === 1 ? -contentWidth : 0,
                });

                gsap.to(row, {
                    x: direction === 1 ? 0 : -contentWidth,

                    duration: contentWidth / speed,

                    ease: "none",
                    repeat: -1,
                });
            });
        }, containerRef);

        return () => ctx.revert();
    }, [speed]);

    const repeatedText = Array(20).fill(`${text}`).join(" ");

    return (
        <div
            ref={containerRef}
            style={{
                zIndex: -1,
                position: "fixed",
                inset: 0,
                overflow: "hidden",
                pointerEvents: "none",

                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                opacity,

                transform: `rotate(${angle}deg) scale(1.5)`,
            }}
        >
            {Array.from({ length: rows }).map((_, i) => (
                <div
                    key={i}
                    style={{
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                    }}
                >
                    <div
                        className="tiling-text-track"
                        style={{
                            display: "flex",
                            width: "fit-content",
                        }}
                    >
                        {/* DUPLICATE CONTENT */}
                        {[0, 1].map((copy) => (
                            <div
                                key={copy}
                                style={{
                                    display: "flex",
                                    flexShrink: 0,
                                }}
                            >
                                <span
                                    style={{
                                        paddingRight: gap,

                                        fontSize,
                                        fontWeight: fontWeight,
                                        fontFamily: fontFamily,
                                        textTransform: "uppercase",
                                        letterSpacing: "0.1em",

                                        color: outlined ? "transparent" : color,

                                        WebkitTextStroke: outlined
                                            ? `1px ${color}`
                                            : "0px transparent",
                                    }}
                                >
                                    {repeatedText}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
