import React from "react";
import "./signupform.css";
import "./signupbutton.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Signupform() {
  const navigate = useNavigate();
  const [isError, setIsError] = useState(false);

  async function handleSubmit(event: any) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get("emailOrPhone");
    const full_name = formData.get("fullName");
    const username = formData.get("username");
    const password = formData.get("password");
    const request = { email, full_name, username, password };

    try {
      const response = await fetch("http://localhost:8080/auth/signup", {
        method: "POST",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(request),
      });
      if (!response.ok) {
        throw await response.json();
      }
      const responseBody = await response.json();
      window.localStorage.setItem("Access Token", responseBody.accessToken);
      navigate("/login");
    } catch {
      setIsError(true);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="middle">
      <div className="form">
        <h2 className="info">
          sign up to see photos and videos from your friends.
        </h2>
        <div className="form1">
          <label>
            <span className="mobile">Email</span>
            <input
              aria-label="Mobile Number or Email"
              aria-required="true"
              autoCapitalize="off"
              autoComplete="tel"
              autoCorrect="off"
              name="emailOrPhone"
              type="text"
              className="a b c"
            />
          </label>
        </div>
        <div className="form2">
          <label>
            <span className="fullname">Full Name</span>
            <input
              aria-label="Full Name"
              aria-required="false"
              autoCapitalize="sentences"
              autoCorrect="off"
              name="fullName"
              type="text"
              className="a b c"
            ></input>
          </label>
        </div>
        <div className="form3">
          <label>
            <span className="username">Username</span>
            <input
              aria-label="Username"
              aria-required="true"
              autoCapitalize="off"
              autoCorrect="off"
              maxLength={30}
              name="username"
              type="text"
              className="a b c"
            ></input>
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
        <div className="error">{isError ? <div>Invalid input</div> : null}</div>
        <div className="Button">
          <div className="Sign">
            <button className="Signup" type="submit">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </form>
  );
  
}

export default Signupform;
