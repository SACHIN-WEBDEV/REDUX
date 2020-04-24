import React, { Component } from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { createPost } from "../actions/postActions";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body,
    };
    console.log(post);

    this.props.createPost(post);
  }

  render() {
    return (
      <div>
        <h1 className="text-center display-4 my-4">Add Post</h1>
        <form onSubmit={this.onSubmit}>
          <label htmlFor="">Title:</label>
          <input
            type="text"
            onChange={this.onChange}
            name="title"
            className="form-control"
            value={this.state.title}
            id=""
          />
          <label htmlFor="">Body:</label>
          <textarea
            name="body"
            type="text"
            onChange={this.onChange}
            className="form-control"
            value={this.state.body}
            id=""
          />
          <div className="col-md-6 mx-auto">
            <button
              className="btn btn-outline-success btn-block mt-3"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
        <hr />
      </div>
    );
  }
}
PostForm.propsTypes = {
  createPost: PropTypes.func.isRequired,
};

export default connect(null, { createPost })(PostForm);
