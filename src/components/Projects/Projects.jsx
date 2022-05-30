import { useEffect, useState } from "react";
import Logo from "../Header/Logo";
import Loader from "../Loader/Loader";

function Projects() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);

  return (
    <>
      <Logo />
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="about-content slide-in-blurred-bl">
            <div>
              <h2>PROYECTOS</h2>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Projects;
