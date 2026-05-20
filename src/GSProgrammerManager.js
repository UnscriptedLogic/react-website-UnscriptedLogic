import { UIProject } from "./UIDesignManager";
import { Game } from "./GameManager";
import nteThumbnail from "/uidesign/NTERecreation/Thumbnail.png?url";
import aprThumbnail from "/uidesign/autopetracers/apr_thumbnail.png";

import { mmVideo, mmThumbnail, aprVideo } from "./AssetRoutes";

export class GSProject extends Game {
    constructor({
        name,
        desc,
        year,
        thumbnail,
        projectLink,
        genres,
        techUsed,
        blogLink,
        submissionTypes,
        submissionLink,
        displayBlock,
        video,
        details,
        detailImages,
        detailMedia,
        detailVideos,
    }) {
        super(
            name,
            desc,
            year,
            thumbnail,
            projectLink,
            genres,
            techUsed,
            blogLink,
        );
        this.submissionTypes = submissionTypes;
        this.submissionLink = submissionLink;
        this.displayBlock = displayBlock;
        this.video = video;
        this.details = details;
        this.detailImages = detailImages ?? [];
        this.detailMedia = detailMedia ?? [];
        this.detailVideos = detailVideos ?? [];
    }
}

export const GSProjects = [
    new GSProject({
        name: "Complex Racing and Upgrading System",
        desc: "Having the AI run in a way that's predictable and entertaining as well as 45 pets that all contributed to your attributes in different ways proved difficult. However, with the Gameplay Tag System and a little refactor, the system became expandable to fit the needs of the project, sometimes allowing my game designer side to create, balance and re-fit abilities without ever needing to touch the code base.",
        thumbnail: aprThumbnail,
        video: aprVideo,
        details: "Add a deeper project breakdown here with implementation notes, diagrams, images, and videos.",
    }),
    new GSProject({
        name: "Energy Types, Attributes and Build Conditions",
        desc: "'Do you know why this game would be fun at all?' \n\nMomentum Mayhem fundamentally was a pivotal game that I've made as a game designer. By boiling down the game to it's most simplest form, one can extract the very skeleton that enables the experience to be enjoyable.",
        thumbnail: mmThumbnail,
        video: mmVideo,
        details: "Add a deeper project breakdown here with implementation notes, diagrams, images, and videos.",
    }),
];
