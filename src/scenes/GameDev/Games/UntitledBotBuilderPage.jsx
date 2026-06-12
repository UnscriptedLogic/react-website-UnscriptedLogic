import BasicTemplateBlog from "./BasicTemplateBlog";
import botBuilder_image from "/uidesign/botBuilder/botBuilder_Image5.png";
import { untitledBotBuilderBlog } from "../../../blogs/UntitledBotBuilder";

export const UntitledBotBuilderPage = () => {
    return (
        <BasicTemplateBlog
            title="Untitled Bot Builder"
            heroImage={botBuilder_image}
            heroAlt="Unscripted Duels"
            themeColor="#8f2438"
            blog={untitledBotBuilderBlog}
        />
    );
};
