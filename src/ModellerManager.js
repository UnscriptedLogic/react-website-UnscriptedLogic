import { GSProject } from "./GSProgrammerManager";
import {
    aprThumbnail,
    aprVideo,
    mmThumbnail,
    mm_graphics,
    rotr_video,
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
