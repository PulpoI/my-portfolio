import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./components/Main/Main";

import Perfil from "./components/Perfil/Perfil";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Main render={<Perfil />} />} />
        <Route exact path="/about" element={<Main render={<About />} />} />
        <Route
          exact
          path="/projects"
          element={<Main render={<Projects />} />}
        />
      </Routes>
    </>
  );
}

export default App;
