import React, { Component } from "react";
import AppHeader from "../app-header";
import PostStatusFilter from "../post-status-filter";
import SearchPanel from "../search-panel";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";
import "./app.css";

export default class App extends Component {
  state = {
    postData: [
      this.createItem("I wish I knew react well"),
      this.createItem("Could we have some coffee?"),
      this.createItem("Lets play that amazing game altogether!"),
    ],
  };

  createItem(label) {
    return {
      label,
      important: false,
      like: false,
      id: (Math.random() * Math.random() * 23123).toFixed(),
    };
  }
  getIndex = (arr, id) => {
    return arr.findIndex((el) => el.id === id);
  };
  onDeleted = (id) => {
    if (window.confirm("Are you sure you wish to delete this item?")) {
      this.setState(({ postData }) => {
        const index = this.getIndex(postData, id);
        return {
          postData: [...postData.slice(0, index), ...postData.slice(index + 1)],
        };
      });
    }
  };
  render() {
    const { postData } = this.state;
    return (
      <div className="app">
        <AppHeader />
        <div className="d-flex">
          <SearchPanel />
          <PostStatusFilter />
        </div>
        <PostList posts={this.state.postData} onDeleted={this.onDeleted} />
        <PostAddForm />
      </div>
    );
  }
}
