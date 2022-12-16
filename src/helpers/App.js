import React, { useState, useEffect } from "react";
import MyRoutes from './MyRoutes'
import axios from "axios";

const App = () => {
    const[list, setList] = useState([]);
    const names = {
        1: 'lebron XD 144',
        2: 'manu ginobli the thing gawi',
        3: 'james reid but High',
        4: 'manny fcman',
        5: 'boss Kenshin',
        6: 'Marimar Aww',
        7: 'Yours_1444',
        8: 'imungMama',
        9: 'GwapoKo',
        10: 'Maho Nae'
    }
      
    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then( 
                res => {
                    setList(res.data)
                    
                })
            .catch(
                err => {
                    console.log(err)
                })
       
    },[])
    
  

    return(
        <>  
          <MyRoutes message = {{list, setList, names}}/>
        </>
    );
}
export default App