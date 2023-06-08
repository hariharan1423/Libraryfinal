import './App.css';
import NavBar from "./COMPONENTS/NavBar";

import {BrowserRouter, Routes , Route} from "react-router-dom";

import Home from "./PAGES/Home";
import Books from "./PAGES/Books";
import Login from "./PAGES/Login";
import Signup from "./PAGES/Signup";
import About from "./PAGES/About";
function App() {
  return (
    <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
            <Route index element = {<Home/>}></Route>
            <Route path="/Books" element={<Books/>}></Route>
            <Route path="/Login" element={<Login/>}></Route>
            <Route path="/Signup" element={<Signup/>}></Route>
            <Route path="/About" element={<About/>}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
