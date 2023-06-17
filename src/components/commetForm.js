import React, { useState ,useEffect, useRef} from 'react'

function CommetForm({handleSubmit}) {
let [text,setText]=useState('');
let isButtonDisabled=text.length===0;
let inputref=useRef();

    useEffect(()=>{
      inputref.current.focus()
    },[]);

function formSubmit(event){
    event.preventDefault();
    setText('');
    handleSubmit(text);
}
  return (
    <form onSubmit={formSubmit} className='write-form'>
        <p>Write Comment</p>
        <textarea className='shadow-sm' placeholder='Write your comments here' value={text} ref={inputref} onChange={(e)=>{
            setText(e.target.value)
        }}></textarea>
        <button disabled={isButtonDisabled}>Add Comment</button>
    </form>
  )
}

export default CommetForm