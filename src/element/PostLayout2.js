import React,{useState} from "react";
import { parsePath } from "react-router-dom";

const PostLayout2 = (props) => {

    const [selectedImages, setSelectedImages] = useState([]);

    const onSelectFile = (event) => {
      const datafile = event.target.files[0]
      props.setFile(datafile)
      console.log(datafile)
      setSelectedImages(URL.createObjectURL(datafile));
    };

    return (
      <section className="row gap-5 mt-3">
       
        { selectedImages.length === 0 ? 
            <div className="col-3 mt-2">
                {
                    <input
                        type="file"
                        name="image"
                        onChange={onSelectFile}
                      
                    />
                }
            </div> :
            <div  className="col-12 col-lg-12 col-md-12  "> 
                <div  style={{border: "2px solid black" }}>
               
                <div className= "text-center"style={{ overflowX: "scroll", margin: "auto", height: "40vh"}}>
                    <img style={{height: "100%"}}className = "p-2"  src={selectedImages}  alt=" " />
                </div>
              
                </div> 
                     <button 
                        style={{width:"100%", 
                        height: "30px", 
                        fontSize: "12px"}}
                        onClick ={() => setSelectedImages([])}
                        className="btn btn-danger mt-3" >delete</button>
                </div>    
        
        }
      
        

      </section>
    );
  }


export default PostLayout2;