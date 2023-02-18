import React from "react";
import { useNavigate } from "react-router-dom";
import './css/hero.css'
const HeroSection = (props) => {
        const navigate = useNavigate();
        return(

            <div className="heroSection gap-2 row text-center justify-content-center">
                <div className=" col-lg-12 col-md-6">
                    <h1 className=" heroTitle mt-3 fw-bold lh-1 mb-3">FreeDom Wall of Voices </h1>   
                    <h3>"Express yourself, embrace your voice - on the freedom wall, you have a choice."</h3>
                    <button className="btn btn-warning btnpr" onClick={() => {navigate(props.about)}}>Learn More</button>
                    <button className="btn btn-warning btnHero" onClick={() => {navigate(props.post)}}><span className="cta">Post Anonymously</span></button>
                    <h5 className="mt-5"><span className="highlights fw-bold">Scroll down to see more...  </span> </h5>
                </div>
            </div>
        )
}

export default HeroSection