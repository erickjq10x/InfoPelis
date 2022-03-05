import useTopMoviesHelper from "../hooks/useTopMoviesHelper"

const TopMoviesList = () => {
    const {hola} = useTopMoviesHelper()
    return (
        <div className="topMovies-container">
            <ul className="topMovies-list">
                <li className="topMovies-list-card" >
                    {/* <img className="topMovies-list-card__image" src={movies.Image} alt="" />
                    <p className="topMovies-list-card__title">{movies.Title}</p>
                    <p className="topMovies-list-card__rank">{movies.Rank}</p> */}
                </li>
            </ul>
            {/* <div onClick={hola()}>hola</div> */}
        </div>
    )
}   

export default TopMoviesList