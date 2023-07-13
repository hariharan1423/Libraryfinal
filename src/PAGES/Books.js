import { faStar } from "@fortawesome/free-solid-svg-icons";
import "../CSS/Books.css";
import book1 from "../images/book1.avif";
import book2 from "../images/book2.avif";
import book3 from "../images/book3.avif";
import book4 from "../images/book4.avif";
import book5 from "../images/book5.avif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AllBooks from "../COMPONENTS/AllBooks";
import {books} from "../DATA/BooksList";
import SearchSection from "../COMPONENTS/SearchSection";
import Footer from "../COMPONENTS/Footer";

const Books = () => {
  return (
    <> 
    <div className="booksContainer">
      <div className="booksSection1" id="start">
        <p>
          "The more that you read, the more things you will know. The more that
          you learn, the more places you'll go." - Dr. Seuss
        </p>
        <p>
          Top Rated Books :
          <FontAwesomeIcon icon={faStar} style={{ color: "gold" }} />
          <FontAwesomeIcon icon={faStar} style={{ color: "gold" }} />
          <FontAwesomeIcon icon={faStar} style={{ color: "gold" }} />
          <FontAwesomeIcon icon={faStar} style={{ color: "gold" }} />
          <FontAwesomeIcon icon={faStar} style={{ color: "gold" }} />
        </p>
        <div className="books">
          <img src={book1} alt="bookPics"></img>
          <img src={book2} alt="bookPics"></img>
          <img src={book3} alt="bookPics"></img>
          <img src={book4} alt="bookPics"></img>
          <img src={book5} alt="bookPics"></img>
        </div>
      </div>
      <AllBooks books={books}/>
      <SearchSection books={books}/>
    </div>
     </>
  );
};

export default Books;
