import React, {useState } from "react";

function PopupEdit({ commentText, id, editHandle,popupHandler,deleteComment }) {
    let [text,setText]=useState(commentText);
    
   function popupSubmit(){
    editHandle(text,id);
    popupHandler();
    if(text.length===0) deleteComment(id);
   }

  return (
    <div className="popup-wrapper">
      <div className="popup">
       <textarea value={text} onChange={(e)=>{setText(e.target.value)}}></textarea>
        <button className='btn btn-primary' onClick={popupSubmit}>add</button>
      </div>
    </div>
  );
}

export default PopupEdit;