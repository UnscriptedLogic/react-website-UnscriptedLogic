import Navbar from "../../components/Navbar";
import TitleSection from "./GameDevTitleSection";
import GamesSection from "./GamesSection";
import EducationSection from "../EducationSection";
import Footer from "../../components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <TitleSection></TitleSection>
      <GamesSection></GamesSection>
      <EducationSection></EducationSection>
      <Footer></Footer>
    </div>
  );
}

export default App;
