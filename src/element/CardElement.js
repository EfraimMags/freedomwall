import React,{useState}from "react";
import './css/cardElement.css'
import moment from "moment/moment";

const CardElement = (props) => {

    let avatarfilename = props.avatarfilename 
    let avatarname = props.avatarname
    let post1background = props.post1background
    let post1date = props.post1date
    let post1topic = props.post1topic
    let postname = props.postname
 
      return(
        <>
          
            <div className="card-body ">
    
                <div className=" mb-3 fw-bold gap-5 "><img  className = "avatar-icon text-start"src = {`sampleImg/${avatarfilename}`} alt = "avatar"/>{ postname === '' ?   avatarname : postname}</div>
                <div className="wrapper row justify-align-center text-center " style={post1background != '' ? {backgroundImage: `url(sampleImg/${post1background})`, backgroundSize:"contain", backgroundRepeat:"no-repeat", backgroundPosition: "center"} : {border: "2px solid #1F1D20", backgroundColor: "#f0ad00"}}>
                    <h6 className="card-title fw-bold">{post1topic}</h6> 
                </div>
                <h6 className="card-title date mt-2">{moment(post1date).startOf('hour').fromNow()}</h6>
               
            </div>
            
        </>
    );

}

export default CardElement