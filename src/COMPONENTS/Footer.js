
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="FooterLogo">
        <span>Lib.io</span>
      </div>
      <div className="footerLinks">
        <ul>
          <li>
            <NavLink to="/">
              Home 
            </NavLink>
          </li>
          <li>
            <NavLink to="/Books">
              Books 
            </NavLink>
          </li>
          <li>
            <NavLink to="/Contact">
              Contact us 
            </NavLink>
          </li>
          
        </ul>
      </div>
      
      <div className="socialMedias">
        <ul>
            <li>
                <button><i className="fa fa-instagram"></i></button>
            </li>
            <li>
                <button><i className="fa fa-twitter"></i></button>
            </li>
            <li>
                <button><i className="fa fa-github"></i></button>
            </li>
        </ul>
      </div>
      <div className="copyRight">
        <p>Copyright &copy; Lib.io </p>
      </div>
    </div>
  );
};

export default Footer;
