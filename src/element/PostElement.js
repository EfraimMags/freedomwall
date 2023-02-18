import React,{useState, useContext, useEffect} from "react";
import {UserContext} from '../helpers/UserContext'
import './css/postElement.css'
import { useNavigate } from "react-router-dom";
import axioshelper from "../helpers/axios";
import AvatarComp from "../components/AvatarComp";
import PostLayout1 from "./PostLayout1";
import Modal1 from "../components/Modal1";
import axios from "axios";
const PostElement = (props) => {
    //usercontext from the App
    const {tempList,  forceUpdate,  setPost,  setNum,  post,  num} = useContext(UserContext);
    //setting user context for the post layouts
    const [avatarName, setAvatarName] = useState('');
    const [name, setName] = useState('');
    const [backgroundName, setbackgroundName] = useState('');
    const [topic, setTopic] = useState('');
    const navigate = useNavigate();
    const [isModal, setModal] = useState(true);
    const [imgNames, setimgNames] = useState([]);
    const [bckNames, setBckNames] = useState([]);
    const [avatarKey, setAvatarKey] = useState(0);
    const [spage, setSpage] = useState(0);
    const [spage2, setSpage2] = useState (0);
    const [layout, setLayout] = useState(1);
    const [isSent, setSend]= useState (0);
    const [file, setFile] = useState('');
    const avatarURL = '/avatar';
    const bckURL = '/background';
    const sPageURL = '/spage';
    const sPage2URL = '/spage2';
    useEffect(() =>{

        async function fetchAvatar(){
            const response = await axioshelper.get(avatarURL)
            console.log(response.data)
            setimgNames(response.data)
        }
        fetchAvatar();

        async function fetchBackground(){
            const response = await axioshelper.get(bckURL)
            console.log(response.data)
            setBckNames(response.data)
        }
        fetchBackground()
       
        async function fetchSingleList(){
            const response = await axioshelper.get(sPageURL)
            console.log(response.data)
            setSpage(response.data)
        }
        fetchSingleList()


        async function fetchSingleList2(){
            const response = await axioshelper.get(sPage2URL)
            console.log(response.data)
            setSpage2(response.data)
        }
        fetchSingleList2()
      
    },[])
    
    useEffect(()=>{
        isModal === true ? document.body.style.overflow = "hidden" :
                           document.body.style.overflow = "scroll"
        isModal === false ? window.scrollTo(0, 0) : 
                    window.scrollTo(5, 0) 
    },[isModal])

    const postData = (e) => {
        e.preventDefault();
       
        if(topic === ''){
            return
        }
  
        axios.post(`http://localhost:3002/add-post`, {
            avatarid: avatarKey ,
            name: name === '' ? avatarName : name,
            backgroundName: backgroundName ,
            topic: topic
        })
        
        .then(() => console.log('added'))
        .catch((err) => console.log(err))
     

        axios.post(`http://localhost:3002/addpostList`, {
            postCategory: layout,
            spage: spage.post1id + 1
        })
        .then(() => console.log('added'))
        .catch((err) => console.log(err))



        forceUpdate();
        forceUpdate();
        forceUpdate();
        forceUpdate();
        navigate('/');
       
          
    }

    const sampleUpload = (e) =>{
        e.preventDefault();
        const formData = new FormData()
        formData.append('image', file)
        axios.post(`http://localhost:3002/upload`, formData ,{

        })
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
        
       axios.post(`http://localhost:3002/add-post2`, {
           
            avatarid: avatarKey ,
            name: name === '' ? avatarName : name,
            img:  "freedomwall_"+file.name,
            topic: topic
            

        })
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
        
        axios.post(`http://localhost:3002/addpostList`, {
            postCategory: layout,
            spage: spage2.post2id + 1
        })
        .then(() => console.log('added'))
        .catch((err) => console.log(err))
        
        forceUpdate();
        forceUpdate();
        forceUpdate();
        navigate('/')

    }
    
    const showImagePanel = () =>{
        layout === 1 ? setLayout(2) : setLayout(1)
        setModal(false)
    }
    
    

    return(
       <>
    
       <UserContext.Provider value={{setFile, setAvatarName,bckNames,imgNames,setbackgroundName, setTopic, setAvatarKey}}>
            {isModal && <Modal1 setName = {setName} setModal = {setModal}/>}
          
            <form className="row align-self-center justify-content-center formOuter" onSubmit = {layout === 2 ? sampleUpload : postData} encType = "multipart/form-data" method="post">
                <div className="form-group card col-10 col-lg-4 col-md-8 gap-3 formCard ">
                    <h1 className="text-center mt-4 fw-semibold">Create a Post  {avatarKey}</h1>
                    <PostLayout1 layout = {layout}/>
                    <div className="btns">
                    <button className="text-center btn btn-warning postbtn mt-0">Post</button>
                    <a className="text-center btn btn-warning addImage mt-0" onClick={showImagePanel}>+</a>
                    </div>
                </div>
            </form>
        </UserContext.Provider>
      </>
    );
}
export default PostElement