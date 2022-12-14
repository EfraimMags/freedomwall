import React, {useContext} from "react";
import {UserContext} from '../helpers/UserContext'
const Post = () => {

    const {msg, setmsg} = useContext(UserContext)
    return (

    <>
    {msg}
    <p>post Page</p>
    <button className = "btn bnt-primary" onClick={() => setmsg('pangit')}> Click </button>
    </>
    );
}

export default Post