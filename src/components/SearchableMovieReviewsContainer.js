// Code SearchableMovieReviewsContainer Here
import React from "react";
import MovieReviews from "./MovieReviews";

import "isomorphic-fetch";

const NYT_API_KEY = "";
const URL = "https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=";

class SearchableMovieReviewsContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      searchTerm: "",
      reviews: []
    };
  }

  componentWillMount() {
    fetch(URL + this.state.searchTerm + `api-key=${NYT_API_KEY}`)
      .then(res => res.json())
      .then(reviews => this.setState({ reviews }));
  }

  render() {
    return (
      <MovieReviews
        className="searchable-movie-reviews"
        reviews={this.state.reviews}
      />
    );
  }
}

export default SearchableMovieReviewsContainer;
