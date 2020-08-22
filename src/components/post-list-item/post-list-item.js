import React, { Component } from "react";
import "./post-list-item.css";

export default class PostListItem extends Component {
  render() {

    let classNames = "d-flex app-list-item justify-content-between";

    return (
      <div className="d-flex app-list-item justify-content-between">
        <span className="app-list-item-label">
          Post
        </span>
        <div className="d-flex justify-content-center align-items-center">
          <button
            type="button"
            className="btn-star btn-sm">
            <i className="fa fa-star"></i>
          </button>
          <button
            type="button"
            className="btn-trash btn-sm">
            <i className="fa fa-trash-o"></i>
          </button>
          <i className="fa fa-heart"></i>
        </div>
      </div>
    );
  }
}