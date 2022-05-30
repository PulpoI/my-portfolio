import { Link } from "react-router-dom";
import "./Logo.css";

function Logo() {
  return (
    <div className="logo">
      <Link to="/">
        <span className="text-name text-shadow-drop-br">Pablo Duarte</span>{" "}
        Frontend Developer
      </Link>
    </div>
  );
}

export default Logo;
