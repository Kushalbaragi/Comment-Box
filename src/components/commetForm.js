import React, { useState } from 'react'

function CommetForm({handleSubmit}) {
let [text,setText]=useState('');
let isButtonDisabled=text.length===0;

function formSubmit(event){
    event.preventDefault();
    handleSubmit(text);
}
  return (
    <form onSubmit={formSubmit}>
        <h2>Write Comment</h2>
        <textarea onChange={(e)=>{
            setText(e.target.value)
        }}></textarea>
        <button disabled={isButtonDisabled}>Write</button>
    </form>
  )
}

export default CommetForm