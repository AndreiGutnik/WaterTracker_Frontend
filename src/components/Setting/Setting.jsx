const Setting = ({ children, closeModal }) => {
    return (
        <div
            className='modal fade show'
            // style={{ display: 'block', backdropFilter: 'blur(5px)' }}
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h3 className="modal-title"
        //                     style={{
                            
        // margin: 8,
        // padding: "12px 16px",
        // color: "black",
                        //   }}
                        >Setting</h3>
                        <button
                            type="button"
                            className="bth-close"
                            aria-label='Close'
                            onChange={closeModal}
                        ></button>
                    </div>
                    <div className="modal-body">{children}</div>
                </div>
            </div>
        </div>
    )
}

export default Setting