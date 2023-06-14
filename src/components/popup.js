import React, { useState } from "react";

function Popup({ commentText, id, editHandle }) {
    let [text,setText]=useState(commentText);
  return (
    <div className="popup-wrapper">
      <div className="popup">
      <i className="fi fi-sr-seal-exclamation"></i>
       <textarea value={text} onChange={(e)=>{setText(e.target.value)}}></textarea>
        <button onClick={editHandle(text,id)}>add</button>
      </div>
    </div>
  );
}

export default Popup;