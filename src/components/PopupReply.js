import React, {useState } from "react";

function PopupReply({ id, replyHandler,popupHandler,deleteComment }) {
    let [text,setText]=useState('');
    
   function popupSubmit(){
    if(text.length===0){
      popupHandler();
    }
    else{
      popupHandler();
      replyHandler(text,id);
    }
   }

  return (
    <div className="popup-wrapper">
      <div className="popup">
       <textarea  autoFocus placeholder='Your Replpy here' value={text} onChange={(e)=>{setText(e.target.value)}}></textarea>
        <button className='btn btn-primary' onClick={popupSubmit}>add</button>
      </div>
    </div>
  );
}

export default PopupReply;