import React, {useContext} from "react";
import {UserContext} from '../helpers/UserContext';
import './css/post.css';
import PostElement from '../element/PostElement';
import Footer from "../components/Footer";
import PostLayout1 from "../element/PostLayout1";
const Post = () => {

    const {list, setList} = useContext(UserContext)
    
    return (

        <>
        <div className="container-fluid postPage">
            <div className="row ">
                <div className="col">
                <PostElement posting = {{list, setList}}/>
                </div>
            </div>
          
        </div>
        <Footer/>
        </>
    
    );
}

export default Post