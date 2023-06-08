import "../CSS/Login.css";
import signup from "../images/sign-up.jpeg";

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
            <input type="text" placeholder="Enter your Name..." name="name"></input>
            <label for="email">Email:</label>
            <input type="email" placeholder="Enter your Name..." name="email"></input>
            <label for="password">Password:</label>
            <input type="password" placeholder="Enter your Name..." name="password"></input>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
