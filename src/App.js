import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Post from "./component/Post";
import { Provider } from "react-redux";
import store from "./store";
import PostForm from "./component/PostForm";
import Pagination from "./component/Pagination";

function App() {
  useEffect(() => {}, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Provider store={store}>
        <PostForm />
        <Post />
      </Provider>
    </div>
  );
}

export default App;
