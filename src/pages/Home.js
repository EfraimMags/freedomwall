import React,{useContext} from "react";
import {UserContext} from '../helpers/UserContext'
const Home = () => {
    const {msg, setmsg} = useContext(UserContext)
    return(
        <>
        <p>This is a home page {}</p>
        <p>This is from {msg}</p>
        
        </>
    );
}

export default Home;