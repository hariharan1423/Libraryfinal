import sign1 from "../images/top-image22.webp";
import sign2 from "../images/signup.jpeg";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const HomeSection3 = () => {
  return (
    <div className="homeSection3">
      <pre>{`"Open a book and open your mind."`}</pre>
      <img src={sign1} alt="bookPic" className="sec3Book"></img>
      <img src={sign2} alt="kindleusing" className="sec3Kindle"></img>
      <NavLink to="/Login">
            <button className="loginButton">
              Login <FontAwesomeIcon icon={faRightFromBracket} />
            </button>
          </NavLink>
    </div>
  );
};

export default HomeSection3;
