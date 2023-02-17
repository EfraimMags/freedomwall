import React, { useState, useEffect,useReducer } from "react";
import MyRoutes from './MyRoutes'
import axios from "./axios.js";

const App = () => {
    const[list, setList] = useState([]);
    const[num, setNum] = useState(0);
    const[list1, setList1] = useState([]);
    const[list2, setList2] = useState([]);
    const[allList, setAllList] = useState([]);
    const postURL = '/post';
    const[post, setPost] = useState([]);
    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
    const list1URL ='/list1'
    const list2URL ='/list2'
    const allListURL ='/getAlllist'
    const [finalList, setFinalList] = useState([])
    const [tempList, setTempList] = useState([])
  
    useEffect(() => {

      async function fetchData() {
        const response = await axios.get(postURL)
        setPost(response.data.reverse())
        return response
      }
    
   
      async function fetchList1() {
        const response = await axios.get(list1URL)
        setList1(response.data)
        return response
      }

      async function fetchList2() {
        const response = await axios.get(list2URL)
        setList2(response.data)
        return response
      }

      async function fetchAllList() {
        const response = await axios.get(allListURL)
        setAllList(response.data)
        return response
      }

      
      fetchData();
      fetchList1();
      fetchList2();
      fetchAllList();

     
      console.log(  ignored + "  updated")
    },[ignored]);
    
   
    
  

    return(
        <>  
       
          <MyRoutes 
          
            message = 
            {{
             tempList,
             forceUpdate,
             setPost,
             setNum,
             post, 
             num}}/>
        </>
    );
}
export default App