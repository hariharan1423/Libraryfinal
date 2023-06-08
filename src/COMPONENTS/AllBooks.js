import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import Book from "./Book";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const AllBooks = ({ books }) => {
  
  return (
    <div className="allBooksContainer">
         {/*console.log(books.length)*/}
       <p>List of Available Books - {books.length} <FontAwesomeIcon icon={faPaperclip} /></p>
    <div className="allBooksList">
      {books.map((book, i) => {
        return (
          <Book key={i} image={book.img} title={book.title} year={book.year} author={book.author} />
        );
      })}
    </div>
    </div>
  );
};

export default AllBooks;
