//import imgs from '../sampleImg/ddss.png'
import './css/imageComps.css'
import { useState } from 'react';
const ImageComps = (props) =>{
    const selectImagestyle =  props.page === 'avatar'  ? 'imgcomps' : 'imgBck' ;

    const selectImage= () =>{
        props.setName(props.imgs)
        props.setIndex(props.index)
        props.setAvatarID(props.avatarID)
    }

    return (
        <> 
         <img 
           onClick={selectImage} 
            className={`${selectImagestyle} ${props.changeStyle}`}
            src={`sampleImg/${props.imgs}`} 
            alt="x"
            loading="lazy"
        />
        </>
    );
}

export default ImageComps;