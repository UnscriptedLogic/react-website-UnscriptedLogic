import {
  GameDevTitleSection,
  GamesSection,
  GameWorkExperience,
  EducationSection,
  Footer,
} from "../../ImportRoutes";

function GameDevHome() {
  return (
    <div className="GameDevHome">
      <GameDevTitleSection></GameDevTitleSection>
      <GamesSection></GamesSection>
      <GameWorkExperience></GameWorkExperience>
      <EducationSection></EducationSection>
      <Footer></Footer>
    </div>
  );
}

export default GameDevHome;
