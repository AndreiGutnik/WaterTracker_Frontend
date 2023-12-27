import { Icons } from "react-toastify";
import './Setting.css';

const Setting = ({ children, closeModal }) => {
    return (
        <div
            className='modal-fade-show'>
            
                    <div className="modal-header">
                        <h2 className="modal-title">Setting</h2>
                        <button type="button" className = "bth-close" aria-label='Close' onChange={closeModal}>
                        <svg width="24" height="24">
                                <use href={Icons + '#settings'}></use>
                            </svg>
                        </button>
                    </div>
                    <div className="modal-body">{children}</div>
                </div>
        
    )
}

export default Setting
