import './App.css';
import Header from './components/Header/index.js';
import Footer from './components/Footer/index.js'
import { BrowserRouter} from 'react-router-dom';
import Router from './routes';


function App() {

  document.documentElement.setAttribute("data-theme", "light");

  return (
    <div>
    <BrowserRouter >
    <Header/>
    <div className='container my-5 '>
    <Router/>
    </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
