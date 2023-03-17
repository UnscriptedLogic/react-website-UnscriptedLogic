import {
  GameDevTitleSection,
  GamesSection,
  GameWorkExperience,
  EducationSection,
} from "../../ImportRoutes";

function GameDevHome() {
  return (
    <div className="GameDevHome">
      <GameDevTitleSection></GameDevTitleSection>
      <GamesSection></GamesSection>
      <GameWorkExperience></GameWorkExperience>
      <EducationSection></EducationSection>
    </div>
  );
}

export default GameDevHome;
