import { Game } from "./GameManager";
import {
    autopetracers,
    nteRecreation,
    tutorials,
} from "./scenes/UIDesigner/uiProjectComponents";
import nteThumbnail from "/uidesign/NTERecreation/Thumbnail.png?url";
import tutorialThumbnail from "/uidesign/Tutorials/TransitionThumbnail.png?url";
import aprThumbnail from "/uidesign/autopetracers/apr_thumbnail.png?url";
import mmThumbnail from "/uidesign/momentummayhem/mm_thumbnail.png?url";

export class UIProject extends Game {
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
        displayComponent,
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
        this.displayComponent = displayComponent;
    }
}

export const UIProjects = [
    new UIProject({
        name: "NTE: Recreation",
        desc: "To further hone and develop my skills in UI animation and design, I looked to games like Neverness To Everness and Mihoyo's games for inspiration as they feature UI designs that I really like. \n\nIt's here where I started adopting the concept of layered transitions which is simlpy the process of creating a whole widget for transitions and firing an event during the apex of the transition to instantiate the UI required, allowing for re-usability and rapid development.",
        thumbnail: nteThumbnail,
        displayComponent: nteRecreation,
    }),
    new UIProject({
        name: "YouTube Tutorials",
        desc: "The lack of good Unreal Engine 5 UI design and animation tutorials was evident during the development of Auto Pet Racers. So I started making some in my sandbox project. \n\nHere I stocked up on useful functions, libraries and techniques that will aid me in UI shaders and design in whatever project I take part in. Things like primitive shape shaders for lesser texture draw overhead and for finer details, tiling and UV manipulation and anti-stretching techniques regardless the screen size.\n\nAnd why not share some with the rest of the world while I'm at it?",
        thumbnail: tutorialThumbnail,
        displayComponent: tutorials,
    }),
    new UIProject({
        name: "Auto Pet Racers",
        desc: `A Steam released Unreal Engine 5 project that features one of my better UI practices. Utilizing the tweening library XI Tween, this project contains transitions, particles, shaders and camera animations to enable the overall UI experience. I learned a lot in practical use cases of Ui animations and this is still my favourite project in terms of UI.

        Special thanks to Game Dev Guild for hosting public play test sessions that enabled me to gather valuable information from real players infront of me as well as from other local game developers during the development of this project.
        `,
        thumbnail: aprThumbnail,
        displayComponent: autopetracers,
    }),
    // new UIProject({
    //     name: "Momentum Mayhem",
    //     desc: "Dynamic camera shots and UI trails. This was my first Steam game and the first project I took UI seriously.",
    //     thumbnail: mmThumbnail,
    // }),
];
