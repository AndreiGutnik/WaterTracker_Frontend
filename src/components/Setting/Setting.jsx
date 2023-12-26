import { Icons } from "react-toastify"

const Setting = ({ children, closeModal }) => {
    return (
        <div
            className='modal fade show'style={{
                display: 'inline-flex',
                padding: '32px 12px',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                gap: '24px',
                borderRadius: '10px',
                          }}
        >
            
                    <div className="modal-header"
                style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '52px',
                          }}
                        
                    >
                        <h2 className="modal-title"
                            style={{
                                width: '180px',
                                fontFamily: 'RobotoMedium',
                                fontSize: '26px',
                                fontStyle: 'normal',
                                fontWeight: 500,
                                lineHeight: '32px',
                                textAlign: 'left'
                          }}
                        >Setting</h2>
                        {/* <button type="button" className = "bth-close" aria-label='Close' onChange={closeModal}> */}
                        <svg width="24" height="24"
                        style={{
                                color: 'blue',
                          }}>
                                <use href={Icons + '#settings'}></use>
                                onChange={closeModal}
                            </svg>
                        {/* </button> */}
                    </div>
                    <div className="modal-body">{children}</div>
                </div>
        
    )
}

export default Setting
