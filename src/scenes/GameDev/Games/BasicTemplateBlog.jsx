import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";
import BlogStructure, { BlogBlockType } from "../../../BlogStructure";

const BasicTemplateBlog = ({
    blog,
    blocks,
    title = "",
    heroImage = "",
    heroAlt = "",
    heroHeight = "480px",
    themeColor = "#6464a0",
    maxWidth = "md",
    textColor = "#bfbfcf",
}) => {
    const content = blog ?? blocks ?? [];
    const blogBlocks =
        content instanceof BlogStructure
            ? content.blocks
            : new BlogStructure(content).blocks;

    return (
        <Box
            minHeight="100vh"
            sx={{
                backgroundColor: "#0f0f19",
                backgroundImage: `
                    radial-gradient(${alpha(themeColor, 0.35)} 2px, transparent 2px),
                    linear-gradient(${alpha(themeColor, 0.18)}, ${alpha(
                        themeColor,
                        0.08,
                    )})
                `,
                backgroundSize: "28px 28px, 100% 100%",
            }}
        >
            {heroImage ? (
                <Box
                    position="relative"
                    width="100%"
                    height={heroHeight}
                    overflow="hidden"
                >
                    <Box
                        component="img"
                        src={heroImage}
                        alt={heroAlt}
                        sx={{
                            width: "100%",
                            height: "100%",
                            display: "block",
                            objectFit: "cover",
                            WebkitMaskImage:
                                "linear-gradient(to bottom, black 0%, black 58%, transparent 100%)",
                            maskImage:
                                "linear-gradient(to bottom, black 0%, black 58%, transparent 100%)",
                        }}
                    />
                    <Box
                        position="absolute"
                        inset={0}
                        sx={{
                            background: `linear-gradient(
                                to bottom,
                                ${alpha(themeColor, 0.05)} 35%,
                                ${alpha(themeColor, 0.25)} 68%,
                                transparent 100%
                            )`,
                            WebkitMaskImage:
                                "linear-gradient(to bottom, black 0%, black 65%, transparent 100%)",
                            maskImage:
                                "linear-gradient(to bottom, black 0%, black 65%, transparent 100%)",
                        }}
                    />
                </Box>
            ) : null}

            <Container maxWidth={maxWidth}>
                <Box
                    component="article"
                    position="relative"
                    display="flex"
                    flexDirection="column"
                    gap="24px"
                    paddingBottom="48px"
                    paddingTop={heroImage ? 0 : "24px"}
                    marginTop={heroImage ? "-96px" : 0}
                >
                    {title ? (
                        <Typography
                            fontSize={{ xs: "38px", sm: "50px" }}
                            color="#e5e5ff"
                            lineHeight={1.1}
                            fontFamily="PointBlack"
                            sx={{ textShadow: "3px 3px 6px #000" }}
                        >
                            {title}
                        </Typography>
                    ) : null}

                    {blogBlocks.map((block, index) => {
                        if (block.type === BlogBlockType.PARAGRAPH) {
                            return (
                                <Typography
                                    component="p"
                                    variant="body1"
                                    color={textColor}
                                    fontSize="17px"
                                    whiteSpace="pre-line"
                                    margin={0}
                                    fontFamily={"PointRegular"}
                                    key={`paragraph-${index}`}
                                >
                                    {block.text}
                                </Typography>
                            );
                        }

                        if (block.type === BlogBlockType.HEADER) {
                            return (
                                <Typography
                                    component={`h${block.level}`}
                                    color="#e5e5ff"
                                    fontFamily="PointBlack"
                                    fontSize={
                                        block.level === 2
                                            ? { xs: "30px", sm: "38px" }
                                            : { xs: "24px", sm: "30px" }
                                    }
                                    lineHeight={1.2}
                                    margin="16px 0 0"
                                    paddingBottom="8px"
                                    borderBottom={`2px solid ${alpha(
                                        themeColor,
                                        0.7,
                                    )}`}
                                    key={`header-${index}`}
                                >
                                    {block.text}
                                </Typography>
                            );
                        }

                        if (block.type === BlogBlockType.QUOTE) {
                            return (
                                <Box
                                    component="blockquote"
                                    margin={0}
                                    padding="20px 24px"
                                    borderLeft={`5px solid ${themeColor}`}
                                    borderRadius="0 10px 10px 0"
                                    sx={{
                                        backgroundColor: alpha(
                                            themeColor,
                                            0.16,
                                        ),
                                    }}
                                    key={`quote-${index}`}
                                >
                                    <Typography
                                        color="#e5e5ff"
                                        fontFamily="PointRegular"
                                        fontSize={{ xs: "18px", sm: "18px" }}
                                        fontStyle="italic"
                                        whiteSpace="pre-line"
                                    >
                                        &ldquo;{block.text}&rdquo;
                                    </Typography>
                                    {block.attribution || block.source ? (
                                        <Typography
                                            component="footer"
                                            color={textColor}
                                            fontFamily="PointRegular"
                                            fontSize="14px"
                                            marginTop="12px"
                                        >
                                            {block.attribution
                                                ? `- ${block.attribution}`
                                                : ""}
                                            {block.attribution && block.source
                                                ? ", "
                                                : ""}
                                            {block.source}
                                        </Typography>
                                    ) : null}
                                </Box>
                            );
                        }

                        const isVideo = block.type === BlogBlockType.VIDEO;

                        return (
                            <Box
                                component="figure"
                                display="flex"
                                flexDirection="column"
                                alignItems="center"
                                gap="8px"
                                margin={0}
                                key={`${block.type}-${index}`}
                            >
                                {isVideo ? (
                                    <Box
                                        component="video"
                                        src={block.src}
                                        controls={block.controls}
                                        autoPlay={block.autoPlay}
                                        loop={block.loop}
                                        muted={block.muted}
                                        poster={block.poster || undefined}
                                        preload={block.preload}
                                        playsInline
                                        sx={{
                                            display: "block",
                                            width: block.width,
                                            height: block.height,
                                            maxWidth: "100%",
                                            borderRadius: "10px",
                                            boxShadow: "0 0 3px",
                                        }}
                                    />
                                ) : (
                                    <Box
                                        component="img"
                                        src={block.src}
                                        alt={block.alt}
                                        sx={{
                                            display: "block",
                                            width: block.width,
                                            height: block.height,
                                            maxWidth: "100%",
                                            objectFit: block.objectFit,
                                            borderRadius: "10px",
                                            boxShadow: "0 0 3px",
                                        }}
                                    />
                                )}
                                {block.caption ? (
                                    <Typography
                                        component="figcaption"
                                        color={textColor}
                                        fontSize="12px"
                                        fontStyle="italic"
                                        textAlign="center"
                                    >
                                        {block.caption}
                                    </Typography>
                                ) : null}
                            </Box>
                        );
                    })}
                </Box>
            </Container>
        </Box>
    );
};

export default BasicTemplateBlog;
