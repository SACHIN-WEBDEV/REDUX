import React, { Component } from "react";
import PropsTypes from "prop-types";
import { connect } from "react-redux";
import { fetchPosts, createPost } from "../actions/postActions";
import Pagination from "./Pagination.js";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      postPerPage: 10,
    };
  }
  componentWillMount() {
    this.props.fetchPosts();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }

  render() {
    const postPerPage = this.state.postPerPage;
    const currentPage = this.state.currentPage;

    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPosts = this.props.posts.slice(
      indexOfFirstPost,
      indexOfLastPost
    );

    const paginate = (currentPage) => {
      this.setState({
        currentPage: currentPage,
      });
    };

    const postItems = currentPosts.map((post) => (
      <div className="col-md-6">
        <div key={post.id}>
          <div className="card my-2">
            <div className="card-header">
              <h3 className="lead">{post.title}</h3>{" "}
            </div>
            <div className="card-body">
              <p>{post.body}</p>
            </div>
          </div>
        </div>
      </div>
    ));
    return (
      <div>
        <h1 className="text-center display-4 my-3">Posts</h1>
        <div className="row"> {postItems}</div>

        <Pagination
          postPerPage={postPerPage}
          totalPosts={100}
          paginate={paginate}
        ></Pagination>
      </div>
    );
  }
}

Post.PropsTypes = {
  fetchPosts: PropsTypes.func.isRequired,
  posts: PropsTypes.array.inRequired,
  newPost: PropsTypes.object,
};
const mapStateToProps = (state) => ({
  posts: state.posts.items,
  newPost: state.posts.item,
});

export default connect(mapStateToProps, { fetchPosts, createPost })(Post);
