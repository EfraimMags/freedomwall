import React,{useState}from "react";
import './css/cardElement.css'


const CardElement = (props) => {
    let title = props.title;
    let body = props.body;
 
      return(
        <>
          
            <div className="card-body">
                <h6 className="card-title fw-light">About: {title === "" ? 'Something' : title.slice(0,20)}</h6>
                <hr></hr>
                <h6 className="card-title fw-bold">Dear: {props.name}</h6>
                <hr></hr>
                <p className="card-text">{body.slice(0, 70)}</p>
                {props.children}
            </div>
            
        </>
    );

}

export default CardElement