
import Navbar from "../components/sections/NavBar";
import Footer from "../components/sections/footer/Footer";

// import NFTInfoCard from "../components/NFTinfoCard";

import Discover from "../components/sections/discover/Discover";
// import Hero from "../components/sections/Hero";
// import ExploreSection from "../components/sections/ExploreSection";
// import { cardDetails } from "../extra-information/cardDetails";

import "../style/homepage.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
// import Community from "../components/sections/Community";
// import ellipse7 from "../assets/images/ellipse/Ellipse7.png"
// import ellipse6 from "../assets/images/ellipse/Ellipse6.png"
// import ellipse8 from "../assets/images/ellipse/Ellipse8.png"
// import ellipse9 from "../assets/images/ellipse/Ellipse9.png"
// import Collection from "../components/sections/Collection";


function Homepage() {
    useEffect(() => {
        AOS.init({duration: 2000});
    },[])
    
    return (
        <div className="homepage">
            <Navbar />
            {/* <Hero/>
            
            <div className="nft-card-information">
                {cardDetails.map((cardDetails) => (
                    <NFTInfoCard text={cardDetails.text} />
                ))}
            </div>
          
           <ExploreSection/>
          
            <Community/>
           
           <Collection/> */}
            <Discover />
            <Footer />
{/* 
            <img className="ellipse6" src={ellipse6} alt="ellise"/>
            <img className="ellipse7" src={ellipse7} alt="ellise"/>
            <img className="ellipse8" src={ellipse8} alt="ellise"/>
            <img className="ellipse9" src={ellipse9} alt="ellise9"/> */}

        </div>
    );
}

export default Homepage;
