import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import Book from "./Book";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";


const AllBooks = ({ books }) => {


  const [boolPage1 ,setBoolPage1] = useState(true);
  // console.log(books.length/2);

  let resultsPage1 = books.slice(0,books.length/2);
  let resultsPage2 = books.slice(books.length/2,);

  // console.log(resultsPage1);
  // console.log(resultsPage2);

  const handleClick = ()=>{
    setBoolPage1(!boolPage1);
  }
  
  return (
    <div className="allBooksContainer">
         {/*console.log(books.length)*/}
       <p>List of Available Books - {books.length} <FontAwesomeIcon icon={faPaperclip} /></p>
    <div className="allBooksList">
      {boolPage1 ? resultsPage1.map((book, i) => {
        // console.log(book);
        return (
          <Book key={i} image={book.img} title={book.title} year={book.year} author={book.author} />
        );
      }) : resultsPage2.map((book, i) => {
        // console.log(book)
        return (
          <Book key={i} image={book.img} title={book.title} year={book.year} author={book.author} />
        );
      })}
    </div>
    <div className="pageButtons">
      {boolPage1 ? <button  className="navigateButton"  onClick={handleClick} >Next - &gt;</button> :<button className="navigateButton" onClick={handleClick} > &lt; - Prev</button>}
    </div>
    </div>
  );
};

export default AllBooks;
