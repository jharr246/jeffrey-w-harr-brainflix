import React, { Component } from "react";
import CommentList from "./CommentList";
import avatar from "../assets/Images/Mohan-muruge.jpg";

export default class CommentForm extends Component {
  render() {
    return (
      <div className="comments">
        <h1 className="comments__title">Comments</h1>
        <form className="comments__form">
          <div className="comments__avatar--container">
            <img
              className="navbar__avatar comments__avatar"
              src={avatar}
              alt="avatar"
            ></img>
            <label for="comments" className="comments__labels">
              JOIN THE CONVERSATION
              <input
                type="text"
                id="comments"
                name="comments"
                placeholder="Comment Here"
                className="comments__input"
              ></input>
            </label>
          </div>
          <input
            id="submit"
            type="submit"
            value="COMMENT"
            class="comments__submit"
          ></input>
        </form>
        <CommentList />
      </div>
    );
  }
}
