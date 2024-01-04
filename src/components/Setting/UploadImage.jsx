import React, { useState } from "react";
import { Avatar } from "./Upload.styled";
import  Icons from "../../images/sprite.svg";
import './UploadImage.css';
import { useAuth } from "hooks/useAuth";
import { useDispatch } from "react-redux";
import { updateAvatar } from "redux/auth/operations";


const UploadImage = () => {
    const [file, setFile] = useState(null);
    const { user } = useAuth()
    const dispatch  = useDispatch()
    

    const handleChange = (event) => {
        // if (event.target.files.length > 0) {
        //     const file = URL.createObjectURL(event.target.files[0]);
        //     setFile(file);
        //     dispatch(updateAvatar(file))
        // }
        const formData = new FormData()
        if (event.target.files.length <= 0) {
            return
        }  
        formData.append('avatar', event.target.files[0])
        dispatch(updateAvatar(formData))
    }
console.log(user.avatarURL)
    
    return (
        <div className="photo">
                <h3 className="form-check-label" htmlFor="exampleCheck1">Your photo</h3>
                <div className="App">
                    <input name="photo" type="file" onChange={handleChange} id="upload" accept="image/*" style={{ display: "none" }} />
                    <label className="upload" htmlFor="upload">
                        <Avatar id="avatar" src={user.avatarURL} />
                        <svg width="16" height="16" fill="blue" aria-label="upload picture" component="span">
                            <use href={Icons + '#upload'}></use></svg>Upload a photo
                    </label>
                </div>
            </div>
        );
    }


export default UploadImage 