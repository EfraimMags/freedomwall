import React, { useEffect, useState } from "react";
import './css/modal1.css'
const Modal1 = (props) =>{
    const [name, setName] = useState('The Anonymous')
   

    const btnFunction = () => {
     
        props.setModal(false) 
        
    }
    return (
            //enter anonymousename
            <>
                <div className="container " >
                    
                    <div className=" row align-self-center justify-content-center modalCon ">
                 
                        <div className=" col-8 col-lg-5 col-md-6 p-5  text-center modalwrapper  modal1 " style ={{padding: '0'}}>
                               
                                <img className = "mt-2" style ={{width: '80px', height: '80px'}} src="sampleImg/fist.png" alt="anonymous"/>
                                <h3 className = "fw-bold"style={{margin:'0'}}>{name}</h3>
                                <h2 className="fw-bold mt-3 mb-1" style={{fontSize: '110%'}}>Enter your anonymous name</h2>   
                                <input className = "mb-1 mt-3" style = {{textAlign: "center", width: '100%', height: '40px', borderRadius: '5px', border: '2px solid #1F1D20'}}
                                type= "text" id = "name" onChange={(e)=> setName(e.target.value)} placeholder = " Anonymous"></input>
                                <button onClick={() => {btnFunction()}}className="btn btn-warning modal1Btn" style ={{width:'100%',}}>submit</button>
                      
                        </div>
                  
                    </div>
                </div>
            </>
    );

}

export default Modal1;