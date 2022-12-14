import React, {useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../pages/Home'
import About from '../pages/About'
import Post from '../pages/Post'
import Contact from '../pages/Contact'
import FirstLayout from '../Layouts/FirstLayout'
import { UserContext } from "../helpers/UserContext";

const App = () =>{

    const [msg, setmsg] = useState('hello world');
    return(

     <UserContext.Provider value={{msg, setmsg}}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<FirstLayout/>}>
                    <Route index element={<Home />} />
                    <Route path="About" element={<About />} />
                    <Route path="Contact" element={<Contact />} />
                    <Route path="Post" element={<Post />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </UserContext.Provider>
    );

    
}
export default App