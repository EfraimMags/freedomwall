import React from "react";
import './css/aboutSection.css'
const AboutSection = () => {

    return(
        <>
        <h1><span className="title"> FreeDom </span> to Post...</h1>
        <h6 className="fw-bold highlight text-center">
             Lorem Ipsum is simply dummy text of the printing and typesetting industry</h6>
        <p className="mt-5">
             Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
             when an unknown printer took a galley of type and scrambled it to make a type 
             specimen book. It has survived not only five centuries, but also the leap into 
             electronic typesetting, remaining essentially unchanged. It was popularised in 
             the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
             and more recently with desktop publishing software like Aldus PageMaker including 
             versions of Lorem Ipsum
        </p>
        <p className="mt-5 ">
             Lorem Ipsum is simply <span className="highlight"> dummy text of the printing and typesetting industry. </span>
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
             
        </p>
        </>
    )
}

export default AboutSection