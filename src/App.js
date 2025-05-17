import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./components/Main/Main";
import video from "./assets/video-hero.mp4";
import Perfil from "./Views/Perfil/Perfil";
import About from "./Views/About/About";
import Projects from "./Views/Projects/Projects";
import Skills from "./Views/Skills/Skills";
import Contact from "./Views/Contact/Contact";
import { Footer } from "./components/Footer/Footer";
import Experience from "./Views/Experience/Experience";

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
          <Route path="/experience" element={<Main render={<Experience />} />} />
          <Route path="/projects" element={<Main render={<Projects />} />} />
          <Route path="/skills" element={<Main render={<Skills />} />} />
          <Route path="/contact" element={<Main render={<Contact />} />} />
          <Route path="/projects/:id" element={<Main render={<Projects />} />} />
          {/* Ruta para manejar todas las demás rutas */}
          <Route path="/*" element={<Main render={<Perfil />} />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
