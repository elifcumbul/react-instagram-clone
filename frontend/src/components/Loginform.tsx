import "./loginform.css";
import "./loginbutton.css";
import {useNavigate} from "react-router-dom"
import {useState} from "react"

function Loginform() {
  const navigate = useNavigate();
  const [isError, setIsError] = useState(false);
  async function handleSubmit(event: any) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const username = formData.get("username");
    const password = formData.get("password");
    const request = {username, password };
    try{
      const response = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(request),
      });
      if(!response.ok){
        throw await response.json();
      }
      const responseBody = await response.json();
      window.localStorage.setItem("Access Token", responseBody.accessToken);
      navigate("/profile");
    }catch(err){
      setIsError(true);
    }
    
  }

  return (
    <form onSubmit={handleSubmit} className="middle">
      <div className="form">
        <h2 className="info"></h2>
        <div className="form1">
          <label>
            <span className="email">Username</span>
            <input
              aria-label="Username or Email"
              aria-required="true"
              autoCapitalize="off"
              autoComplete="tel"
              autoCorrect="off"
              name="username"
              type="text"
              className="a b c"
            />
          </label>
        </div>
        <div className="form4">
          <label>
            <span className="password">Password</span>
            <input
              aria-label="Password"
              aria-required="true"
              autoCapitalize="off"
              autoComplete="new-password"
              autoCorrect="off"
              name="password"
              type="password"
              className="a b c"
            ></input>
          </label>       
        </div>
        <div className="error">
          {isError ? <div>Wrong username or password!</div> : null}
          </div>
        <div className="Button">
          <div className="Log">
            <button className="Login" type="submit">
              Log In
            </button>
          </div>
          <div className="forgot">
            <h2 className="forgotpass">Forgot password?</h2>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Loginform;
