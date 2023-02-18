import React, { useState } from "react";
import './css/login.css'
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = () =>{
    const [userName, setUserName] = useState('');
    const [pass, setPass] = useState('');
    const navigate = useNavigate();
    const submitData = (e) =>{

        e.preventDefault();

        if(userName === ''){
            return
        }

        axios.post(`http://localhost:3002/login`, {
            username: userName,
            pass: pass
        })
        .then((res) => {

            document.cookie = res.data.length === 0 ? '' :  `user = ${res.data[0].personid}`
            res.data.length === 0 ? navigate('/login') : navigate('/Admin')
            console.log(res.data[0].personid)
            console.log(document.cookie.split(';')[0].split('=')[1])
        })
        .catch((err) => console.log(err))
        
    }
    return(
        <>
        <div className="container-fluid" style = {{height: "100vh", backgroundColor: "rgba(200, 200, 200)"}}>
            <form className="row align-self-center justify-content-center loginForm" onSubmit = {submitData}>
                <div className="form-group card col-10 col-lg-4 col-md-8 gap-3 logFormHolder ">
                    <h1 className="text-center mt-4 fw-semibold">Sign in {pass}</h1>
                    <h6 className="text-center fw-light fw-semibold">Only the athorize person can sign in</h6>
                    <input className="form-control " type="text" placeholder="Enter user name" onChange={(e) => setUserName(e.target.value) }></input>
                    <input className="form-control mt-0 " type="password" placeholder="Enter password" onChange = {(e) => setPass(e.target.value)}></input>
                    <button className=" btn btn-warning loginBtn">Login</button>
                </div>
            </form>
        </div>
        </>
    );

}

export default Login;