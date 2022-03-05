import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from "../pages/Home"
import TopMovies from "../pages/TopMovies"
import NotFound from "../pages/NotFound";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path ="/" component={Home}></Route>
        <Route exact path="/Topmovies" component={TopMovies}></Route>
        {/* <Route exact path="/TopSeries" component={TopSeries}></Route>
        <Route exact path="/MostPopularMovies" component={MostPopularMovies}></Route>
        <Route exact path="/MostPopularSeries" component={MostPopularSeries}></Route>
        <Route exact path="/InTheaters" component={InTheaters}></Route>
        <Route exact path="/ComingSoon" component={ComingSoon}></Route>
        <Route exact path="/BoxOffice" component={BoxOffice}></Route> */}
        <Route path="*" component={NotFound}></Route>
      </Switch> 
    </BrowserRouter>
  );
}

export default App;
