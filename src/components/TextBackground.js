
import React,{useState,useContext, useEffect} from "react";
import ImageComps from "./ImageComps";
import './css/txtbckgrnd.css'

const TextBackground= (props) => {
    let list = props.listofbackgrounds;
    const [name, setName] = useState('');
    const [imgIndex, setIndex] = useState(-1);
    const [avatarID, setAvatarID] = useState(0); // nothing

    const changeStyle = (index) =>{
        if(imgIndex === index){
            return "active"
        }else{
            return "inactive"
        }
    }

    useEffect(()=>{
        props.setbackground(name)
        
    },[name])


    return(
        <>
        
        <div className="bck-part">
         Choose background: 
        
        {list.map((imgs, keys)=> (
           <ImageComps 
            avatarID = {imgs.bckid}  // nothing
            setAvatarID = {setAvatarID}  // nothing
            page = 'background'
            setName = {setName}
            imgs ={imgs.bckfilename} 
            key ={keys}
            index ={keys}
            setIndex= {setIndex}
            changeStyle = {changeStyle(keys)}
            />
        ))}
      
        </div>
        
        </>
    );
}

export default TextBackground;