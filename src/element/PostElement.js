import React,{useState, useContext, useEffect} from "react";
import {UserContext} from '../helpers/UserContext'
import './css/postElement.css'
import { useNavigate } from "react-router-dom";
import axios from "../helpers/axios";
import AvatarComp from "../components/AvatarComp";
import PostLayout1 from "./PostLayout1";
import Modal1 from "../components/Modal1";

const PostElement = (props) => {
    //usercontext from the App
    const {list, setList, names, setNum} = useContext(UserContext);
    //setting user context for the post layouts
    const [avatarName, setAvatarName] = useState('');
    const [backgroundName, setbackgroundName] = useState('');
    const [topic, setTopic] = useState('');
    const navigate = useNavigate();
    const [isModal, setModal] = useState(true)
    const [imgNames, setimgNames] = useState([]);
    const avatarURL = '/avatar'
   
    useEffect(() =>{

        async function fetchData(){
            const response = await axios.get(avatarURL)
            console.log(response.data)
            setimgNames(response.data)
        }
        fetchData();

    },[])
    
    useEffect(()=>{
        isModal === true ? document.body.style.overflow = "hidden" : document.body.style.overflow = "scroll"
        isModal === false ? window.scrollTo(0, 0) : window.scrollTo(5, 0) 
    },[isModal])


        const bckNames = 
        [   'fist.png',
            'fist.png',
            'fist.png',
            'fist.png',
            'fist.png',
            'fist.png',
            'fist.png',
            'fist.png',
            
        ];
   
    const postData = (e) => {
        e.preventDefault();
        setNum(1);
        navigate('/');
        
        {/** 
        if(msg === "" || user === ""){
            return 
        }

        axios.post(`http://localhost:3002/add-post`,{
            id: id,
            body: msg,
            title: topic,
            userId: user
        })
        .then(() => console.log('added'))
        .catch((err) => console.log(err))
        setNum(id);
        navigate('/1');

            */}
          
    }
    
    

    return(
       <>
    
       <UserContext.Provider value={{setAvatarName,bckNames,imgNames,setbackgroundName,setTopic}}>
            {isModal && <Modal1 setModal = {setModal}/>}
            <form className="row align-self-center justify-content-center formOuter" onSubmit={postData} >
                <div className="form-group card col-10 col-lg-4 col-md-7 gap-3 formCard ">
                    <h1 className="text-center mt-4 fw-semibold">Create a Post {backgroundName}</h1>
                    <PostLayout1/>
                    <div className="btns">
                    <button className="text-center btn btn-warning postbtn mt-0">Post</button>
                    <button className="text-center btn btn-warning addImage mt-0">+</button>
                    </div>
                </div>
            </form>
        </UserContext.Provider>
      </>
    );
}
export default PostElement