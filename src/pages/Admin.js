import React,{useEffect, useState} from "react";
import './css/admin.css'
import { useNavigate } from "react-router-dom";
const Admin = () => {
    const [icon , setIcon] = useState(['list', 'avatar', 'logs'])
    const navigate = useNavigate();

    return(
        <>
        <div className="container-fluid aCon"> 
        
            <div className="row">
                <div className="col-9 column justify-content-center text-center align-center"> 
                    <div className="row justify-content-center align-center">
                     {icon.map((item,keys) => (

                        <div key = {keys}className=" col-3 iconBoxes" >
                           {item} 
                        </div>

                     ))}
                    </div>
                </div>
            </div>
        
        </div>
        
        </>
    );
}

export default Admin;