import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState("");

  //get user
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    setCurrentUser(user?.username);
  }, []);

  //Register
  const register = async (username, email, password) => {
    const response = await axios.post(
      "http://localhost:5000/server/user/register",
      { username, email, password }
    );
    console.log(response);
    setCurrentUser(response.data.username);
    localStorage.setItem("currentUser", JSON.stringify(response.data));
  };

  //login

  const login = async (email, password) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/server/user/login",
        { email, password }
      );
      console.log(response);
      localStorage.setItem("currentUser", JSON.stringify(response.data.user));
      setCurrentUser(response.data.user.username);
    } catch (error) {
      console.log(error);
    }
  };

  //logout
  const logout = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser("");
  };

  return (
    <UserContext.Provider
      value={{ currentUser, setCurrentUser, login, register, logout }}
    >
      {children}
    </UserContext.Provider>
  );
}
