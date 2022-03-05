const Header = () => {
    return (
        <header className="header">
            <div className="header-container">
                <p className="header-container__title">InfoPelis</p>
            </div>
            <div className="header-navbar nabvar">
                <ul className="navbar-options">
                    <li className="navbar-options-container"><a className="navbar-options-container__a" href="/TopSeries">Top TV Series</a></li>
                    <li className="navbar-options-container"><a className="navbar-options-container__a" href="/TopMovies">Top Movies</a></li>
                    <li className="navbar-options-container"><a className="navbar-options-container__a" href="/MostPopularMovies">Most Popular Movies</a></li>
                    <li className="navbar-options-container"><a className="navbar-options-container__a" href="/MostPopularSeries">Most Popular TV series</a></li>
                    <li className="navbar-options-container"><a className="navbar-options-container__a" href="/InTheathers">In theaters</a></li>
                    <li className="navbar-options-container"><a className="navbar-options-container__a" href="/ComingSoon">Coming Soon</a></li>
                    <li className="navbar-options-container"><a className="navbar-options-container__a" href="/BoxOffice">Box Office</a></li>
                </ul>
            </div>
        </header>
    )
}
export default Header