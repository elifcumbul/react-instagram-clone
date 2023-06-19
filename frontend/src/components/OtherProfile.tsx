import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Profilecomp from "../components/Profilecomp";

function OtherProfile() {
  const { username } = useParams();

  const [isProfileError, setIsProfileError] = useState(false);
  const [profile, setProfile] = useState<any>();
  const [posts, setPosts] = useState([]);
  const [isPostsError, setIsPostsError] = useState(false);

  useEffect(
    function () {
      async function fetchProfile() {
        try {
          const response = await fetch(
            "http://localhost:8080/account/" + username,
            {
              method: "GET",
              credentials: "include",
              mode: "cors",
              headers: {
                "Content-Type": "application/json",
                Authorization:
                  "Bearer " + window.localStorage.getItem("Access Token"),
              },
            }
          );
          if (!response.ok) {
            throw await response.json();
          }
          const responseBody = await response.json();
          setProfile(responseBody);
        } catch {
          setIsProfileError(true);
        }
      }
      fetchProfile();
    },
    [username]
  );

  useEffect(function () {
    
    async function fetchPosts() {
      try {
        const response = await fetch("http://localhost:8080/post/" + username, {
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
    fetchPosts();
  }, [username]);

  return <Profilecomp posts={posts} profile={profile}></Profilecomp>;
}

export default OtherProfile;
