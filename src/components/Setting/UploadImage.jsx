import React, { useState } from "react";
import { Icons } from "react-toastify";

const UploadImage = () => {

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div>
          <h3 className="form-check-label" htmlFor="exampleCheck1"
          style={{
                            fontFamily: 'RobotoMedium',
                            fontSize: '18px',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            lineHeight: '20px' 
              }}
          >Your photo</h3>

      {selectedImage && (
        <div>
          <img
                      alt="not found"
                      display= 'block'
                      borderRadius={'80px'}    
                      width={"80px"}
                      height={"80px"}
                      background='url(<path-to-image>), lightgray 50% / cover no-repeat'
                      src={URL.createObjectURL(selectedImage)}      
          />
        <br />
        </div>
      )}

      <br />
          <br /> 
        
      <input
        type="file"
       id="upload" 
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
          }} 
          style={{display: 'none'}}
          />
          <label for="upload">
          <svg width="16" height="16"
                        style={{
                                color: 'blue',
                          }}>
                                <use href={Icons + '#arrow-up'}></use>
                            </svg>Upload a photo</label>
          {/* <span id="file-chosen">No file chosen</span> */}
    </div>
  );
};

export default UploadImage