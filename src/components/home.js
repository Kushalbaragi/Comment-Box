import React, { useEffect, useState } from "react";
import {
  dateGenerator,
  logo,
  timeGenerator,
  UUID,
  deleteNode,
  editNode,
  insertNode,
} from "../helpers/helpers.js";
import Comment from "./comment";
import UserPopup from "./userPopup";
import { commentData } from "../database/data.js";

function Home() {
  const [comments, setComments] = useState([]);
  const [name, SetName] = useState("kushal baragi");
  const [userPopup, SetUserPopup] = useState(true);

  useEffect(() => {
    setComments(commentData);
  }, []);

  function handleSubmit(text) {
    setComments(insertNode(comments, 122, text, name));
  }
  function deleteComment(id) {
    console.log('ddd');
   setComments(deleteNode(comments, id));
  }

  function editHandler(text, id) {
    setComments(editNode(comments, id, text));
    
  }

  function replyHandler(commentReply, currentId) {
    setComments(insertNode(comments, currentId, commentReply,name));
  }

  function nameSubmit(text) {
    if (text.length !== 0) {
      SetName(text);
      SetUserPopup(!userPopup);
    }
  }

  return (
    <>
      {/* {userPopup && <UserPopup nameSubmit={nameSubmit} />} */}
      <div className="logo-wrapper">
        <img className="logo" src={logo} alt="logo"></img>
      </div>

      <div className="container">
        <div className="statement">
          <p>
            <strong>Statement : </strong> Create a comment box in react in which
            when a user inputs the comment, it should show all the comments
            below the comment box. Each comment should have two buttons. Edit
            and reply. Clicking on the edit button should pop up a text input
            where the user can edit the comment that he previously put. The
            reply should add a reply to that comment where the reply should be
            shifted towards the right by 20px. Users can add an infinite number
            of replies to a comment.
          </p>
        </div>
        <hr />
        <div className="overview">
          <p className="h4">Overview</p>
          <ul>
            <li>
              Initially application will ask for username in order to continue.
            </li>
            <li>
              It wont ask your name even if you refresh the page, untill &
              unless you close the tab or browser, I have used session storage
              for storing name.
            </li>
            <li>
              Given the comment input box. Untill they enter letter in box,
              button will be disabled.
            </li>
            <li>User can write comment and add to the list</li>
            <li>
              We added comment along with username, date, time, and action
              buttons{" "}
            </li>
            <li>
              <strong>
                {" "}
                we have some randomn comments showing in page which the current
                user can reply but cannot edit or delete
              </strong>{" "}
            </li>
            <li>
              user can edit and delete the comment if they have owner of that
            </li>
            <li>
              <strong>Edit : </strong> when user click on edit, popup will
              appear along with current content where they can modify and add or
              they can delete by emptying the field
            </li>
            <li>
              <strong>Reply : </strong> when user click on reply, popup will
              appear to add reply they can add 'N' Number of reply which are
              going to show below the parent comment
            </li>
            <li>
              <strong>Delete : </strong>User can delete the comment by clicking
              delete button
            </li>
            <li>Right now i have implemented level reply</li>
            <li className="text-success fw-bold">
              I am storing data using local storage so even if they close the
              tab/window/browser we dont loose the data
            </li>
          </ul>
        </div>
        <hr />

        <h2 className="comments">Comments</h2>

        <Comment
          handleSubmit={handleSubmit}
          comment={comments}
          key={comments.id}
          deleteComment={deleteComment}
          editHandler={editHandler}
          replyHandler={replyHandler}
          name={name}
        />
      </div>
    </>
  );
}

export default React.memo(Home);
