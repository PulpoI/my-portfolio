import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import Main from "./components/Main/Main";
import video from "./assets/202206012002.mp4";
import Perfil from "./components/Perfil/Perfil";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <video
          autoPlay="autoplay"
          loop="loop"
          muted
          defaultmuted="true"
          playsInline
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
          <Route
            exact
            path="/skills"
            element={<Main render={<Skills />} />}
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
