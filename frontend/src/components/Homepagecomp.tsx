import { Link } from "react-router-dom";
import "./homepagecomp.css";
import Logo from "./Logo";
import Title from "./Title";

function Homepagecomp({ posts, onLogout }: any) {
  return (
    <div className="container">
      <div className="conta">
        <nav className="navbar">
          <section className="title">
            <div className="logo">
              <Logo></Logo>
            </div>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Title></Title>
            </Link>
          </section>
          <section className="sec2">
            <div className="links">
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  color: "rgb(228, 83, 0)",
                  fontFamily: "cursive",
                }}
              >
                Home
              </Link>
              <Link
                to="/profile"
                style={{
                  textDecoration: "none",
                  color: "rgb(228, 83, 0)",
                  fontFamily: "cursive",
                }}
              >
                Profile
              </Link>
              <Link
                onClick={onLogout}
                to="/login"
                style={{
                  textDecoration: "none",
                  color: "rgb(228, 83, 0)",
                  fontFamily: "cursive",
                }}
              >
                Log out
              </Link>
            </div>
          </section>
        </nav>
        <main className="timeline">
          
            {posts.map(function (post: any) {
              return (
                <li key={post.photo_id}>
                  <img src={post.photo_url} className="img_post"></img>
                  <div>{post.caption}</div>
                </li>
              );
            })}
          
        </main>
      </div>
    </div>
  );
}

export default Homepagecomp;
