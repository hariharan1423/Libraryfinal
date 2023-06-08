
import img from "../images/main.jpg";


const HomeSection1 = () => {
  return (
    <>
      <div className="homeSection1">
        <div className="homeTextWrapper">
          <pre>
            {`What Book are            
      you Looking For???
                `}
          </pre>
          <p>
            Welcome to our state-of-the-art library management website, your
            ultimate destination for all your literary needs. Stay updated with
            the latest releases, discover recommended reads, and engage in a
            vibrant community of bibliophiles. Join us today and embark on a
            journey of knowledge and imagination with our exceptional library
            management website.
          </p>

          
        </div>
        <img src={img} alt="MainPictue" className="section1Img"></img>
      </div>
    </>
  );
};

export default HomeSection1;
