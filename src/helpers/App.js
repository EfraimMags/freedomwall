import React, { useState, useEffect } from "react";
import MyRoutes from './MyRoutes'
import axios from "axios";

const App = () => {
    const[list, setList] = useState([]);
    
    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then( 
                res => {
                    setList(res.data)
                    console.log("im in")
                })
            .catch(
                err => {
                    console.log(err)
                })
       
    },[])
    
    
    return(
        <>  
            <MyRoutes message = {{list, setList}}/>
        </>
    );
}
export default App