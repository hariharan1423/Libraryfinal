import { NavLink } from "react-router-dom";
import books from "../images/books.jpg";
import read from "../images/read.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const HomeSection2 = () => {
  return (
    <>
      <div className="homeSection2">
        <pre className="quote1">
        {`"Knowledge has no boundaries,
            and neither does our library"`}
        </pre>
          <NavLink to="/Books">
            <button className="exploreButton">
              Explore <FontAwesomeIcon icon={faArrowRight} className="arrowIcon" />
            </button>
          </NavLink>
         <img src={read} alt="readpic" className="readPic"></img>
          <img src={books} alt="books" className="booksPic"></img>
          <div className="aboutDescription">
             <h2>Can Be Interesting!!!</h2>
             <p>
                This website can offer a wide range of services and resources to its users. 
                users can search for books and other materials available in the library's collection. 
                They can browse by title, author, subject.
            </p>
          </div>
        </div>
    </>
  );
};

export default HomeSection2;
