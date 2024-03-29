import React from "react";
import AboutSection from "../components/AboutSection";
import './css/about.css'
import Footer from "../components/Footer";
import imgHero from '../assets/Languages-subscription.png'
const About = () => {

    return(
        <>
        
        <div className="container-fluid ">
            <div className="row about flex-lg-row-reverse align-items-center">
                <div className="col-lg-6 col-md-6 text-center">
                  
                 <img className="imgage"src={imgHero} alt="about"/>
                </div>
                <div className="col-lg-6 col-md-6">
                    <AboutSection/>
                </div>
            </div>
        </div>
     
        </>
        
    );
}

export default About;