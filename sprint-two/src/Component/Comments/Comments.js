import React, { Component } from "react";
import "./Comments.scss";
export default class Comments extends Component {
  render() {
    return (
      <section className="comments__border">
        <div className="comments__default">
          <p className="comments__blank-avatar"></p>
          <div className="comments__default--container">
            <p className="comments__default--name">{this.props.name}</p>
            <p className="comments__default--timestamp">
              {this.props.timestamp}
            </p>
          </div>
        </div>
        <p className="comments__default--comment">{this.props.comment}</p>
      </section>
    );
  }
}
