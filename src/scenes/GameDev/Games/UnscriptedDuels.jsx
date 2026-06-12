import BasicTemplateBlog from "./BasicTemplateBlog";
import { unscriptedDuelsBlog } from "../../../blogs/UnscriptedDuelsBlog";
import unscriptedDuelsHero from "/uidesign/unscriptedduels/UnscriptedDuelsThumbnail.png";

export const UnscriptedDuelsBlog = () => {
    return (
        <BasicTemplateBlog
            title="Unscripted Duels"
            heroImage={unscriptedDuelsHero}
            heroAlt="Unscripted Duels"
            themeColor="#8f2438"
            blog={unscriptedDuelsBlog}
        />
    );
};
