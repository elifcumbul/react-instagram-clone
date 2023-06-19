import Loginform from "./Loginform";
import Title from "./Title";
import "./logincomp.css";
import Logo from "./Logo";
import { Link } from "react-router-dom";

function Logincomp() {
  return (
    <div className="cont">
      <div className="top">
        <Title></Title>
        <Logo></Logo> 
      </div>
      <Loginform></Loginform>
      <div className="gosignup">
        <h2 className="info">
          Don't have an account?
          <Link to="/signup"> Sign up</Link>
        </h2>
      </div>
    </div>
  );
}

export default Logincomp;
