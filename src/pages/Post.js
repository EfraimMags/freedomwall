import React, {useContext} from "react";
import {UserContext} from '../helpers/UserContext';
import './css/post.css';
import PostElement from '../element/PostElement';

const Post = () => {

    const {list, setList} = useContext(UserContext)
    
    return (

    
        <div className="container-fluid postPage">
            <PostElement posting = {{list, setList}}/>
        </div>
        
    
    );
}

export default Post