import React, { Component } from "react";
import avatar from "../assets/Images/Mohan-muruge.jpg";
import axios from "axios";
export default class CommentForm extends Component {
  // Diving Deeper Challenge... not finished
  // apiKey = "?api_key=85392de3-d044-486a-9f9a-8b631af1f6bc";
  // videoUrl = "https://project-2-api.herokuapp.com/";

  // commentSubmit = (e) => {
  //   e.preventDefault();
  //   let inputComment = {
  //     name: "user",
  //     comment: e.target.comments.value,
  //   };

  //   axios
  //     .post(
  //       `${this.videoUrl}videos/${this.props.commentObj.id}/comments${this.apiKey}`,
  //       inputComment
  //     )
  //     .then((response) => {
  //       this.setState({ mainVideo: response.data });
  //     });
  // };

  render() {
    return (
      <div className="comments">
        <h1 className="comments__title">{`${this.props.commentObj?.length} Comments`}</h1>
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
            class="comments__submit"
          ></input>
        </form>
      </div>
    );
  }
}
