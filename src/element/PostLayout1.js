import React,{useState, useContext, useEffect} from "react";
import AvatarComp from "../components/AvatarComp";
import TextBackground from "../components/TextBackground";
import {UserContext} from '../helpers/UserContext'
import PostLayout2 from "./PostLayout2";
import './css/postElement.css'
import './css/post1.css'

const PostLayout1 = (props) =>{
    const {setFile, setAvatarName,bckNames , imgNames,setbackgroundName,setTopic, setAvatarKey} = useContext(UserContext);
    const [msg, setMsg] = useState('');
    const [background,setbackground] = useState('');
    const [avatar, setAvatar] = useState(0);
    const [avatarID, setAvatarID] = useState(0);
   

    useEffect(() => {
        setbackgroundName(background)
        setAvatarName(avatar)
        setTopic(msg)
        setAvatarKey(avatarID)
    },[background, msg, avatar, avatarID])

    
    return(
        <>
      
                <div>
                <div className="row  justify-content-center " >
                <AvatarComp
                listofavatar = {imgNames}
                setAvatar = {setAvatar}
                setAvatarID ={setAvatarID}
                />
                </div>
             
                <textarea
                    style={{backgroundColor: 'rgba(200, 200, 200)', border:'2px solid #1F1D20', resize: "none", fontSize: "15px" ,fontWeight: 'bold' }}
                    onChange = {(event) => setMsg(event.target.value)}
                    className="form-control mt-2 mb-2" 
                    value = {msg} id="exampleFormControlTextarea1" 
                    rows= {props.layout === 1 ? 5 : 3} 
                    placeholder = "Enter Anything">
                </textarea>
                
                <div>
                    {props.layout === 1 ? 
                    <TextBackground
                    setbackground = {setbackground}
                    listofbackgrounds= {bckNames}
                    />
                    : <PostLayout2 setFile= {setFile}/> }
                 </div>
                </div>
      
        </>
    );
}

export default PostLayout1;