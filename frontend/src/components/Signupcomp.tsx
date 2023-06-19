import Signupform from "../components/Signupform";
import Logo from "./Logo";
import "./signupcomp.css";
import Title from "./Title";
import { Link } from "react-router-dom";

function Signupcomp() {
  return (
    <div className="cont">
      <div className="top">
        <Title></Title>
        <Logo></Logo>     
      </div>
      <Signupform></Signupform>
      <div className="gologin">
        <h2 className="info">
          Have an account?
          <Link to="/login"> Log in </Link>
        </h2>
      </div>
    </div>
  );
}

export default Signupcomp;
