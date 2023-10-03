import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { changeCurrentLang } from "../../store/slices/language.js";

const Language = () => {
  const dispatch = useDispatch();
  const [isLanguageDropdownOpen, setLanguageDropdownOpen] = useState(false);

  const handleLanguageChange = (newLanguage) => {
    dispatch(changeCurrentLang(newLanguage));
    setLanguageDropdownOpen(false);
  };

  const toggleLanguageDropdown = () => {
    setLanguageDropdownOpen(!isLanguageDropdownOpen);
  };

  

  return (
    <div className="nav-item dropdown mx-2">
      <div
        className="nav-link dropdown-toggle language-dropdown"
        onClick={toggleLanguageDropdown}
      >
        <FontAwesomeIcon icon="globe" />
      </div>
      {isLanguageDropdownOpen && (
        <div className="dropdown-content">
          <button onClick={() => handleLanguageChange("ar")}>العربية</button>
          <button onClick={() => handleLanguageChange("en")}>English</button>
        </div>
      )}
    </div>
  );
};

export default Language;
