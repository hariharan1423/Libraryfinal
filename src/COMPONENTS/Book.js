const Book = ({image,title,year,author}) => {
    return ( 
        <div className="BookCard">
            <div className="BookImg">
                <img src={image} alt={title}></img>
            </div>
            <div className="title">
                <h2 style={{textDecoration:" double underline",margin:"0px 0px 10px 0px"}}>{title}</h2>
                <p>Published in : {year}</p>
                <p> Written by {author}</p>
            </div>
        </div> );
}
 
export default Book;