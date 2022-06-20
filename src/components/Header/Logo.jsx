import { Link } from "react-router-dom";
import "./Logo.css";
import logo from "../../assets/logo.png";

function Logo() {
  return (
    <div className="logo">
      <Link to="/">
        <img src={logo} alt="logo" className="logo wobble-ver-left" />
        {/* <span className="text-name text-shadow-drop-br">Pablo Duarte</span>{" "}
        Frontend Developer */}
      </Link>
    </div>
  );
}

export default Logo;
