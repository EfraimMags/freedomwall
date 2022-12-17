import React, { useContext } from "react";
import './css/singlePostPage.css'
import { useParams } from "react-router-dom";
import CardElement from "../element/CardElement";
import { UserContext } from "../helpers/UserContext";
import Footer from "../components/Footer";

const SinglePostPage = () =>{
    const {id} = useParams();
    const {list, setList, names } = useContext(UserContext);
    let keys = parseInt(id)-1;
    let myName = typeof(list[keys].userId) === 'number' ? list[keys].userId = names[list[keys].userId] : list[keys].userId;

    return(
        <>
        <div className="container singlePost">
            <div className="row  justify-content-center text-center">
                <h1 className="fw-bold lh-1 postName">A post to <span className="postHighlights">{myName}</span></h1> 
                <div className="col-lg-5 col-md-6  card singlePostCard">
                    <CardElement
                    key = {keys}
                    name = {myName}
                    title = {list[keys].title}
                    body = {list[keys].body}
                    ></CardElement>
                </div>  
            </div>
        </div>
        <Footer/>
        </>
    );
}
export default SinglePostPage 