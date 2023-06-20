import React, { useState } from "react";
import PopupEdit from "./PopupEdit";
import PopupReply from "./PopupReply";
import CommetForm from "./commetForm";

function Comment({ handleSubmit,comment, deleteComment, editHandler, replyHandler, name }) {
  let [popupEdit, setPopupEdit] = useState(false);
  let [popupReply, setPopupReply] = useState(false);
  let [replyText, setReplyText] = useState("");
  let [editText, setEditText] = useState("");


  function popupHandlerEdit() {
    setPopupEdit(!popupEdit);
  }

  function popupHandleReply() {
    setPopupReply(!popupReply);
  }

  function replyClickHandler() {
    if (replyText.length > 0) {
      replyHandler(replyText, comment.id);
      setPopupReply(!popupReply);
      setReplyText("");
    }
  }
  function editClickHandler(id) {
    if (editText.length > 0) {
      editHandler(editText, id);
      setEditText("");
    }
    setPopupEdit(!popupEdit);

  }
  console.log(comment);

  return (
    <>
    {comment.id === 1 ? <CommetForm handleSubmit={handleSubmit} /> : comment.child?.length===0 ?<p>No comments</p>:
       <div className="comment-wrapper">
        <div className="comment-wrapper-sub">
          <div className="left">
            <i className="fi fi-sr-user"></i>
          </div>
          <div className="right">
            <span className="name">{comment.userName}</span>
            <span className="date">{comment.date}</span>
            <span className="time">{comment.time}</span>

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
                
                    setPopupEdit(!popupEdit);
                  
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
            {popupReply && (
              <div className="reply-wrapper">
                <input
                  type="text"
                  value={replyText}
                  onChange={(e) => {
                    setReplyText(e.target.value);
                  }}
                  placeholder="type your reply"
                  autoFocus
                />
                <button onClick={replyClickHandler}>Add</button>
              </div>
            )}
            {popupEdit && (
              <div className="reply-wrapper">
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => {
                    setEditText(e.target.value);
                  }}
                  placeholder="type your reply"
                  autoFocus
                />
                <button onClick={()=>editClickHandler(comment.id)}>Add</button>
              </div>
            )}
          </div>
        </div>
      </div> 
      }
       <div style={{ marginLeft: "30px" }}>
          {comment?.child?.map((child) => {
              return (
                <Comment
                  comment={child}
                  key={child.id}
                  name={name}
                  editHandler={editHandler}
                  deleteComment={deleteComment}
                  replyHandler={replyHandler}
                />
              );
            })
            }
        </div>
    </>
  );
}

export default Comment;


Piyush Agarwal
23:07 PM
https://github.com/Narahari-Sundaragopalan/JavaScript-Interview-Questions/tree/master/FE-JS-Questions

Piyush Agarwal
23:08 PM
https://github.com/devkodeio/the-dom-challenge

Piyush Agarwal
23:08 PM
https://www.youtube.com/playlist?list=PLKhlp2qtUcSYQojD5G-ElgHezoCyq2Hgo

Piyush Agarwal
23:10 PM
https://github.com/lydiahallie/javascript-questions

Piyush Agarwal
23:18 PM
https://www.youtube.com/watch?v=EADBPL6eeqY

Piyush Agarwal
23:35 PM
https://www.greatfrontend.com/?fpr=roadsidecoder



Piyush Agarwal
23:08 PM
https://github.com/devkodeio/the-dom-challenge

Piyush Agarwal
23:08 PM
https://www.youtube.com/playlist?list=PLKhlp2qtUcSYQojD5G-ElgHezoCyq2Hgo

Piyush Agarwal
23:10 PM
https://github.com/lydiahallie/javascript-questions

Piyush Agarwal
23:18 PM
https://www.youtube.com/watch?v=EADBPL6eeqY

Piyush Agarwal
23:35 PM
https://www.greatfrontend.com/?fpr=roadsidecoder

Piyush Agarwal
23:36 PM
[Learn to Code: How React.js Works](https://youtu.be/mLMfx8BEt8g)

[Reconciliation - React](https://reactjs.org/docs/reconciliation.html)

[Preserving and Resetting State – React](https://react.dev/learn/preserving-and-resetting-state)

### Performance

[Code Splitting in React JS - Lazy Loading Performance Optimization](https://www.youtube.com/watch?v=IBrmsyy9R94)

- Virtualization to optimise large lists
- shouldComponentUpdate
- React Profiler
- React.memo ( Only memoize when props hardly change )
- code splitting
- Use `React.Fragments` to Avoid Additional HTML Element Wrappers
- Avoid Inline Function Definition in the Render Function
- Debounce and Throttling
- useMemo + Its Polyfill
- Cancel Token for axios call ( axios.CancelToken.source() )
- key in map
- using CDN when needed
- server side rendering
- vite

[10 Tips For FASTER React App](https://www.youtube.com/watch?v=rBhKb9JE8z0)

[Modern Rendering Patterns](https://www.lydiahallie.io/blog/rendering-patterns)

### SEO

- ReactDOMServer
- Helmet
- Next JS Overview

[Overview of Next.js](https://www.patterns.dev/posts/nextjs)

[Web Vitals](https://web.dev/vitals/)
