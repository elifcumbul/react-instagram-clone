import { Link } from "react-router-dom";
import Logo from "./Logo";
import Posts from "./Posts";
import "./profilecomp.css";
import Title from "./Title";

function Profilecomp({ posts, profile, onPhotoChange, onLogout }: any) {
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
        <div className="bottom">
          <form className="pform">
            <section className="mainSec">
              <main className="main">
                <div className="infosec">
                  <header className="header">
                    <div className="photo">
                      {profile?.photo ? (
                        <img alt="avatar" src={profile.photo}></img>
                      ) : (
                        <input
                          className="addphoto"
                          type="file"
                          onChange={onPhotoChange}
                          accept="image/*"
                        ></input>
                      )}
                    </div>
                    <section className="usernamesec">
                      <div className="user">
                        <h2 className="uname">{profile?.username}</h2>
                        <div className="edit">
                          <button className="editbutton">
                            <h1 className="editlabel">Edit</h1>{" "}
                          </button>
                        </div>
                      </div>
                      <ul className="nums">
                        <li className="posts">
                          <span>posts</span>
                        </li>
                        <li className="followers">followers</li>
                        <li className="following">following</li>
                      </ul>
                      <div className="bio">Bio</div>
                    </section>
                  </header>
                </div>
                <div className="labels">
                  <h1 className="P">POSTS</h1>
                  <h1 className="R">REELS</h1>
                  <div className="AddPost">
                    <label>
                      <span className="posting">+</span>
                      <input className="addP" type="file"></input>
                    </label>
                  </div>
                  <h1 className="V">VIDEOS</h1>
                  <h1 className="T">TAGS</h1>
                </div>
                <div className="postpart">
                  <Posts posts={posts}></Posts>
                </div>
              </main>
            </section>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Profilecomp;
