import { faTty } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

const HomeSection4 = () => {
    return ( 

        <div className="homeSection4">
            <pre>{`If you have any queries??? feel free to contact us!`}</pre>
            <NavLink to="/Contact">
                <button className="contactButton">
                    Contact us <FontAwesomeIcon icon={faTty} />
            </button>
          </NavLink>
        </div>
     );
}
 
export default HomeSection4;