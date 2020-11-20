import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import routes from "../../routes";
import {
  gethMovieDetailsById,
  BASE_URL_POSTER,
} from "../../servises/themoviedbApi";

import Cast from "../../views/Cast/Cast";
import Reviews from "../../views/Reviews/Reviews";

class MovieDetailsPage extends Component {
  state = {
    movie: null,
    error: false,
    loading: false,
  };

  componentDidMount = () => {
    const { match } = this.props;
    const { movieId } = match.params;

    gethMovieDetailsById(movieId).then((res) => this.setState({ movie: res }));
  };

  render() {
    const { match } = this.props;
    const { movieId } = match.params;
    const { movie } = this.state;

    return (
      movie && (
        <>
          <h2> MovieDetailsPage id={movieId}</h2>
          <h3>{movie.title}</h3>
          <div>{movie.release_date}</div>
          <img
            src={`${BASE_URL_POSTER}${movie.poster_path}`}
            alt={movie.title}
            width="150"
          />
          <br></br>
          <Link to={`${match.url}/cast`}>cast</Link>
          <br></br>
          <Link to={`${match.url}/reviews`}>reviews</Link>

          <Switch>
            <Route path={`${match.path}/cast`} component={Cast} />
            <Route path={`${match.path}/reviews`} component={Reviews} />
          </Switch>
        </>
      )
    );
  }
}

export default MovieDetailsPage;
