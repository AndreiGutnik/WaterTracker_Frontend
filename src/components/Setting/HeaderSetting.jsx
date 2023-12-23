const Header = ({ showModal }) => {
    return (
        <nav className="navbar bg-dark mb-3">
            <div className="container-fuild">
                <button className="btn btn-outline-success" onClick={showModal}>Setting</button>
            </div>
        </nav>
    )
}
export default Header