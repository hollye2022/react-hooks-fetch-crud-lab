import React, { useEffect, useState } from "react";
import QuestionItem from "./QuestionItem";


function QuestionList() {

  const [questions, setQuestions] = useState([])

  useEffect(()=>{
    fetch("http://localhost:4000/questions")
    .then(res=>res.json())
    .then(data=>setQuestions(data))
  
  },[])

  
function toDelete(id){
  console.log(id)
  const newQuestions = questions.filter((question)=>question.id !==id)
  setQuestions(newQuestions)

}
//  console.log(toUpdate(3))

function toUpdate(newQuestion){
  const newQuestions =questions.map((question)=>{
    if(question.id === newQuestion.id) return newQuestion;

    else return question

  })
  setQuestions(newQuestions)
}

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{/* display QuestionItem components here after fetching */}
      {questions.map(question=> {
       return <QuestionItem question={question} key={question.id} toDelete={toDelete}
       toUpdate={toUpdate} />
      })}
      </ul>
    </section>
  );
}

export default QuestionList;
