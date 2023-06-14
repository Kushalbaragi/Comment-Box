import React, { useState } from "react";
import Popup from "./popup";

function Comment({ comment, replies,deleteComment,editHandle}) {

    let [popup,setPopup]=useState(false);
  // console.log(comment);
  return (
    <>
    <div className="comment-wrapper">
      <img />
      <p>{comment.id}</p>
      <p>{comment.comment}</p>
      <div className="action-wrapper">
        <button>Reply</button>
        <button onClick={()=>{setPopup(!popup)}}>Edit</button>
        <button onClick={()=>{
            deleteComment(comment.id)
        }}>Delete</button>

      </div>
      <div className="reply-wrapper">
        {replies &&
          replies.map((reply) => (
            <Comment key={reply.id} comment={reply} replies={[]} deleteComment={deleteComment} editHandle={editHandle}/>
          ))}
      </div>
    </div>
    {popup &&  <Popup commentText={comment.comment} id={comment.id} editHandle={editHandle}/>}
   
    </>
  );
}

export default Comment;
