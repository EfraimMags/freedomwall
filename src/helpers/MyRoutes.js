
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../pages/Home'
import About from '../pages/About'
import Post from '../pages/Post'
import Contact from '../pages/Contact'
import FirstLayout from '../Layouts/FirstLayout'
import { UserContext } from "./UserContext";
import SinglePostPage from "../pages/SinglePostPage";
import NoPage from "../pages/NoPage";
import Login from "../pages/Login";
import Admin from "../pages/Admin";

const MyRoutes = (props) =>{
   
    return(
     <UserContext.Provider value={props.message}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<FirstLayout/>}>
                    <Route index element={<Home />} />
                    <Route path ="Home" element={<Home />}/>
                    <Route path="About" element={<About />} />
                    <Route path="Contact" element={<Contact />} />
                    <Route path="Post" element={<Post />} />
                    <Route path="Admin" element={<Admin />} />
                    <Route path=":id" element = {<SinglePostPage/>}/>
                    <Route path="Login" element = {<Login/>}/>
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </UserContext.Provider>
    );

    
}
export default MyRoutes