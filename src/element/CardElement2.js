import React, {useState,useEffect} from "react";
import './css/cardElement.css'
import moment from "moment";
import './css/cardElement.css'
const CardElement = (props) => {
    const [viewELement, setViewElement] = useState('');
    let avatarfilename = props.avatarfilename 
    let avatarname = props.avatarname
    let post2image = props.post2image
    let post2date = props.post2date
    let post2topic = props.post2topic
    let postname = props.postname 
    useEffect(() => {
        post2topic.length > 30 ? setViewElement('hideDiv')  :
        setViewElement('showDiv') 
    },[post2topic])
 
      return(
        <>
        <div className="card-body ">
            <div className=" mb-3 fw-bold gap-5 "><img  loading="lazy" className = "avatar-icon text-start"src = {`sampleImg/${avatarfilename}`} alt = "avatar"/>{postname === '' ?   avatarname : postname}</div>
            <div className="wrapper row" 
                style={post2image !== '' ? {backgroundImage: `url(sampleImg/${post2image})`, backgroundSize:"contain", backgroundRepeat:"no-repeat", backgroundPosition: "center"} : {backgroundColor: "#1F1D20"}}>               
           </div>
       
            <h6 className={`topic mt-3 card-title fw-bold ${viewELement}`} >{post2topic}</h6>
           <h6 className="fw-bold mt-1 cMore"> {viewELement === 'hideDiv' ? '...see more' : ''}</h6>
            <h6 className="card-title date">{moment(post2date).startOf('hour').fromNow()}</h6>
            
         </div>
        </>
    );

}

export default CardElement