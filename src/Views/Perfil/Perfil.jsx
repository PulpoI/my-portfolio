import photo from "../../assets/perfil.png";

function Perfil() {
  return (
    <>
      <div className="text-container">
        <div className="text-main">
          <span className="text-name text-shadow-drop-br">Pablo Duarte</span>{" "}
          Full Stack Developer
        </div>
      </div>
      <div>
        <img className="photo bounce-in-bck" src={photo} alt="" />
      </div>
    </>
  );
}

export default Perfil;
