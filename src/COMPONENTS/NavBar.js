import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen, faHouse, faUser } from "@fortawesome/free-solid-svg-icons";
import { faBookBookmark } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="Nav">
        <div className="TitleLogo">
            <span>Lib.io</span>
            <FontAwesomeIcon icon={faBookBookmark} size="2x" />
        </div>
        <div className="Nav-links">
          <ul>
            <li>
              <NavLink to="/">Home <FontAwesomeIcon icon={faHouse}/></NavLink>
            </li>
            <li>
              <NavLink to="/Books">Books <FontAwesomeIcon icon={faBookOpen} /></NavLink>
            </li>
          </ul>
        </div>
        <NavLink to="/Profile" className="user">
          <FontAwesomeIcon icon={faUser} size="2x" />
        </NavLink>
      </div>
    </>
  );
};

export default NavBar;
