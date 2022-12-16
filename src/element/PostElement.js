import React,{useState} from "react";
import './css/postElement.css'
import { useNavigate } from "react-router-dom";

const PostElement = (props) => {

    const navigate = useNavigate();
    const [topic, setTopic] = useState('');
    const [user, setUser] = useState('');
    const [msg, setMsg] = useState('');
   

    const postData = (e) => {
        e.preventDefault();
        
        if(msg === "" || user === ""){
            return 
        }

        props.posting.setList([{
            id: Object.keys(props.posting.list).length + 1,
            body: msg,
            title: topic,
            userId: user
         },...props.posting.list])
         navigate('/1')

            
          
    }
  

    return(
       <>
        <form className="row justify-content-center  " onSubmit={postData} >
            <div className="form-group card col-lg-4 col-md-4 gap-3 formCard ">
                <h1 className="text-center mt-4 fw-semibold">Create a Post</h1>
                <label className="mt-4" >Topic:</label>
                <input 
                    onChange={(event) => setTopic(event.target.value)}
                    type="text" 
                    className="form-control" 
                    value ={topic}
                    placeholder="Topic / subject"/>

                <label >To:</label>
                <input 
                    onChange={(event) => setUser(event.target.value)}
                    type="text" 
                    className="form-control" 
                    value ={user}id="exampleFormControlInput1" 
                    placeholder="Anonymous Name"/>
                <label >Message</label>
                <textarea
                    onChange = {(event) => setMsg(event.target.value)}
                    className="form-control" 
                    value ={msg}id="exampleFormControlTextarea1" 
                    rows="3">
                </textarea>
                <button className="text-center btn btn-warning postbtn mb-3">Post</button>
            </div>
        </form>
      </>
    );
}
export default PostElement