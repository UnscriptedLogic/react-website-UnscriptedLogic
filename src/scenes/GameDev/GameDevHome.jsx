import Navbar from "../Navbar";
import TitleSection from "./GameDevTitleSection";
import GamesSection from "./GamesSection";
import EducationSection from "../EducationSection";
import GameWorkExperience from "./GameWorkExperience";
import Footer from "../Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <TitleSection></TitleSection>
      <GamesSection></GamesSection>
      <GameWorkExperience></GameWorkExperience>
      <EducationSection></EducationSection>
      <Footer></Footer>
    </div>
  );
}

export default App;
