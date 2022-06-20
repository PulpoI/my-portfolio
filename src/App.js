import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./components/Main/Main";
import video from "./assets/202206012002.mp4";
import Perfil from "./components/Perfil/Perfil";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Screening from "./components/Screening/Screening";

function App() {
  return (
    <div className="app">
      <video
        autoplay="autoplay"
        loop="loop"
        muted
        defaultMuted
        playsinline
        preload="auto"
        className="video"
        width={200}
      >
        <source src={video} type="video/mp4" />
      </video>
      <div className="capa"></div>
      <Routes>
        <Route exact path="/" element={<Main render={<Perfil />} />} />
        <Route exact path="/about" element={<Main render={<About />} />} />
        <Route
          exact
          path="/projects"
          element={<Main render={<Projects />} />}
        />
        <Route exact path="/screening" element={<Screening />} />
      </Routes>
    </div>
  );
}

export default App;
