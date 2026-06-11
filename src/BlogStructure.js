export const BlogBlockType = Object.freeze({
    PARAGRAPH: "paragraph",
    HEADER: "header",
    QUOTE: "quote",
    IMAGE: "image",
    VIDEO: "video",
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

export class BlogStructure {
    constructor(blocks = []) {
        if (!Array.isArray(blocks)) {
            throw new TypeError(
                "BlogStructure expects an array of blog blocks.",
            );
        }

        this.blocks = blocks.map(BlogStructure.normalizeBlock);
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

    static quote(text, options = {}) {
        return new BlogQuote(text, options);
    }

    static image(src, options = {}) {
        return new BlogImage(src, options);
    }

    static video(src, options = {}) {
        return new BlogVideo(src, options);
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

        if (block instanceof BlogHeader) {
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

        throw new TypeError(
            "Each blog block must be a string, BlogHeader, BlogQuote, BlogImage, BlogVideo, or a supported block object.",
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
}

export default BlogStructure;
