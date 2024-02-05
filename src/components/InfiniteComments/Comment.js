import React, { useState } from "react";

const Comment = ({ comment }) => {
  const [enableReplyButton, setEnableReplyButton] = useState(false);
  const [replyText, setReplyText] = useState("");

  const addReply = ({ id, replyText }) => {
    console.log({ id, replyText });
  };
  //   console.log(comment);
  return (
    <>
      <div
        style={{
          margin: "10px",
          padding: "10px",
          //   position: "relative",
        }}
      >
        <div
          style={{
            backgroundColor: "#ebebeb",
          }}
        >
          <div>
            <h3 style={{ color: "gray" }}>{comment.name}</h3>
          </div>
          <h5>{comment.text}</h5>
          <div>
            <button onClick={() => setEnableReplyButton(!enableReplyButton)}>
              {" "}
              Reply
            </button>
            <button> Delete</button>
          </div>
        </div>

        {enableReplyButton && (
          <div
            style={{
              backgroundColor: "#ebebeb",
              padding: "10px",
              marginTop: "20px",
            }}
          >
            <input onChange={(e) => setReplyText(e.target.value)} />
            <button onClick={() => addReply({ id: comment.id, replyText })}>
              Add commnet
            </button>
            <button onClick={() => setEnableReplyButton(!enableReplyButton)}>
              {" "}
              Cancel
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Comment;
