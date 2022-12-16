import React,{useContext} from "react";
import {UserContext} from '../helpers/UserContext'
import CardElement from "../element/CardElement";
import './css/home.css'
import { useNavigate } from "react-router-dom";
import HeroSection from "../components/HeroSection";

const Home = () => {
    const {list, setList, names} = useContext(UserContext);
    const navigate = useNavigate();
    return(
        <>
        <div className="container-fluid home justify-content-center text-center">
            <HeroSection
                about ='/About'
                post = '/Post'
                list = {list}
            />
            <div className="row justify-content-center gap-5 m-5">
                {Object.keys(list).map(keys =>( 
                    <div
                        className="col-lg-2 col-md-5  homeCard card"
                        key = {keys}
                        onClick={()=>{navigate(`/${parseInt(keys)+1}`)}}
                    >
                        <CardElement
                            id = {keys}
                            name = {typeof(list[keys].userId) === 'number' ? list[keys].userId = names[list[keys].userId] : list[keys].userId} 
                            title ={list[keys].title} 
                            body ={list[keys].body}>
                        </CardElement>
                    </div>
            ))}
            </div>
        </div>
        </>
    );
}

export default Home;