import Icons from "../../images/sprite.svg";
import './Setting.css';
// import { useState } from "react";

const Setting = ({ children, closeModal }) => {
   
    // const [closing, setClosing] = useState(false);

    // const handleClose = () => {
    //     setClosing(false);

    //         const closeTimeout = setTimeout(() => {
    //             closeModal();
    //             clearTimeout(closeTimeout);
    //         }, 1500)
    //     }
    //     const backdropClasses = closing ? 'backdrop backdrop-hide' : 'backdrop';

        return (
            // <div className={backdropClasses} onClick={handleClose}>
            <div className='modal-fade-show'>
                    <div className="modal-header">
                        <h2 className="modal-title">Setting</h2>
                        <span className="bth-close" onClick={closeModal}>
                            <svg width="24" height="24">
                                <use href={Icons + '#close'}></use>
                            </svg>
                        </span>
                    </div>
                    <div className="modal-body">{children}</div>
                </div>
                // </div>
    )
    }


export default Setting
