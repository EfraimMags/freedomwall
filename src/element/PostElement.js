import React,{useState} from "react";
import './css/postElement.css'
import { Outlet, Link } from "react-router-dom";


const PostElement = (props) => {

    const [topic, setTopic] = useState('');
    const [user, setUser] = useState('');
    const [msg, setMsg] = useState('');
    const postData = () =>{

   
        props.posting.setList([{
            id: Object.keys(props.posting.list).length + 1,
            body: msg,
            title: topic,
            userId: user
        },...props.posting.list])

    }
    return(
       <>
        <form className="row justify-content-center ">
            <div className="form-group card col-lg-4 col-md-4 gap-3 formCard ">
                <h3 className="text-center mt-4">Create a Post</h3>
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
                <Link className ="link" to="/Home"><button onClick={postData} className="text-center btn btn-primary postbtn mb-5">Post</button></Link>
            </div>
        </form>
       </>
    );
}
export default PostElement