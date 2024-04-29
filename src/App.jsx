import "./App.css";
import NavBar from "./Components/NavBar";
import { Routes, Route, useNavigate } from "react-router-dom";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Home from "./Components/Home";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import CreatePost from "./Components/CreatePost";
import Blogdetail from "./Components/Blogdetail";

export const userContext = createContext();

function App() {
  const [user, setUser] = useState({});

  const [posts, setPosts] = useState([]);

  const navigate = useNavigate();

  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios
      .get("http://localhost:3001/")
      .then((user) => {
        setUser(user.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <userContext.Provider value={user}>
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create" element={<CreatePost />} />
        </Routes>
      </userContext.Provider>
    </>
  );
}

export default App;
