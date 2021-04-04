import React, { Component } from "react";

import Comments from "./Comments/Comments";

export default class CommentList extends Component {
  render() {
    return (
      <div className="comments">
        {this.props.commentObj?.map((comments) => {
          const timeStamp = comments.timestamp;
          const dateObj = new Date(timeStamp);
          const displayDate = dateObj.toLocaleString("en-us", {
            day: "numeric",
            month: "numeric",
            year: "numeric",
          });

          return (
            <Comments
              key={comments.id}
              name={comments.name}
              timestamp={displayDate}
              comment={comments.comment}
            />
          );
        })}
      </div>
    );
  }
}
