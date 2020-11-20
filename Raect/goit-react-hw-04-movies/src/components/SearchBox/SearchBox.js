import React, { Component } from "react";

class SearchBox extends Component {
  state = {
    userQuery: "",
  };

  formReset = () => {
    this.setState({ userQuery: "" });
  };

  onChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  onSubmit = (event) => {
    event.preventDefault();
    const { userQuery } = this.state;
    const { onSubmit, history } = this.props;
    onSubmit(userQuery);
    this.setState({ userQuery: "" });

    this.formReset();
  };

  render() {
    const { userQuery } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          name="userQuery"
          onChange={this.onChange}
          value={userQuery}
          autoFocus
          placeholder="Search movies"
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default SearchBox;
