import React, { useState } from "react";
import { Avatar } from "./Upload.styled";
import  Icons from "../../images/sprite.svg";
import './UploadImage.css';


const UploadImage = () => {
    const [file, setFile] = useState(null);

    const handleChange = function loadFile(event) {
        if (event.target.files.length > 0) {
            const file = URL.createObjectURL(event.target.files[0]);
            setFile(file);
        }
    };
  return (
      <div className="photo">
 <h3 className="form-check-label" htmlFor="exampleCheck1">Your photo</h3>
        <div className="App">
            <input type="file" onChange={handleChange} id="upload" accept="image/*" style={{display: "none"}}/>
        <label className="upload" htmlFor="upload">
          <Avatar id="avatar" src={file}/>
          <svg width="16" height="16" fill="blue" aria-label="upload picture" component="span">
            <use href={Icons + '#upload'}></use></svg>Upload a photo
            </label>
      </div>
      </div>
    );
}

export default UploadImage 