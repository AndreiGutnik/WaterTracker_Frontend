import  Icons  from "../../images/sprite.svg";
import './Setting.css';

const Setting = ({ children, closeModal }) => {
    return (
        <div
            className='modal-fade-show'>
            
                    <div className="modal-header">
                        <h2 className="modal-title">Setting</h2>
                        <svg  className = "bth-close" width="24" height="24" onChange={closeModal}>
                                <use href={Icons + '#close'}></use>
                            </svg>
                    </div>
                    <div className="modal-body">{children}</div>
                </div>
        
    )
}

export default Setting
