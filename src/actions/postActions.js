import { FETCH_POST, NEW_POST } from "./types";

export const fetchPosts = () => (dispatch) => {
  console.log(`fetching`);

  fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then((res) => res.json())
    .then((data) =>
      dispatch({
        type: FETCH_POST,
        payload: data,
      })
    );
};

export const createPost = (postData) => (dispatch) => {
  console.log(`Sending post`);

  fetch(`https://jsonplaceholder.typicode.com/posts`, {
    method: "POST",

    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) =>
      dispatch({
        type: NEW_POST,
        payload: post,
      })
    );
};
