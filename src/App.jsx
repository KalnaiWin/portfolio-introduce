import { Route, Routes } from "react-router";
import StartScreen from "./components/section/StartScreen";
import DesktopScreen from "./components/section/DesktopScreen";
import GameSection from "./components/section/GameSection";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<StartScreen />} />
        <Route path="/desktop" element={<DesktopScreen />} />
        <Route path="/cs2" element={<GameSection />} />
      </Routes>
    </div>
  );
};

export default App;
