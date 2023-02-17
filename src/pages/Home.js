import React,{useContext, useEffect, useState} from "react";
import {UserContext} from '../helpers/UserContext'
import CardElement from "../element/CardElement";
import './css/home.css'
import { useNavigate } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import CardElement2 from "../element/CardElement2";
import axios from "../helpers/axios";

const Home = () => {
    const {tempList,  forceUpdate,  setPost,  setNum,  post,  num} = useContext(UserContext);
    const navigate = useNavigate();
 

    useEffect(()=>{
        document.body.style.overflow = "scroll"
    },[])


    return(
        <>
        <div className="container-fluid home ">
            <HeroSection
                about ='/About'
                post = '/Post'
                list = {Object.keys(post).length}
            />
            <div className="row gap-5 justify-content-center areaPost">
            {post &&  post.map((element, keys) => {
                 
                    if(element.postlistkind === 1){
                        return(
                            
                            <div
                            className=" col-8 col-sm-6 col-lg-2 col-md-3 mb-5 homeCard card"
                            key = {keys}
                            onClick={()=>{}}
                            >
                                <CardElement
                                    postname = {element.postname}
                                    avatarfilename ={element.avatarfilename}
                                    avatarname ={element.avatarname}
                                    post1background = {element.post1background}
                                    post1date = {element.postlistdate}
                                    post1topic = {element.post1topic}
                                />
                                
                            </div>
                        )
                    }else{
                        return(
                            <div
                            className={`col-8 col-sm-6 col-lg-2 col-md-3 homeCard card`}
                            key = {keys}
                            onClick={()=>{}}
                            >
                                <CardElement2
                                    postname = {element.postname}
                                    avatarfilename ={element.avatarfilename}
                                    avatarname ={element.avatarname}
                                    post2image = {element.post2image}
                                    post2date = {element.postlistdate}
                                    post2topic = {element.post2topic}
                                />
                                 { console.log("from post 2 ---- " +element.postlistdate+ " ")}
                            </div>
                        )
                    }
                    })}
            
            </div>
        </div>
        </>
    );
}

export default Home;