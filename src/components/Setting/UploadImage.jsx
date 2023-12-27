import React, { useState } from "react";
import { Icons } from "react-toastify";
import './UploadImage.css';

const UploadImage = () => {

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div>
          <h3 className="form-check-label" htmlFor="exampleCheck1">Your photo</h3>

      <div className="photo">
      {selectedImage && (
        <div className="selec-image-div">
          {/* <span id="file-chosen">No file chosen</span> */}
          <img className="selec-image"
                      alt="not found"
            src={URL.createObjectURL(selectedImage)}></img>
        <br />
        </div>
      )}
      
      <input type="file" id="upload" 
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
          }} 
          style={{display: 'none'}}/>
          <label className="upload" for="upload">
          <svg width="16" height="16"
                        style={{color: 'blue'}}>
                                <use href={Icons + '#arrow-up'}></use></svg>Upload a photo</label>
        </div>
        </div>
  );
};

export default UploadImage