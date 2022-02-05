import logo from './logo.svg';
import './App.css';

import { HashRouter } from "react-router-dom";
import MainRouter from "./MainRouter";

function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
        <MainRouter />
    </HashRouter>
    
  );
}

export default App;
