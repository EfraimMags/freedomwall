import React from "react";
import Footer from "../components/Footer";
import './css/contact.css'
const Contact = () => {

    return(
        <>
            <div className="container-fluid justify-content-center text-center contact">
            <h1 className="fw-bold cTitle">Contact Us</h1>
            <p className="mt-2">
             Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            </p>
            <h3>contact@freedomwall.com</h3>
            <button className="btn btn-warning btnContact">Message Us</button>
            </div>
          
            
        </> 
    );
}
export default Contact;