import { useEffect, useState } from "react";
import Homepagecomp from "../components/Homepagecomp";
import "./homepage.css";

function Homepage() {
  const [isPostsError, setIsPostsError] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(function () {
    async function fetchHomepage() {
      try {
        const response = await fetch("http://localhost:8080/post/all", {
          method: "GET",
          credentials: "include",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer " + window.localStorage.getItem("Access Token"),
          },
        });
        if (!response.ok) {
          throw await response.json();
        }
        const responseBody = await response.json();
        setPosts(responseBody);
      } catch {
        setIsPostsError(true);
      }
    }
    fetchHomepage();
  }, []);

  function handleLogout() {
    window.localStorage.setItem("Access Token", "");
  }

  return <Homepagecomp posts={posts} onLogout={handleLogout}></Homepagecomp>;
}

export default Homepage;
