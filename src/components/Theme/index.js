import React, { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeCurrentTheme } from "../../store/slices/Theme.js";
import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "./Moon.svg";
import "./Theme.css";

// const Theme = () => {
//   const dispatch = useDispatch();

//   const [isDarkMode, setDarkMode] = useState(false);

//   const handleToggle = () => {
//     setDarkMode(!isDarkMode);
//     if (!isDarkMode) {
//       dispatch(changeCurrentTheme("dark"));
//     } else {
//       dispatch(changeCurrentTheme("light"));
//     }
//   };
const Theme = () => {
  const dispatch = useDispatch();

  const savedTheme = localStorage.getItem("theme");
  const [isDarkMode, setDarkMode] = useState(savedTheme === "dark");

  useEffect(() => {
    dispatch(changeCurrentTheme(isDarkMode ? "dark" : "light"));
    
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode, dispatch]);

  const handleToggle = () => {
    setDarkMode(!isDarkMode);
  };
  

  return (
    <div className="dark_mode">
      <input
        className="dark_mode_input"
        type="checkbox"
        id="theme-toggle"
        checked={isDarkMode}
        onChange={handleToggle}
      />
      <label className="dark_mode_label" for="theme-toggle">
        <Sun />
        <Moon />
      </label>
    </div>
  );
};

export default Theme;
