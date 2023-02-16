
import React,{useState,useContext} from "react";
import ImageComps from "./ImageComps";
import './css/imageComps.css'

const AvatarComp = (props) => {
    let list = props.listofavatar;
    const [name, setName] = useState('');
    const [imgIndex, setIndex] = useState(-1);

    const changeStyle = (index) =>{
        if(imgIndex === index){
            return "active"
        }else{
            return "inactive"
        }
    }

    return(
        <>
        
        <div className= "mb-2">
         Choose Avatar : {imgIndex}
        </div>
        
        {list.map((imgs, keys)=> (
            
             <ImageComps 
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