import { useState } from "react";
import Book from "./Book";
const SearchSection = ({ books }) => {
  const [search, setSearch] = useState("");
  // const array = Object.entries(books);
  // console.log(array);
  const results = [];
  // console.log(array[0][1].author.toLowerCase());
  let author = false;
  let year = false;
  let title = false;
  // console.log(typeof(results))
  let yearCount = 0;
  let authorCount = 0;
  let titleCount = 0;

  // console.log(books);
  for (let i = 0; i < books.length; i++) {
      if (books[i].author.toLowerCase() === search.toLowerCase()) {
      // console.log(books[i].author);
        results[i] = books[i];
        authorCount += 1;
        author = true;
      } else if (books[i].title.toLowerCase() === search.toLowerCase()) {
        results[i] = books[i];
        titleCount += 1;
        title = true;
      } else if (books[i].year.toLowerCase() === search.toLowerCase()) {
        // console.log(books[i].year);
        results[i] = books[i];
        yearCount += 1;
        year = true;
    }
  }

  // console.log(yearCount);


  return (
    <div className="searchContainer">
      <p>
        "With a book in hand, one can never be truly alone; they carry the
        stories of countless souls." - Unknown
      </p>
      <p style={{margin:"0px 0px 20px 0px"}}>SEARCHED FOR "{search}"</p>
      <input
        type="text"
        placeholder="Search for 'Title' or 'Author' or 'Year'"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      ></input>

      {search ? (
        results.length ? (
          <>
            <div className="searchBookWrapper">
              {results.map((value, i) => {
                // console.log(value.img)
                return (
                  <>
                    <Book
                      key={i}
                      image={value.img}
                      title={value.title}
                      author={value.author}
                      year={value.year}
                    ></Book>
                    {/* <p>{year ? yearCount: title? titleCount : author ? authorCount:"0"}</p> */}
                  </>
                );
              })}
            </div>
           <div className="countSection">
              {year ? (
                <pre style={{fontSize:"34px",color:"var(--linkText)"}}>No. of Books published in the year "{search}" :- {yearCount}</pre>
              ) : title ? (
                <pre style={{fontSize:"34px",color:"var(--linkText)"}}>No. of Books published in this title  "{search}" :- {titleCount}</pre>
              ) : author ? (
                <pre style={{fontSize:"34px",color:"var(--linkText)"}}>No. of Books published by this author  "{search}" :- {authorCount}</pre>
              ) : (
                <></>
              )}
            </div>
          </>
        ) : (
          <div>
            <pre style={{ margin: "20px" }}>No results found!!!</pre>
          </div>
        )
      ) : (
        <div style={{ margin: "40px 0px 0px 0px" }}>
          <pre style={{fontSize:"24px"}}>Type Something....</pre>
        </div>
      )}
    </div>
  );
};

export default SearchSection;
