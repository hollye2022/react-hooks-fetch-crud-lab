import React, {useState} from "react";

function QuestionItem({ question,toDelete, toUpdate }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function onHandleDelete(){
    fetch(`http://localhost:4000/questions/${id}`,{
      method:"DELETE" 
    })
    .then(res=>res.json())
     .then(() => toDelete(id))
  }

function onHandleUpdate(e){
  fetch(`http://localhost:4000/questions/${id}`,{
    method:"PATCH",
    headers:{
      "Content-Type":"application/json",
      Accept:"application/json"
    },
    body: JSON.stringify({
      correctIndex: parseInt(e.target.value)
    })
  })
  .then(res=>res.json())
  .then(data=>toUpdate(data))
}
  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Select Your Answer:
        <select  onChange={onHandleUpdate} > 
        <option></option>
        {options}</select>
      </label>
      <button onClick={onHandleDelete} >Delete Question</button>
    </li>
  );
}

export default QuestionItem;
