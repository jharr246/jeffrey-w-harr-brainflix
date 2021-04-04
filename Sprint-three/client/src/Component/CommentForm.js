import React, { Component } from "react";
import avatar from "../assets/Images/Mohan-muruge.jpg";

export default class CommentForm extends Component {
  render() {
    return (
      <div className="comments">
        <h1 className="comments__title">
          {this.props.commentObj?.length
            ? `${this.props.commentObj?.length} Comments`
            : "Be The First to Comment!"}
        </h1>
        <form className="comments__form">
          <div className="comments__avatar--container">
            <img
              className="navbar__avatar comments__avatar"
              src={avatar}
              alt="avatar"
            ></img>
            <label htmlFor="comments" className="comments__labels">
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
            className="comments__submit"
          ></input>
        </form>
      </div>
    );
  }
}
