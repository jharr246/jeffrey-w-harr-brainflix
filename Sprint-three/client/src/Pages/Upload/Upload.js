import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import uploadImg from "../../assets/Images/Upload-video-preview.jpg";
import "./Upload.scss";
import axios from "axios";

class Upload extends Component {
  state = { title: " ", description: " " };

  url = "/api/videos";

  uploadSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${this.url}`, {
        title: this.state.title,
        description: this.state.description,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
    alert("Upload Successful");

    this.props.history.push("/");
  };

  inputTitle = (e) => {
    e.preventDefault();
    this.setState({ title: e.target.value });
  };

  inputDescription = (e) => {
    e.preventDefault();
    this.setState({ description: e.target.value });
  };

  render() {
    return (
      <div className="upload__page">
        <h1 className="upload__heading"> Upload Video</h1>
        <form onSubmit={this.uploadSubmit} className="upload">
          <div className="form__desktop">
            <div className="img__container">
              <label className="upload__label" htmlFor="upload">
                VIDEO THUMBNAIL
                <img
                  className="upload__img"
                  src={uploadImg}
                  alt="thumbnail"
                ></img>
                <input
                  className="upload__input"
                  id="upload"
                  name="upload"
                  type="file"
                />
              </label>
            </div>
            <div className="text__container">
              <label className="upload__label" htmlFor="upload__title">
                {" "}
                TITLE YOUR VIDEO
                <input
                  className="upload__title"
                  type="text"
                  placeholder="Add a title to your video"
                  value={this.state.title}
                  onChange={this.inputTitle}
                  required="required"
                />
              </label>
              <label className="upload__label" htmlFor="upload__description">
                ADD A VIDEO DESCRIPTION
                <textarea
                  className="upload__description"
                  placeholder="Add a description of your video"
                  value={this.state.description}
                  onChange={this.inputDescription}
                  required="required"
                ></textarea>
              </label>
            </div>
          </div>
          <div className="upload__buttons">
            <input className="upload__publish" type="submit" value="PUBLISH" />
            <label className="upload__cancel--center" htmlFor="upload__cancel">
              <input className="upload__cancel" type="reset" value="CANCEL" />
            </label>
          </div>
        </form>
      </div>
    );
  }
}
export default withRouter(Upload);
