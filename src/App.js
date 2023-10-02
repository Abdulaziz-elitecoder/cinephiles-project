import "./App.css";
import Header from "./components/Header/index.js";
import Footer from "./components/Footer/index.js";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes";
import { useSelector } from "react-redux";

function App() {
  const theme = useSelector((state) => state.theme.current_theme);
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
