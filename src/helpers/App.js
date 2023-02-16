import React, { useState, useEffect } from "react";
import MyRoutes from './MyRoutes'
import axios from "./axios.js";

const App = () => {
    const[list, setList] = useState([]);
    const[num, setNum] = useState(0);
    const[post, setPost] = useState([]);
    const postURL = '/post';
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
      async function fetchData() {
        const response = await axios.get(postURL)
        setPost(response.data.reverse())
        return response
      }
     fetchData();
    },[num, postURL]);
    
    
  

    return(
        <>  
          <MyRoutes 
            message = 
            {{list,
             setList, 
             names, 
             setNum, 
             post,
             num}}/>
        </>
    );
}
export default App