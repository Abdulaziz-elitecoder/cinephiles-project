import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeCurrentTheme } from "../../store/slices/theme.js";
import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "./Moon.svg";
import "./Theme.css";

const Theme = () => {
  const dispatch = useDispatch();

  const [isDarkMode, setDarkMode] = useState(false);

  const handleToggle = () => {
    setDarkMode(!isDarkMode);
    if (!isDarkMode) {
      dispatch(changeCurrentTheme("dark"));
    } else {
      dispatch(changeCurrentTheme("light"));
    }
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
