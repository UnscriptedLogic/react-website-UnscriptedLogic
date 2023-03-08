import "./App.css";
import Navbar from "./components/Navbar";
import TitleSection from "./components/TitleSection";
import GamesSection from "./components/GamesSection";
import EducationSection from "./components/EducationSection";
import Footer from "./components/Footer";

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
