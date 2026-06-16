export const BlogBlockType = Object.freeze({
    PARAGRAPH: "paragraph",
    HEADER: "header",
    SUBHEADER: "subheader",
    QUOTE: "quote",
    IMAGE: "image",
    VIDEO: "video",
    YOUTUBE: "youtube",
});

export const BlogTopic = Object.freeze({
    GAME_DESIGN: "game design",
    NETWORKING: "networking",
    GAME_PROGRAMMING: "Game Programming",
    SOLO_GAME_DEVELOPMENT: "solo game development",
    AI_PROGRAMMING: "AI programming",
    UNREAL_ENGINE: "Unreal Engine",
    GAME_PRODUCTION: "game production",
});

export class BlogHeader {
    constructor(text, { level = 2 } = {}) {
        const normalizedLevel = Number(level);

        if (!text) {
            throw new Error("A blog header requires text.");
        }

        if (normalizedLevel < 2 || normalizedLevel > 6) {
            throw new RangeError(
                "A blog header level must be between 2 and 6.",
            );
        }

        this.type = BlogBlockType.HEADER;
        this.text = String(text);
        this.level = normalizedLevel;
    }
}

export class BlogSubheader {
    constructor(text, { level = 3 } = {}) {
        const normalizedLevel = Number(level);

        if (!text) {
            throw new Error("A blog subheader requires text.");
        }

        if (normalizedLevel < 3 || normalizedLevel > 6) {
            throw new RangeError(
                "A blog subheader level must be between 3 and 6.",
            );
        }

        this.type = BlogBlockType.SUBHEADER;
        this.text = String(text);
        this.level = normalizedLevel;
    }
}

export class BlogQuote {
    constructor(text, { attribution = "", source = "" } = {}) {
        if (!text) {
            throw new Error("A blog quote requires text.");
        }

        this.type = BlogBlockType.QUOTE;
        this.text = String(text);
        this.attribution = attribution;
        this.source = source;
    }
}

export class BlogImage {
    constructor(
        src,
        {
            alt = "",
            caption = "",
            width = "100%",
            height = "auto",
            objectFit = "contain",
        } = {},
    ) {
        if (!src) {
            throw new Error("A blog image requires a src value.");
        }

        this.type = BlogBlockType.IMAGE;
        this.src = src;
        this.alt = alt;
        this.caption = caption;
        this.width = width;
        this.height = height;
        this.objectFit = objectFit;
    }
}

export class BlogVideo {
    constructor(
        src,
        {
            caption = "",
            width = "100%",
            height = "auto",
            controls = true,
            autoPlay = false,
            loop = false,
            muted = false,
            poster = "",
            preload = "metadata",
        } = {},
    ) {
        if (!src) {
            throw new Error("A blog video requires a src value.");
        }

        this.type = BlogBlockType.VIDEO;
        this.src = src;
        this.caption = caption;
        this.width = width;
        this.height = height;
        this.controls = controls;
        this.autoPlay = autoPlay;
        this.loop = loop;
        this.muted = muted;
        this.poster = poster;
        this.preload = preload;
    }
}

const getYouTubeVideoId = (link) => {
    let url;

    try {
        url = new URL(link);
    } catch {
        throw new TypeError("A YouTube block requires a valid YouTube link.");
    }

    const hostname = url.hostname.toLowerCase().replace(/^www\./, "");
    let videoId = "";

    if (hostname === "youtu.be") {
        videoId = url.pathname.split("/").filter(Boolean)[0] ?? "";
    } else if (
        hostname === "youtube.com" ||
        hostname === "m.youtube.com" ||
        hostname === "youtube-nocookie.com"
    ) {
        const pathParts = url.pathname.split("/").filter(Boolean);

        if (url.pathname === "/watch") {
            videoId = url.searchParams.get("v") ?? "";
        } else if (["embed", "shorts", "live"].includes(pathParts[0])) {
            videoId = pathParts[1] ?? "";
        }
    }

    if (!/^[a-zA-Z0-9_-]{11}$/.test(videoId)) {
        throw new TypeError(
            "The YouTube link does not contain a valid video ID.",
        );
    }

    return videoId;
};

export class BlogYouTube {
    constructor(
        link,
        {
            caption = "",
            title = "YouTube video player",
            width = "100%",
            aspectRatio = "16 / 9",
            allowFullScreen = true,
        } = {},
    ) {
        if (!link) {
            throw new Error("A YouTube block requires a link.");
        }

        const videoId = getYouTubeVideoId(link);

        this.type = BlogBlockType.YOUTUBE;
        this.link = link;
        this.src = `https://www.youtube-nocookie.com/embed/${videoId}`;
        this.caption = caption;
        this.title = title;
        this.width = width;
        this.aspectRatio = aspectRatio;
        this.allowFullScreen = allowFullScreen;
    }
}

export class BlogStructure {
    constructor(blocks = [], { tags = [] } = {}) {
        if (!Array.isArray(blocks)) {
            throw new TypeError(
                "BlogStructure expects an array of blog blocks.",
            );
        }

        this.blocks = blocks.map(BlogStructure.normalizeBlock);
        this.tags = BlogStructure.normalizeTags(tags);
    }

    static normalizeTag(tag) {
        return String(tag).trim().toLowerCase().replace(/\s+/g, " ");
    }

    static normalizeTags(tags) {
        if (!Array.isArray(tags)) {
            throw new TypeError("BlogStructure tags must be an array.");
        }

        return [
            ...new Set(tags.map(BlogStructure.normalizeTag).filter(Boolean)),
        ];
    }

    hasTag(tag) {
        return this.tags.includes(BlogStructure.normalizeTag(tag));
    }

    addTag(tag) {
        const normalizedTag = BlogStructure.normalizeTag(tag);

        if (normalizedTag && !this.tags.includes(normalizedTag)) {
            this.tags.push(normalizedTag);
        }

        return this;
    }

    removeTag(tag) {
        const normalizedTag = BlogStructure.normalizeTag(tag);
        this.tags = this.tags.filter(
            (existingTag) => existingTag !== normalizedTag,
        );
        return this;
    }

    static paragraph(text) {
        return {
            type: BlogBlockType.PARAGRAPH,
            text: String(text),
        };
    }

    static header(text, options = {}) {
        return new BlogHeader(text, options);
    }

    static subheader(text, options = {}) {
        return new BlogSubheader(text, options);
    }

    static quote(text, options = {}) {
        return new BlogQuote(text, options);
    }

    static image(src, options = {}) {
        return new BlogImage(src, options);
    }

    static video(src, options = {}) {
        return new BlogVideo(src, options);
    }

    static youtube(link, options = {}) {
        return new BlogYouTube(link, options);
    }

    static normalizeBlock(block) {
        if (typeof block === "string") {
            return BlogStructure.paragraph(block);
        }

        if (block instanceof BlogImage) {
            return block;
        }

        if (block instanceof BlogVideo) {
            return block;
        }

        if (block instanceof BlogYouTube) {
            return block;
        }

        if (block instanceof BlogHeader) {
            return block;
        }

        if (block instanceof BlogSubheader) {
            return block;
        }

        if (block instanceof BlogQuote) {
            return block;
        }

        if (block?.type === BlogBlockType.PARAGRAPH) {
            return BlogStructure.paragraph(block.text ?? "");
        }

        if (block?.type === BlogBlockType.HEADER) {
            const { text, type, ...options } = block;
            return BlogStructure.header(text, options);
        }

        if (block?.type === BlogBlockType.SUBHEADER) {
            const { text, type, ...options } = block;
            return BlogStructure.subheader(text, options);
        }

        if (block?.type === BlogBlockType.QUOTE) {
            const { text, type, ...options } = block;
            return BlogStructure.quote(text, options);
        }

        if (block?.type === BlogBlockType.IMAGE) {
            const { src, type, ...options } = block;
            return BlogStructure.image(src, options);
        }

        if (block?.type === BlogBlockType.VIDEO) {
            const { src, type, ...options } = block;
            return BlogStructure.video(src, options);
        }

        if (block?.type === BlogBlockType.YOUTUBE) {
            const { link, src, type, ...options } = block;
            return BlogStructure.youtube(link ?? src, options);
        }

        throw new TypeError(
            "Each blog block must be a string, BlogHeader, BlogSubheader, BlogQuote, BlogImage, BlogVideo, BlogYouTube, or a supported block object.",
        );
    }

    addParagraph(text) {
        this.blocks.push(BlogStructure.paragraph(text));
        return this;
    }

    addHeader(text, options = {}) {
        this.blocks.push(BlogStructure.header(text, options));
        return this;
    }

    addSubheader(text, options = {}) {
        this.blocks.push(BlogStructure.subheader(text, options));
        return this;
    }

    addQuote(text, options = {}) {
        this.blocks.push(BlogStructure.quote(text, options));
        return this;
    }

    addImage(src, options = {}) {
        this.blocks.push(BlogStructure.image(src, options));
        return this;
    }

    addVideo(src, options = {}) {
        this.blocks.push(BlogStructure.video(src, options));
        return this;
    }

    addYouTube(link, options = {}) {
        this.blocks.push(BlogStructure.youtube(link, options));
        return this;
    }
}

export default BlogStructure;
