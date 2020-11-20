import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { popularFetch } from '../../services/themoviedbApi';
import { routesMain } from '../../routes';

class HomePage extends Component {
  state = {
    popularList: [],
    error: false,
    loading: false,
  };

  componentDidMount = () => {
    popularFetch(1).then(({ results }) => this.setState({ popularList: results }));
  };

  render() {
    const { popularList } = this.state;
    const { location } = this.props;
    const pathToMoviePage = routesMain.find(route => route.label === 'MoviesPage').path;
    return (
      <>
        <h2>HomePage</h2>
        {popularList.length > 0 && (
          <ul>
            {popularList.map(({ id, original_title, original_name }) => {
              return (
                <li key={id}>
                  <Link to={{ pathname: `${pathToMoviePage}/${id}`, state: { from: location } }}>
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
