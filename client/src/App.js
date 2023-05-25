import "./App.css";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { useContext } from "react";
import { UserContext } from "./context/UserContext";

function App() {
  const { currentUser } = useContext(UserContext);
  return (
    <Routes>
      {currentUser ? (
        <Route path="/home" element={<Home />} />
      ) : (
        <Route path="/" element={<Login />} />
      )}
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
