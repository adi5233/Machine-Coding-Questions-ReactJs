import React from "react";
import Comment from "./Comment";

const CommentsList = ({ comments }) => {
  console.log(comments);
  return (
    <div style={{ padding: "5px" }}>
      {comments.map((comment) => (
        <div key={comment.name}>
          <Comment comment={comment} />
          {comment.replies?.length && (
            <div style={{ marginLeft: "10px", color: "" }}>
              <CommentsList comments={comment.replies} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CommentsList;
