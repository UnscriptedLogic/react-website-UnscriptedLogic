import BasicTemplateBlog from "./BasicTemplateBlog";
import { unscriptedDuelsBlog } from "../../../blogs/UnscriptedDuelsBlog";
import { aprMainUI, aprThumbnail } from "../../../AssetRoutes";
import unscriptedDuelsHero from "/uidesign/unscriptedduels/UnscriptedDuelsThumbnail.png";
import { AutoPetRacersBlogData } from "../../../blogs/AutoPetRacers";

export const AutoPetRacersBlog = () => {
    return (
        <BasicTemplateBlog
            title="Auto Pet Racers"
            heroImage={aprMainUI}
            heroAlt="Auto Pet Racers"
            themeColor="#838a3e"
            blog={AutoPetRacersBlogData}
        />
    );
};
