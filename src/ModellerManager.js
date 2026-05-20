import { GSProject } from "./GSProgrammerManager";
import {
    aprThumbnail,
    aprVideo,
    mmThumbnail,
    mm_graphics,
    rotr_video,
    rotr_image1,
    rotr_image2,
    rotr_image3,
    rotr_image4,
    unnamedTDIcon,
    utd_video,
} from "./AssetRoutes";

export const ModellingProjects = [
    new GSProject({
        name: "MagicaVoxel: The First Experience",
        desc: "A prototype Honkai: Star Rail and Chess mashup. \n\nI took the time to expand my 3D modelling toolkit to MagicaVoxel which I had a blast using. Modelled and textured in MagicaVoxel, vertices clean up, rigged and animated in Blender.",
        thumbnail: rotr_image4,
        video: rotr_video,
        details:
            "Picking up on my previous addiction to Trove and Minecraft, creating Voxel characters and worlds is insanely fun. Not because I was bad at modelling natural things (I still am) but because I am strangely drawn to this art style and direction. \n\nI can't really put my finger on it as to why I like low poly and voxels so much. Maybe it's because I grew up with Roblox and it's Lego-esque art style.\n\nThe original idea started out with an old prototype of Honkai: Star Rail's turn system with chess. Then I layered over some models and the simple conditional ability triggers of Super Auto Pets. \n\n[Existing Mechanics]\n-Swordsman(Knight) would deal a second instance of damage called 'Bleed' after the initial hit\n-Archers(Bishop) would deal damage that scales with range\n-Gardener(Rook) Heals any ally that took damage within their line of sight\n\nThe whole idea was to play around chess' positional tactics like how positioning your team in Super Auto Pets was just as vital. The project sits in my hard drive, unfinished, due to shiny object syndrome. Sigh...",
        detailImages: [
            {
                src: rotr_image1,
                caption:
                    "Testing of lighting and scale with the main character and environment models.",
            },
            {
                src: rotr_image2,
                caption:
                    "Environment design of the fighting level. \n\nInspired by Trove's starting area.",
            },
            {
                src: rotr_image3,
                caption:
                    "Character design and animation pose for combat animations.",
            },
            {
                src: rotr_image4,
                caption: 'Turntable of character in MagicaVoxel. "The Knight"',
            },
        ],
    }),
    new GSProject({
        name: "Everyday Items(?)",
        desc: "A whole batch of random items. That's what defines a Rube Goldberg machine and what Momentum Mayhem was all about. \n\nCoupled with a shader to maintain the same look across all the items, this project was a perfect stepping stone into getting a feel for what it would be like to work on a project with more than a handful of assets.",
        thumbnail: mmThumbnail,
        video: mm_graphics,
    }),
    new GSProject({
        name: "Upgrade Variants",
        desc: "My architectural dreams often boosted my hard surfacing and structural workflows. I just love designing these. So, even though the changes are small, I created variants for my tower defense upgrades.",
        thumbnail: unnamedTDIcon,
        video: utd_video,
    }),
];
