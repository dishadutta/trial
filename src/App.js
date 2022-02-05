import logo from './logo.svg';
import './App.css';

import { BrowserRouter, HashRouter } from "react-router-dom";
import MainRouter from "./MainRouter";
import Menu from './Menu';

function App() {
  return (
    <HashRouter >
        <Menu/>
        <MainRouter />
    </HashRouter>
    
  );
}

export default App;

{/* <HashRouter basename={process.env.PUBLIC_URL}>
  <MainRouter />
</HashRouter> */}