import { useEffect, useState } from "react";
import Profilecomp from "../components/Profilecomp";
import "./profile.css"

function Profile() {
  const [isPostsError, setIsPostsError] = useState(false);
  const [profile, setProfile] = useState<any>();
  const [isProfileError, setIsProfileError] = useState(false);
  const [posts, setPosts] = useState([]);
  
  useEffect(function () {
    async function fetchProfile() {
      try {
        const response = await fetch("http://localhost:8080/account/", {
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
        setProfile(responseBody);
      } catch {
        setIsProfileError(true);
      }
    }
    fetchProfile();
  }, []);

  useEffect(function () {
    async function fetchPosts() {
      try {
        const response = await fetch("http://localhost:8080/post/", {
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
  }, []);

  async function handlePhotoChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      try {
        const formData = new FormData();
        formData.append("file", file);
        const response = await fetch("http://localhost:8080/account/photo", {
          method: "POST",
          credentials: "include",
          body: formData,
          mode: "cors",
          headers: {
            Authorization:
              "Bearer " + window.localStorage.getItem("Access Token"),
          },
        });
        if (!response.ok) {
          throw await response.json();
        }
        const responseBody = await response.json();
        setProfile({
          ...profile,
          photo: responseBody.url,
        });
      } catch {}
    }
  }

  function handleLogout() {
    window.localStorage.setItem("Access Token", "");
  }

  return (
    <Profilecomp
      posts={posts}
      profile={profile}
      onPhotoChange={handlePhotoChange}
      onLogout={handleLogout}
    ></Profilecomp>
  );
}

export default Profile;
