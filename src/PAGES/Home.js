import Footer from "../COMPONENTS/Footer";
import HomeSection1 from "../COMPONENTS/HomeSection1";
import HomeSection2 from "../COMPONENTS/HomeSection2";
import HomeSection3 from "../COMPONENTS/HomeSection3";
import HomeSection4 from "../COMPONENTS/HomeSection4";




const Home = () => {
    return ( 
        <>
            <div className="homeContainer">
               <HomeSection1/>
               <HomeSection2/>
               <HomeSection3/>
               <HomeSection4/>
            </div>
        </>
     );
}
 
export default Home;