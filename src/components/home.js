import React, { useEffect, useState } from "react";
import { commentData } from "../data/commentData";
import Comment from "./comment";
import CommetForm from "./commetForm";

function Home() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    commentData().then((data) => setComments(data));
  }, []);

  function repliesfn(id){
   return  comments.filter(comment=>comment.parentId===id);
   
  }

  function handleSubmit(text){
let id=Math.floor(Math.random()*10000);
    setComments([...comments,{
        id:id,
        comment:text,
        parentId:null
    }])
  }

  function deleteComment(id){
   setComments(comments.filter(a=>a.id!==id));
  }

  function editHandle(text,id){
    let comment=comments.findIndex(a=>a.id===id);
    console.log(comment);
  }

  return (
    <>
    <h1>Comments</h1>
    <CommetForm handleSubmit={handleSubmit}/>
      {comments.filter(comment=>comment.parentId===null).map((comment) => (
        <Comment key={comment.id} comment={comment} replies={repliesfn(comment.id)} deleteComment={deleteComment} editHandle={editHandle}/>
      ))}
    </>
  );
}

export default Home;
