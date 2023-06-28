import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../CSS/Login.css";
import signup from "../images/sign-up.jpeg";
import {NavLink} from "react-router-dom";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  return (
    <div className="loginContainer">
      <div className="loginSection1">
        <div className="leftHalf">
          <img src={signup} alt="loginpicture"></img>
        </div>
        <div className="rightHalf">
          <form>
            <label for="name">Name:</label>
            <input type="text" placeholder="Enter your Name..." name="name" required></input>
            <label for="email">Email:</label>
            <input type="email" placeholder="Enter your Name..." name="email" required></input>
            <label for="password">Password:</label>
            <input type="password" placeholder="Enter your Name..." name="password" required></input>
          </form>
         <div>
          <NavLink to="/">
            <button className="logIntoButton">
              Login <FontAwesomeIcon icon={faRightFromBracket} />
            </button>
            </NavLink>
            </div>   
        </div>
      </div>
    </div>
  );
};

export default Login;
