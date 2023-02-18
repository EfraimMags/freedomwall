
import React,{useState,useContext, useEffect} from "react";
import ImageComps from "./ImageComps";
import './css/imageComps.css'

const AvatarComp = (props) => {
    let list = props.listofavatar;
    const [name, setName] = useState('');
    const [imgIndex, setIndex] = useState(0);
    const [avatarID, setAvatarID] = useState(1);

    const changeStyle = (index) =>{

        
        if(imgIndex === index){
            return "active"
        }else{
            return "inactive"
        }

    }
    useEffect(() =>{
        props.setAvatar(name)
        props.setAvatarID(avatarID)
    },[name, avatarID])

    return(
        <>
        
        <div className= "mb-2">
         Choose Avatar : 
        </div>
        
        {list.map((imgs, keys)=> (
            
             <ImageComps 
              avatarID = {imgs.avatarid}
              setAvatarID = {setAvatarID}
              page = 'avatar'
              setName = {setName}
              imgs ={imgs.avatarfilename} 
              index ={keys}
              setIndex= {setIndex}
              key ={keys}
              changeStyle ={changeStyle(keys)}
             
            
              />
        ))}
 
        </>
    );
}

export default AvatarComp;