import React, { Component } from "react";
import { Link } from "react-router-dom";
import { popularFetch } from "../../servises/themoviedbApi";
import routes from "../../routes";

class HomePage extends Component {
  state = {
    popularList: [],
    error: false,
    loading: false,
  };

  componentDidMount = () => {
    popularFetch(1).then(({ results }) =>
      this.setState({ popularList: results })
    );
  };

  render() {
    const { popularList } = this.state;
    return (
      <>
        <h2> MoviesPage</h2>
        {popularList.length > 0 && (
          <ul>
            {popularList.map(({ id, original_title, original_name }) => {
              return (
                <li key={id}>
                  <Link to={`${routes.movies}/${id}`}>
                    {original_title || original_name}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </>
    );
  }
}

export default HomePage;
