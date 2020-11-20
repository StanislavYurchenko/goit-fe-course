import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { searchMoviesByKeyword, popularFetch } from '../../servises/themoviedbApi';
import SearchBox from '../../components/SearchBox/SearchBox';
import parseQueryString from '../../utils/parseQueryString';

class MoviesPage extends Component {
  state = {
    searchList: [],
    error: false,
    loading: false,
  };

  componentDidMount = () => {
    const { location } = this.props;
    const { userQuery } = parseQueryString(location.search);
    if (userQuery) {
      searchMoviesByKeyword(userQuery, 1).then(res => this.setState({ searchList: res.results }));
    }
    if (!userQuery) {
      popularFetch(1).then(res => this.setState({ searchList: res.results }));
    }
  };

  componentDidUpdate = (prevProps, prevState) => {
    const { location } = this.props;

    const { userQuery: prevQuery } = parseQueryString(prevProps.location.search);
    const { userQuery: nextQuery } = parseQueryString(location.search);

    if (prevQuery !== nextQuery) {
      searchMoviesByKeyword(nextQuery, 1).then(res => this.setState({ searchList: res.results }));
    }
  };

  onChangeQuery = query => {
    const { history, location } = this.props;

    history.push({
      ...location,
      search: `userQuery=${query}`,
    });
  };

  render() {
    const { searchList } = this.state;
    const { match } = this.props;
    return (
      <>
        <SearchBox onSubmit={this.onChangeQuery} />
        <h2> MoviesPage</h2>
        {searchList.length > 0 && (
          <ul>
            {searchList.map(({ id, original_title, original_name }) => {
              return (
                <li key={id}>
                  <Link to={`${match.url}/${id}`}>{original_title || original_name}</Link>
                </li>
              );
            })}
          </ul>
        )}
      </>
    );
  }
}

export default MoviesPage;
