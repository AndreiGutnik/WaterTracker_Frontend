import  Icons from "../../images/sprite.svg";
import { useAuth } from "hooks/useAuth";
import { useDispatch } from "react-redux";
import { updateAvatar } from "redux/auth/operations";
import { WrapperPhoto, NamePhoto, AppPhoto, InputPhoto, LabelUpload, Avatar } from "./Upload.styled";


const UploadImage = () => {
    const { user } = useAuth()
    const dispatch  = useDispatch()
    

    const handleChange = (event) => {
        const formData = new FormData()
        if (event.target.files.length <= 0) {
            return
        }  
        formData.append('avatar', event.target.files[0])
        dispatch(updateAvatar(formData))
    }
console.log(user.avatarURL)
    
    return (
        // <div className="photo">
        //         <h3 className="form-check-label" htmlFor="exampleCheck1">Your photo</h3>
        //         <div className="App">
        //             <input name="photo" type="file" onChange={handleChange} id="upload" accept="image/*" style={{ display: "none" }} />
        //             <label className="upload" htmlFor="upload">
        //                 <Avatar id="avatar" src={user.avatarURL} />
        //                 <svg width="16" height="16" fill="blue" aria-label="upload picture" component="span">
        //                     <use href={Icons + '#upload'}></use></svg>Upload a photo
        //             </label>
        //         </div>
        //     </div>
         <WrapperPhoto>
            <NamePhoto>Your photo</NamePhoto>
            <AppPhoto>
                    <InputPhoto name="photo" type="file" onChange={handleChange} id="upload" accept="image/*" style={{ display: "none" }} />
                    <LabelUpload>
                        <Avatar id="avatar" src={user.avatarURL} />
                        <svg width="16" height="16" fill="blue" aria-label="upload picture" component="span">
                            <use href={Icons + '#upload'}></use></svg>Upload a photo
                </LabelUpload>
                </AppPhoto>
            </WrapperPhoto>
        );
    }


export default UploadImage 