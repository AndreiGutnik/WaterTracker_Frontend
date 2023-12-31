import  Icons  from "../../images/sprite.svg";
import './Setting.css';

const Setting = ({ children, closeModal }) => {
    return (
        <div
            className='modal-fade-show'>
            
                    <div className="modal-header">
                <h2 className="modal-title">Setting</h2>
                <span className = "bth-close" onChange={closeModal}>
                        <svg   width="24" height="24">
                                <use href={Icons + '#close'}></use>
                </svg>
                </span>
                    </div>
                    <div className="modal-body">{children}</div>
                </div>
        
    )
}

export default Setting
