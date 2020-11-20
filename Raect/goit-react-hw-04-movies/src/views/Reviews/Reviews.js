import React, { Component } from "react";

import { getUserReviewsAboutFilmById } from "../../servises/themoviedbApi";

class Reviews extends Component {
  state = {
    reviews: [],
    page: 1,
    error: false,
    loading: false,
  };

  componentDidMount = () => {
    const { match } = this.props;
    const { movieId } = match.params;
    const { page } = this.state;

    getUserReviewsAboutFilmById(movieId, page).then((res) => {
      console.log(res.results);
      this.setState({ reviews: res.results });
    });
  };

  render() {
    const { reviews } = this.state;

    return (
      <>
        <h2> Reviews</h2>

        {reviews.length > 0 && (
          <ul>
            {reviews.map(({ author, content, id }) => {
              return (
                <li key={id}>
                  <h3>{author}</h3>
                  <p>{content}</p>
                </li>
              );
            })}
          </ul>
        )}
      </>
    );
  }
}

export default Reviews;
