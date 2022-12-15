import React,{useContext} from "react";
import {UserContext} from '../helpers/UserContext'
import CardElement from "../element/CardElement";
import './css/home.css'
const Home = () => {
    const {list, setList} = useContext(UserContext)
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
    return(
        <>
       
        <div className="container-fluid home justify-content-center text-center">
        <h1>FreeDom Wall of secrets</h1>   
        <h3>An online freedom wall where we can anonymously say anything to our loved ones.</h3>
        <div className="row justify-content-center gap-5 m-5">
            {Object.keys(list).map(keys =>( 
           
                <CardElement
                key = {keys}
                name = {typeof(list[keys].userId) === 'number' ? names[list[keys].userId] : list[keys].userId} 
                title ={list[keys].title} 
                body ={list[keys].body}>
                </CardElement>
            
           ))}
        </div>
        </div>
        
     
        
        </>
    );
}

export default Home;