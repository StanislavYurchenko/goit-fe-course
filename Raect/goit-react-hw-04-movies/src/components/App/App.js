import React from "react";
import { Route, Switch } from "react-router-dom";
import routes from "../../routes";

import HomePage from "../../views/HomePage/HomePage";
import MovieDetailsPage from "../../views/MovieDetailsPage/MovieDetailsPage";
import MoviesPage from "../../views/MoviesPage/MoviesPage";
import NotFound from "../../views/NotFound/NotFound";
import Layout from "../Layout/Layout";

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path={routes.home} exact component={HomePage} />
        <Route path={routes.movies} exact component={MoviesPage} />
        <Route path={routes.movieDetails} component={MovieDetailsPage} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
};

export default App;
