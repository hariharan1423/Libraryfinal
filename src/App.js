import './App.css';
import NavBar from "./COMPONENTS/NavBar";

import {BrowserRouter, Routes , Route} from "react-router-dom";

import Home from "./PAGES/Home";
import Books from "./PAGES/Books";
import Login from "./PAGES/Login";
import Profile from './PAGES/Profile';
import Contact from './PAGES/Contact';
import Footer from './COMPONENTS/Footer';
function App() {
  return (
    <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
            <Route index element = {<Home/>}></Route>
            <Route path="/Books" element={<Books/>}></Route>
            <Route path="/Login" element={<Login/>}></Route>
            <Route path="/Profile" element={<Profile/>}></Route>
            <Route path="/Contact" element={<Contact/>}></Route>
        </Routes>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
