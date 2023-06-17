import React, { useState } from "react";
import PopupEdit from "./PopupEdit";
import PopupReply from "./PopupReply";

function Comment({
  comment,
  deleteComment,
  editHandle,
  replyHandler,
  name
}) {
  let [popupEdit, setPopupEdit] = useState(false);
  let [popupReply, setPopupReply] = useState(false);

  function popupHandlerEdit() {
    setPopupEdit(!popupEdit);
  }

  function popupHandleReply() {
    setPopupReply(!popupReply);
  }
  return (
    <>
      <div className="comment-wrapper">
        <div className="comment-wrapper-sub">
          <div className="left">
            <i className="fi fi-sr-user"></i>
          </div>
          <div className="right">
              <span className="name">{comment.userName}</span>
              <span className='date'>{comment.date}</span>
              <span className='time'>{comment.time}</span>

            <p className="comment">{comment.comment}</p>
            <div className="action-wrapper">
              <button
                onClick={() => {
                  setPopupReply(!popupReply);
                }}
                className="reply"
              >
                Reply
              </button>
              <button
                onClick={() => {
                  if (comment.userName !== name) {
                    alert("Can't Edit others comment");
                    return;
                  } else {
                    setPopupEdit(!popupEdit);
                  }
                }}
              >
                Edit
              </button>
              <button
                onClick={() => {
                  deleteComment(comment.id);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
        <div style={{marginLeft:'30px'}}>
        {comment.child.length>0 && 
         comment.child.map(child=>{
          return <Comment 
          comment={child}
          key={child.id}
          name={name}
          editHandle={editHandle}
          deleteComment={deleteComment}
          />
         })
        }
        </div>


      </div>
       {popupEdit && (
        <PopupEdit
          commentText={comment.comment}
          id={comment.id}
          editHandle={editHandle}
          popupHandler={popupHandlerEdit}
          deleteComment={deleteComment}
        />
      )}
      {/* {popupReply && (
        <PopupReply
          commentText={comment.comment}
          id={comment.id}
          replyHandler={replyHandler}
          popupHandler={popupHandleReply}
          deleteComment={deleteComment}
        />
      )}  */}
    </>
  );
}

export default Comment;
