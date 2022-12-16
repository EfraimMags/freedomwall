import React, {useContext} from "react";
import {UserContext} from '../helpers/UserContext';
import './css/post.css';
import PostElement from '../element/PostElement';
import Footer from "../components/Footer";

const Post = () => {

    const {list, setList} = useContext(UserContext)
    
    return (

        <>
        <div className="container-fluid postPage">
            <PostElement posting = {{list, setList}}/>
        </div>
        <Footer/>
        </>
    
    );
}

export default Post