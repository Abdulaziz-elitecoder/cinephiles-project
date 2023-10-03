import { library } from "@fortawesome/fontawesome-svg-core";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";
import Header from "./components/Header/index.js";
import Footer from "./components/Footer/index.js";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes";
import { useSelector } from "react-redux";
library.add(faGlobe);

function App() {
  const theme = useSelector((state) => state.theme.current_theme);
  const lang = useSelector((state) => state.language.current_lang);
  document.documentElement.setAttribute("theme", theme);

  return (
    <div>
      <BrowserRouter>
        <Header />
        <div className="container my-5 ">
          <Router />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
