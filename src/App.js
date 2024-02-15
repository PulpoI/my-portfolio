import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./components/Main/Main";
import video from "./assets/video-hero.mp4";
import Perfil from "./components/Perfil/Perfil";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";

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
          <Route path="/about" element={<Main render={<About />} />} />
          <Route path="/projects" element={<Main render={<Projects />} />} />
          <Route path="/skills" element={<Main render={<Skills />} />} />
          <Route path="/contact" element={<Main render={<Contact />} />} />
          {/* Ruta para manejar todas las demás rutas */}
          <Route path="/*" element={<Main render={<Perfil />} />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
