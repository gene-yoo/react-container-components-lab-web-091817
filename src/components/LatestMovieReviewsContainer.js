import React from "react";
import MovieReviews from "./MovieReviews";

import "isomorphic-fetch";

const NYT_API_KEY = "";
const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/all.json?" +
  `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

class LatestMovieReviewsContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      reviews: []
    };
  }

  componentWillMount() {
    fetch(URL)
      .then(res => res.json())
      .then(reviews => this.setState({ reviews }));
  }

  render() {
    return (
      <MovieReviews
        className="latest-movie-reviews"
        reviews={this.state.reviews}
      />
    );
  }
}

export default LatestMovieReviewsContainer;
