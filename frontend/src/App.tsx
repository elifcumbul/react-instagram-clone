import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import OtherProfile from "./components/OtherProfile";
import PrivatePage from "./components/PrivatePage";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PrivatePage><Homepage></Homepage></PrivatePage>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/profile" element={<PrivatePage><Profile></Profile></PrivatePage>}></Route>
        <Route path="/profile/:username" element={<PrivatePage><OtherProfile></OtherProfile></PrivatePage>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
