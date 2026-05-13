import {
    GameDevTitleSection,
    GamesSection,
    GameWorkExperience,
    EducationSection,
    Navbar,
    Footer,
} from "../../ImportRoutes";

function GameDevHome() {
    return (
        <div className="GameDevHome">
            <Navbar></Navbar>
            <GameDevTitleSection></GameDevTitleSection>
            <GamesSection></GamesSection>
            <GameWorkExperience></GameWorkExperience>
            <EducationSection></EducationSection>
            <Footer></Footer>
        </div>
    );
}

export default GameDevHome;
