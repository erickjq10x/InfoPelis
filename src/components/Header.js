const Header = () => {
    return (
        <header className="header">
            <div className="header-container">
                <p className="header-container__title">InfoPelis</p>
            </div>
            <div className="header-navbar nabvar">
                <ul className="navbar-options">
                    <li className="navbar-options__p"><p>Top Movies</p></li>
                    <li className="navbar-options__p"><p>Top TV Series</p></li>
                    <li className="navbar-options__p"><p>Most Popular Movies</p></li>
                    <li className="navbar-options__p"><p>Most Popular TV series</p></li>
                    <li className="navbar-options__p"><p>In theaters</p></li>
                    <li className="navbar-options__p"><p>Coming Soon</p></li>
                    <li className="navbar-options__p"><p>Box Office</p></li>
                </ul>
            </div>
        </header>
    )
}
export default Header