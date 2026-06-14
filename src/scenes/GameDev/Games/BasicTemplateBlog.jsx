import React from "react";
import { Box, Chip, Container, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";
import BlogStructure, { BlogBlockType } from "../../../BlogStructure";

const createSectionSlug = (text) =>
    String(text)
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "") || "section";

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
    const blogContent =
        content instanceof BlogStructure
            ? content
            : new BlogStructure(content);
    const blogBlocks = blogContent.blocks;
    const blogTags = blogContent.tags;
    const sectionIds = new Map();
    const sectionNameCounts = new Map();
    const sections = blogBlocks.flatMap((block, index) => {
        const isHeading =
            block.type === BlogBlockType.HEADER ||
            block.type === BlogBlockType.SUBHEADER;

        if (!isHeading) {
            return [];
        }

        const slug = createSectionSlug(block.text);
        const occurrence = (sectionNameCounts.get(slug) ?? 0) + 1;
        const id = occurrence === 1 ? slug : `${slug}-${occurrence}`;

        sectionNameCounts.set(slug, occurrence);
        sectionIds.set(index, id);

        return [
            {
                id,
                text: block.text,
                level: block.level,
            },
        ];
    });

    const scrollToSection = (event, id) => {
        event.preventDefault();
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
        window.history.replaceState(null, "", `#${id}`);
    };

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

            <Container maxWidth="xl">
                <Box
                    position="relative"
                    display="grid"
                    gridTemplateColumns={{
                        xs: "minmax(0, 1fr)",
                        xl: "220px minmax(0, 1fr)",
                    }}
                    gap={{ xs: 0, xl: "40px" }}
                    paddingTop={heroImage ? 0 : "24px"}
                    marginTop={heroImage ? "-96px" : 0}
                >
                    {sections.length > 0 ? (
                        <Box
                            component="nav"
                            aria-label="Blog sections"
                            display={{ xs: "none", xl: "block" }}
                            gridColumn="1"
                            gridRow="1"
                            position="sticky"
                            top="24px"
                            alignSelf="start"
                            maxHeight="calc(100vh - 48px)"
                            overflow="auto"
                            padding="18px"
                            border={`1px solid ${alpha(themeColor, 0.45)}`}
                            borderRadius="10px"
                            sx={{
                                backgroundColor: alpha("#0f0f19", 0.88),
                                backdropFilter: "blur(8px)",
                            }}
                        >
                            <Typography
                                color="#e5e5ff"
                                fontFamily="PointBlack"
                                fontSize="16px"
                                marginBottom="12px"
                            >
                                On this page
                            </Typography>
                            <Box
                                component="ul"
                                display="flex"
                                flexDirection="column"
                                gap="10px"
                                margin={0}
                                padding={0}
                                sx={{ listStyle: "none" }}
                            >
                                {sections.map((section) => (
                                    <Box
                                        component="li"
                                        key={section.id}
                                        paddingLeft={
                                            section.level > 2 ? "12px" : 0
                                        }
                                    >
                                        <Box
                                            component="a"
                                            href={`#${section.id}`}
                                            onClick={(event) =>
                                                scrollToSection(
                                                    event,
                                                    section.id,
                                                )
                                            }
                                            color={textColor}
                                            fontFamily="PointRegular"
                                            fontSize={
                                                section.level > 2
                                                    ? "13px"
                                                    : "14px"
                                            }
                                            lineHeight={1.3}
                                            sx={{
                                                display: "block",
                                                textDecoration: "none",
                                                transition:
                                                    "color 150ms ease, transform 150ms ease",
                                                "&:hover, &:focus-visible": {
                                                    color: "#ffffff",
                                                    transform:
                                                        "translateX(3px)",
                                                },
                                            }}
                                        >
                                            {section.text}
                                        </Box>
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    ) : null}

                    <Container
                        component="article"
                        maxWidth={maxWidth}
                        disableGutters
                        sx={{
                            gridColumn: { xs: "1", xl: "1 / -1" },
                            gridRow: "1",
                            justifySelf: "center",
                            display: "flex",
                            flexDirection: "column",
                            gap: "24px",
                            minWidth: 0,
                            paddingBottom: "48px",
                        }}
                    >
                        {title || blogTags.length > 0 ? (
                            <Box
                                display="flex"
                                flexDirection="column"
                                alignItems="flex-start"
                                gap="12px"
                            >
                                {title ? (
                                    <Typography
                                        fontSize={{ xs: "38px", sm: "50px" }}
                                        color="#e5e5ff"
                                        lineHeight={1.1}
                                        fontFamily="PointBlack"
                                        sx={{
                                            textShadow: "3px 3px 6px #000",
                                        }}
                                    >
                                        {title}
                                    </Typography>
                                ) : null}

                                {blogTags.length > 0 ? (
                                    <Box
                                        display="flex"
                                        flexWrap="wrap"
                                        gap="8px"
                                        aria-label="Blog topics"
                                    >
                                        {blogTags.map((tag) => (
                                            <Chip
                                                key={tag}
                                                label={tag}
                                                size="small"
                                                sx={{
                                                    height: "24px",
                                                    border: `1px solid ${alpha(
                                                        themeColor,
                                                        0.8,
                                                    )}`,
                                                    backgroundColor: alpha(
                                                        themeColor,
                                                        0.28,
                                                    ),
                                                    color: "#ffffff",
                                                    fontFamily: "PointRegular",
                                                    fontSize: "12px",
                                                    textTransform: "capitalize",
                                                    boxShadow:
                                                        "0 2px 6px rgba(0, 0, 0, 0.35)",
                                                    "& .MuiChip-label": {
                                                        paddingX: "10px",
                                                    },
                                                }}
                                            />
                                        ))}
                                    </Box>
                                ) : null}
                            </Box>
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
                                    id={sectionIds.get(index)}
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
                                    sx={{ scrollMarginTop: "24px" }}
                                    key={`header-${index}`}
                                >
                                    {block.text}
                                </Typography>
                            );
                        }

                        if (block.type === BlogBlockType.SUBHEADER) {
                            return (
                                <Typography
                                    id={sectionIds.get(index)}
                                    component={`h${block.level}`}
                                    color="#e5e5ff"
                                    fontFamily="PointBlack"
                                    fontSize={{ xs: "21px", sm: "26px" }}
                                    lineHeight={1.25}
                                    margin="8px 0 0"
                                    sx={{ scrollMarginTop: "24px" }}
                                    key={`subheader-${index}`}
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
                        const isYouTube =
                            block.type === BlogBlockType.YOUTUBE;

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
                                {isYouTube ? (
                                    <Box
                                        component="iframe"
                                        src={block.src}
                                        title={block.title}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen={block.allowFullScreen}
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        sx={{
                                            display: "block",
                                            width: block.width,
                                            maxWidth: "100%",
                                            aspectRatio: block.aspectRatio,
                                            border: 0,
                                            borderRadius: "10px",
                                            boxShadow: "0 0 3px",
                                        }}
                                    />
                                ) : isVideo ? (
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
                    </Container>
                </Box>
            </Container>
        </Box>
    );
};

export default BasicTemplateBlog;
