import React, { Component } from "react";
import videoDetails from "../Data/video-details.json";
import Comments from "./Comments.js";

export default class CommentList extends Component {
  state = { comment: videoDetails[0].comments };
  render() {
    return (
      <div>
        {this.state.comment.map((comments) => {
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
