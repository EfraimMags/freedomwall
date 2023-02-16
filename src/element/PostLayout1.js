import React,{useState, useContext, useEffect} from "react";
import AvatarComp from "../components/AvatarComp";
import TextBackground from "../components/TextBackground";
import {UserContext} from '../helpers/UserContext'
import './css/postElement.css'
import './css/post1.css'
import axios from "../helpers/axios";
import Modal1 from "../components/Modal1.js";
const PostLayout1 = (props) =>{
    const {setAvatarName,bckNames , imgNames,setbackgroundName,setTopic} = useContext(UserContext);
    const [msg, setMsg] = useState('');
    const [background,setbackground] = useState('');
    const [avatar, setAvatar] = useState([]);
    const avatarURL = '/avatar'
    useEffect(() => {
        setbackgroundName(background)
    },[background, msg])

    
    return(
        <>
      
                <div>
                <div className="row  justify-content-center " >
                <AvatarComp
                listofavatar = {imgNames}
                />
                </div>
                <textarea
                style={{backgroundColor: 'rgba(200, 200, 200)', border:'2px solid #1F1D20'}}
                    onChange = {(event) => setMsg(event.target.value)}
                    className="form-control mt-2 mb-2" 
                    value = {msg} id="exampleFormControlTextarea1" 
                    rows="5">
                </textarea>
                <div>
                <TextBackground
                 setbackground = {setbackground}
                 listofbackgrounds= {bckNames}
                />
           
                 </div>
                </div>
      
        </>
    );
}

export default PostLayout1;